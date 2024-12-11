if [ ! -d "dist" ]; then
  mkdir dist
fi

FILES=(copy.svg skull.svg index.html style.css script.js copy-to-dist.sh unlocked.html)

for FILE in ${FILES[@]}; do
  cp $FILE dist
done
