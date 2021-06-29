#!/bin/bash

# another mediocre script by fran hat
# run git add . first
# uploads or deletes only modified files since last push
# ignores .gitignore and all files ignored as well as the temp file used here

# must be using git and must have neocities CLI installed
# place in the base folder! feel free to add it to the git pre-push
# add the line "./upload.sh" to file .git/hooks/ to do that

# huge issue: neocities uploader only uploads to the root folder.
# im not sure if its possible to make this work with just the uploader

filename='temp'
apikey=$(cat $"apikey")

echo $apikey

curl "https://"$apikey"@neocities.org/api/info"

git status --porcelain > temp

while read line || [[ -n $line ]];
do
    action=${line::1}
    file=${line:2}
    if [ $file == '.gitignore' ] || [ $file == 'tempfile' ] || [ $file == 'upload.sh' ] || [ $file == 'apikey' ]
    then
        #this gets messed up with a rename but doesnt break the code
        echo Not uploading $file    
    elif [ $action == 'M' ] || [ $action == 'A' ]
    then 
        echo Uploading $file 
    elif [ $action == 'D' ]
    then
        echo Deleting $file 
    elif [ $action == 'R' ]
    then
        echo Renaming $file 
    fi
done < temp