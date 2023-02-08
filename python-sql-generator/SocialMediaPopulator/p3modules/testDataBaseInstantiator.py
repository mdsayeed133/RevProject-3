import departmentsGen, employeesGen, followsGen, tagsGen, usersGen, postsGen
import json

def main():
    configFile = open("testDataConfiguration.json")
    config = json.load(configFile)
    configFile.close()
    dInsert, dCount = departmentsGen.generateDepartmentsTable()
    uInsert, users = usersGen.generateUsersTable(config['userCount'])
    eInsert, employees = employeesGen.generateEmployeesTable(config['employeeCount'],config['userCount'],dCount)
    tInsert, tags = tagsGen.generateTagsTable()
    fInsert = followsGen.generateFollowersTable(config['employeeCount'],config['userCount'])
    rInsert, pInsert, pJoinInsert, lInsert = postsGen.generatePosts(employees,users,tags)
    #Wish I could single responsibility principle the postsGen... Future improvements?
    #Assuming the above is successful, we now have dml to save.
    sql = open("generatedSQL.sql", "w")
    #ordered by need of insertion...
    sql.write("/*Departments Definition Table*/\n")
    sql.write(dInsert)
    sql.write("\n\n/*Tags Definition Table*/\n")
    sql.write(tInsert)
    sql.write("\n\n/*Insert for Test Users*/\n")
    sql.write(uInsert)
    sql.write("\n\n/*Insert for Test Employees*/\n")
    sql.write(eInsert)
    sql.write("\n\n/*Insert for Test Follows*/\n")
    sql.write(fInsert)
    sql.write("\n\n/*Insert for Test Ratings*/\n")
    sql.write(rInsert)
    sql.write("\n\n/*Insert for Test Posts, Comments, and Replies*/\n")
    sql.write(pInsert)
    sql.write("\n\n/*Inserts for the post join table, the glue that binds!*/\n")
    sql.write(pJoinInsert)
    sql.write("\n\n/*Finally, we will insert Likes!*/\n")
    sql.write(lInsert)
    print("Completed!")
    sql.close()


if __name__ == "__main__":
    main()