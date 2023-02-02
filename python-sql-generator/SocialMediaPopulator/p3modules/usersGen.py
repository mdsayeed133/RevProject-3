import random, names

def generateUsersTable(userCount):
    emailEnders = ["@gmail.com","@outlook.com","@hotmail.com","@yahoo.com","@protonmail.com","@msn.com"]
    statement = "insert into users(date, email, first_name, last_name, password) values"
    firstLine = True
    generatedUsers = []
    for value in range(userCount):
        currentUser = []
        firstName = names.get_first_name()
        lastName = names.get_last_name()
        email = random.choice([firstName,lastName])+str(random.randint(0,9999))+random.choice(emailEnders)
        password = str(random.choice(random.choice(emailEnders)))+str(random.randrange(0,100))+str(random.choice(random.choice(emailEnders)))+random.choice(['!',"_","@","#","$","^","&","*","(",")","-","=","+"])
        currentUser.append(email)
        currentUser.append(firstName)
        currentUser.append(lastName)
        currentUser.append(password)
        generatedUsers.append(currentUser)
        if(not firstLine):
            statement += ","
        statement += "(current_timestamp,'"+email+"','"+firstName+"','"+lastName+"','"+password+"')"
        firstLine = False
    statement+=";"
    return statement, generatedUsers
    