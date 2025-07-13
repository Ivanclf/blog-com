git checkout main

if [ ! -d "node_modules" ]; then
    npm install
fi

npm run build
git add .
git commit -m "update source $(date +'%Y-%m-%d %H:%M:%S')"
git push origin main

git checkout gh-pages
git checkout main -- dist
mv dist/* .
rm -rf dist

git add .
git commit -m "update site $(date +'%Y-%m-%d %H:%M:%S')"
git push origin gh-pages

git checkout main
