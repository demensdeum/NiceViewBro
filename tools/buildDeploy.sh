rm -rvf ./dist
rm -rvf /Applications/MAMP/htdocs/*
npm run build
cp -R dist/* /Applications/MAMP/htdocs/.
#mv /Applications/MAMP/htdocs/dist /Applications/MAMP/htdocs/NiceViewBro
#cd /Applications/MAMP/htdocs/
#find NiceViewBro -type f -exec perl -pi -e 's{assets}{./demos/NiceViewBro/assets}g' {} +