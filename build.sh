set -e 

rm -rf build
npm run build
mv build build-prd
npm run build-preview
mv build build-prd/preview
mv build-prd build