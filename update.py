"""
are you tired of the neocities CLI reuploading every single goat dam file
i am. very much.

this script will (hopefully) upload your files according to their changes in your git
run this in the root folder of your neocities site
you should probably run the neocities uploader before the first use since this only uploads changed files

requires python-neocities which can be found at 
https://github.com/neocities/python-neocities
"""


import neocities
import os

f = open("apikey", "r")
apikey = f.read()
f.close()
# uncomment this if there's a newline at the end of your file
# or you could delete the newline. your choice!
#apikey = apikey[:-1]

# log in
print("APIKEY=" + apikey)
nc = neocities.NeoCities(api_key=apikey)


nc.delete('poke.html', 'hat.html')

"""
#update the status list
os.system("git add .")
os.system("git status --porcelain > tempfile")

f = open("tempfile", "r")
line = f.readline()

while line:
    action = line[0]
    target = line[3:-1]

    #print(action + target)

    if action == "M" or action == "A":
        print("Uploading " + target)
        nc.upload((target, target))
    elif action == "D":
        print("Deleting " + target)
        nc.delete([target])
    elif action == "R":
        #split the target
        i = target.find("-")
        target2 = target[i+3:]
        target = target[:i-1]
        print("Renaming '" + target + "' to '" + target2 + "'")
        #delete and reupload i guess!
        print("Deleting " + target)
        nc.delete([target])
        print("Uploading " + target)
        nc.upload((target2, target2))

    line = f.readline()

f.close()
"""