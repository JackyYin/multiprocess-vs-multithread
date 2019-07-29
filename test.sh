RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'
rate=('single.js' 'cp.js' 'wt.js')
d=10s

for i in "${rate[@]}"
do
    echo "${BLUE}mission starto! task: ${i}"
    node $i
    echo "${RED}Hi, I'm sleeping for 10 secs..."
    sleep 10
done
