def generateDepartmentsTable():
    departmentsFile = open("departments.txt","r")
    statement = "insert into departments(title) values"
    counter = 0
    for line in departmentsFile:
        if(counter != 0):
            statement += ","
        statement += "('"+line.strip()+"')"
        counter += 1
    departmentsFile.close()
    statement+=";"
    return statement,counter