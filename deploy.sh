git rm -r --cached . 
git add . &&
git commit -m "update" &&
git branch -M main &&
git push -f -u origin main &&
cd -
echo https://ericasun.github.io/goal-canvas-jay/src/index.html

