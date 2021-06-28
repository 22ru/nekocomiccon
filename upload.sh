#!/bin/bash

# another mediocre script by fran hat
# uploads or deletes only modified files
# ignores .gitignore and all files ignored as well as the temp file used here

# must be using git and must have neocities CLI installed
# place in the base folder! feel free to add it to the git pre-push!

filename='temp'

git status --porcelain > temp

while read line || [[ -n $line ]];
do
    action=${line::1}
    file=${line:3}
    if [ $file == '.gitignore' ] || [ $file == 'temp' ] || [ $file == 'upload.sh' ]
    then
        echo Not uploading $file    
    elif [ $action == 'M' ] || [ $action == 'A' ]
    then 
        neocities upload $file
    elif [ $action == 'D' ]
    then
        neocities delete $file
    fi
done < temp