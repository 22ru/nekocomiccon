#!/bin/bash

echo "Converting $1!";

cd $1;

magick mogrify -resize 500x500 -format jpg *.JPG;
rm *.JPG;
echo "Memories shrank!";

touch memories;

echo "$1" > memories;

for f in *.jpg ; do 
	echo '<div class="memory">' >> memories;
	echo -e "\t<img src=\"../img/meetup/$1/$f\" />" >> memories; 
	echo '</div>' >> memories;
done;

echo "Memory file created! Thank you for using memory convert!";
