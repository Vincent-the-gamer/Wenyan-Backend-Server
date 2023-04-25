/**
 * Author: Vincent-the-gamer
 * GitHub: https://github.com/Vincent-the-gamer
 * Bilibili: https://space.bilibili.com/3342738
 */
const os = require("os")

exports.getCurrentPlatform = () => {
    switch(os.platform()){
        case "win32":
        case "win64":
            return "Windows"
        case "darwin":
            return "macOS"
        case "linux":
            return "linux"
        default:
            break;
    }
}
