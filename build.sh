#!/bin/sh
TMPL_FOLDER="tmpl/"
JS_FOLDER="js/"
TMPL="templates"
OUTPUT="output.js"
CSS_FOLDER="css/"
CSS_FILE="dan.less"
rm $JS_FOLDER$OUTPUT
tplcpl -t $TMPL_FOLDER -o $JS_FOLDER${TMPL}.js
SCRIPTS="raphael-min twitter-text moment ${TMPL} app"
for script in $SCRIPTS; do
  uglifyjs $JS_FOLDER$script.js >> $JS_FOLDER$OUTPUT
done
lessc $CSS_FOLDER$CSS_FILE $CSS_FOLDER$CSS_FILE.min.css -compress
