# Wenyan-lang Backend Server[deprecated]
A server to compile wenyan-lang.


# Deprecated

Please use:  [https://github.com/Vincent-the-gamer/wenyan-api](https://github.com/Vincent-the-gamer/wenyan-api)



**Based on Node.js Express**

中文文档: [README_zh-hans.md](./README_zh-hans.md)

## What is Wenyan-lang？
Go to the repo: [Wenyan-lang 文言文編程语言](https://github.com/wenyan-lang/wenyan)

## Usage

### Clone This Repository
~~~shell
git clone https://github.com/Vincent-the-gamer/Wenyan-Backend-Server.git
~~~

### Install Dependency
~~~shell
# use npm if you have not installed yarn.
yarn install
~~~

### Run Code
~~~shell
# use npm if you have not installed yarn.
yarn start
~~~

Server will run at `http://localhost:8080` by default.

You can change your host and port in `main.js`

~~~js
const host = "0.0.0.0"
const port = 8080
~~~

### Call API
* URL: `http://localhost:8080/runCode`
* Method: `post`
* Request Body: 
    ~~~json
    {
        "code": "吾有一數。曰三。名之曰「甲」。為是「甲」遍。吾有一言。曰「「問天地好在。」」。書之。云云。"
    }
    ~~~
    Then you will get your response:
~~~
問天地好在。
問天地好在。
問天地好在。
~~~
This response is a plain text, so if you are using `axios` to call this API, `res.data` is the target result:
~~~js
axios.post("http://localhost:8080/runCode",{
    code: "吾有一數。曰三。名之曰「甲」。為是「甲」遍。吾有一言。曰「「問天地好在。」」。書之。云云。"
}).then(
    res => {
        console.log(res.data)
    }
)
~~~

#### Wyg(文渊阁, 文淵閣, Wenyan-get) is supported now!

Now you can use `wyg packages` in your code.

**Example:**

* Install
~~~shell
# install package ziyue(子曰)
# Windows
sh wyg.sh i ziyue

# macOS/Linux
./wyg.sh i ziyue
~~~

* Usage
~~~wy
吾嘗觀「「子曰」」之書。方悟「子曰」之義。 

子曰「「xxx明天要变娃写代码！」」。 
~~~

It is transformed by the limit of chatbox....
![ziyue](./.github/ziyue.png)

Original message:

~~~
                 __._                                    
                / ___)_                                  
               (_/Y ===\                            __  
               |||.==. =).                            |  
               |((| o |p|      |  xx明天要变娃写代码！
            _./| \(  /=\ )     |__                     
          /  |@\ ||||||||.                              
         /    \@\ ||||||||\                           
        /   \  \@\ ||||||//\                         
       (     Y  \@\|||| // _\                         
       |    -\   \@\ \\//    \                     
       |     -\__.-./ //\.---.^__                      
       | \    /  |@|__/\_|@|  |  |                     
       \__\      |@||| |||@|     |                     
       <@@@|     |@||| |||@|    /                        
      / ---|     /@||| |||@|   /                         
     |    /|    /@/ || |||@|  /|                         
     |   //|   /@/  ||_|||@| / |                         
     |  // \ ||@|   /|=|||@| | |                        
     \ //   \||@|  / |/|||@| \ |                      
     |//     ||@| /  ,/|||@|   |                         
     //      ||@|/  /|/||/@/   |                         
    //|   ,  ||//  /\|/\/@/  / /                       
   //\   /   \|/  /H\|/H\/  /_/                      
  // |\_/     |__/|H\|/H|\_/                          
 |/  |\        /  |H===H| |                             
     ||\      /|  |H|||H| |                             
     ||______/ |  |H|||H| |                              
      \_/ _/  _/  |L|||J| \_                           
      _/  ___/   ___\__/___ '-._                        
     /__________/===\__/===\---'                       
                                                    
~~~

More about wyg：[https://github.com/wenyan-lang/wyg](https://github.com/wenyan-lang/wyg)


## Deploy
This repo is "Deploy Ready", which means the only 2 things you need to do are:

1. Copy the repo to your server, or directly `git clone` this repo on your server

2. In the repo directory, run the following commands(Node.js is required on your server).
    ~~~shell
    # You can use yarn by replacing "npm" with "yarn" if your server has yarn installed
    npm install
    npm start
    ~~~