import random, names

def generateEmployeesTable(employeeCount, usersCount, departmentsCount):
    statement = "insert into employees(date, first_name, last_name, author_user_id, department_id) values"
    firstLine = True
    generatedEmployees = []
    for value in range(employeeCount):
        currentEmployee = []
        firstName = names.get_first_name()
        lastName = names.get_last_name()
        authorFK = random.randint(1,usersCount)
        depFK = random.randint(1,departmentsCount)
        currentEmployee.append(firstName)
        currentEmployee.append(lastName)
        currentEmployee.append(authorFK)
        currentEmployee.append(depFK)
        generatedEmployees.append(currentEmployee)
        if(not firstLine):
            statement += ","
        statement += "(current_timestamp,'"+firstName+"','"+lastName+"',"+str(authorFK)+","+str(depFK)+")"
        firstLine = False
    statement+=";"
    return statement, generatedEmployees
    