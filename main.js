/**
 * Author: Vincent-the-gamer
 * GitHub: https://github.com/Vincent-the-gamer
 * Bilibili: https://space.bilibili.com/3342738
 */
const fs = require('fs')
const shell = require("shelljs")
const express = require("express")
// Shell command will differ in Windows and macOS/Linux, use this to get current OS Platform.
const { getCurrentPlatform } = require("./useCurrentPlatform")

const { exec } = shell
const app = express()

// parse the request body of method post
app.use(express.json())


async function writeFile(content){
    const path = "./src/main.wy"

    return new Promise((resolve, reject) => {
        fs.writeFile(path,content,(err) => {
            if(err){
                reject(err.message)
            }
            resolve(`File has been written successfully in ${path}`)
        })
    })
}


// cross origin --- disable this if you are using nginx to proxy pass this server
app.all("*",function(req,res,next){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers','content-type')
    res.header('Access-Control-Allow-Methods','DELETE,PUT,POST,GET,OPTIONS')
    if(req.method.toLowerCase() == 'options')
        res.sendStatus(200)
    else
        next()
})


app.post("/runCode", async (req, res) => {
    const wenyanCode = req.body.code
    // Write your Wenyan code into src/main.wy
    await writeFile(wenyanCode)

    const currentPlatform = getCurrentPlatform()

    const shellCmd = currentPlatform === "Windows" ? "sh run.sh main.wy" : "./run.sh main.wy"

    // Run your code
    exec(shellCmd, (code, stdout, stderr) => {
        if(stderr){
            res.end(stderr)
        }
        else if(stdout === ""){
            res.end("Your output is empty, it may be a syntax error, or you didn't output anything.")
        }
        else{
            res.end(stdout)
        }
    })
})


/**
 * main
 */
const host = "0.0.0.0"
const port = 8080

app.listen(port, () => {
    console.log(`Server started: http://${host}:${port}`)
})