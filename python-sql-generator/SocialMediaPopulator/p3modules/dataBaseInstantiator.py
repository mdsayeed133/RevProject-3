import departmentsGen, tagsGen

def main():
    dInsert, dCount = departmentsGen.generateDepartmentsTable()
    tInsert, tags = tagsGen.generateTagsTable()
    sql = open("instantiator.sql", "w")
    sql.write("/*Departments Definition Table*/\n")
    sql.write(dInsert)
    sql.write("\n\n/*Tags Definition Table*/\n")
    sql.write(tInsert)
    print("Completed!")
    sql.close()


if __name__ == "__main__":
    main()