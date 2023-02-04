import random

def generateFollowersTable(employeeCount, usersCount):
    statement = "insert into user_follow_employee(employee_id,user_id) values"
    firstLine = True
    for userFK in range(usersCount):
        for employeeFK in range(employeeCount):
            if(random.randint(0,2)==0):
                if not firstLine:
                    statement+=","
                firstLine=False
                statement+="("+str(employeeFK+1)+","+str(userFK+1)+")"
    statement+=";"
    return statement
