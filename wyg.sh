# wyg, wenyan-get, 文渊阁, 文淵閣

# use wyg - package manager of wenyan-lang to enhance your program!

cd node_modules/.bin

system=`uname`

if [ "$system" == "Windows_NT" ]; then
  # Windows
  wyg $1 $2
else
  # macOS/Linux
  ./wyg $1 $2
fi

# move file to src, then your .wy code can get access of wyg
if [ "$1" == "i" ]; then
  mv ./藏書樓/* ../../src
  rm -r ./藏書樓
fi
