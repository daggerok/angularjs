#!/usr/bin/fish

## before script do next:
# cd /tmp
# mkdir clean-dir; cd clean-dir/
# git remote add origin git@github.com:daggerok/angularjs.git
# git checkout -b gh-pages
# echo "# github pages branch" > README.md
# git add README.md
# git commit -am init
# git push origin gh-pages

npm i; npm run gh-pages
sed -i -e "s/\(<base href=\"\/\">\)/<base href=\"\/angularjs\/\"\/>/g" dist/index.html
sed -i -e 's/^dist\/$/#dist\//g' .gitignore
touch dist/.nojekyll
echo "script: echo test" > dist/.travis.yml
cp -Rf dist/index.html dist/404.html
cp -Rf README.md dist/
cp -Rf bin/api dist/
git add .
git commit --amend --no-edit
git push origin (git subtree split --prefix=dist --onto=origin/gh-pages):gh-pages --force
git rm -r dist --cached
sed -i -e 's/^#dist\/$/dist\//g' .gitignore
git add .
git commit --amend --no-edit
git push origin angularjs --force
