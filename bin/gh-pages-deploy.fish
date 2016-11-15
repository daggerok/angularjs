#!/usr/bin/fish

npm i; npm run deploy
sed -i -e "s/^\(  <!--gh-->\)\$/  <base href=\"\/angularjs\/\"\/>/g" dist/index.html
sed -i -e 's/^dist\/$/#dist\//g' .gitignore
echo "script: echo test" > dist/.travis.yml
cp -Rf dist/index.html dist/404.html
cp -Rf README.md dist/
git add .
git commit --amend --no-edit
git push origin (git subtree split --prefix=dist --onto=origin/master):master --force
git rm -r dist --cached
sed -i -e 's/^#dist\/$/dist\//g' .gitignore
git add .
git commit --amend --no-edit
git push origin angularjs-ts-material --force
