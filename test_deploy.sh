rm -rf dev || true
mkdir dev && cd dev
git clone https://github.com/codemzy/static-blog
rm -rf static-blog/posts/*
rm -rf static-blog/settings/*
cp ../posts/* static-blog/posts
cp ../settings/* static-blog/settings
cd static-blog
npm install
npm run dev-build
cd ..
mkdir static-blog/dist/img
cp -r ../img/* static-blog/dist/img || true
cd static-blog
npm run dev

echo "Done"