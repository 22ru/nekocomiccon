#!/bin/bash

echo "Converting folder $2 in $1!";

cd $1/$2;

#magick mogrify -resize 500x500 *.jpg;
#magick mogrify -resize 500x500 -format jpg *.JPG;
#magick mogrify -resize 500x500 -format jpg *.png;
#magick mogrify -resize 500x500 -format jpg *.PNG;

#rm *.JPG;
#rm *.png;
#rm *.PNG;
#echo "Images shrank!";

#set date to exif date taken
jhead -ft *.jpg;

touch imglist;
echo "$1" > imglist;

#for f in $( ls -1 *.jpg | sort -r) ; do #reverse
for f in $( ls -tr | grep .jpg ) ; do 
	echo -e "\t<img loading=\"lazy\" src=\"../../img/$1/$2$f\" />" >> imglist;
done;

