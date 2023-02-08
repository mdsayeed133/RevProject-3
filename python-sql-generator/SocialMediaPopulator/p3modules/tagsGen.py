def generateTagsTable():
    tagsFile = open("tags.txt","r")
    statement = "insert into tags(tag_name) values"
    firstLine = True
    generatedTags = []
    for line in tagsFile:
        generatedTags.append(line.strip())
        if(not firstLine):
            statement += ",('"+line.strip()+"')"
        else:
            statement += "('"+line.strip()+"')"
            firstLine = False
    tagsFile.close()
    statement+=";"
    return statement, generatedTags
