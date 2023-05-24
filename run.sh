# Author: Vincent-the-gamer
# GitHub: https://github.com/Vincent-the-gamer
# Bilibili: https://space.bilibili.com/3342738

cd node_modules/.bin

system=`uname`

if [ "$system" == "Windows_NT" ]; then
  # Windows
  wenyan ../../src/$1
else
  # macOS/Linux
  ./wenyan ../../src/$1
fi

