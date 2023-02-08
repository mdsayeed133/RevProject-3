# RevProject-3 - As Presented by TEAM A - REVRATER
This Git Repository features 3 main folders:
- Python-SQL-Generator
- Social-Media-React-Dev
- Social-Media-Spring-Main

To Utilize this Project, the following technologies will need to be installed locally:
- Python 3
- Java JDK 11
- IntelliJ
- DBeaver or your choice of RDS connection utility
- Git (Optional, but may make it easier to obtain this repo and stay up to date)
Prior to starting the steps below, be sure to install the above technologies locally.

STEP 0: Clone the Repo with it's contents from: https://github.com/mdsayeed133/RevProject-3.git

STEP 1: Configure an AWS RDS Instance or Alternative DB Hoster:
- Be sure to utilize PostgreSQL as the RDS vendor
- Save the address of the RDS connection including the:
-- Connection Details
-- Admin Username
-- Admin Password

STEP 2: Pre-Launch Configuration:
- Open the Spring Project in IntelliJ, select Java JDK 11 as the project compiler.
- Update 'application.properties' file in 'resources':
-- spring.datasource.url: Update this to the URL of your RDS instance, don't forget the port number.
-- spring.datasource.username: Update this to match the RDS instance's admin username.
-- spring.datasource.password: Update this to match the RDS instance's admin password.
-- spring.jpa.hibernate.ddl-auto: Set this to 'create' instead of 'update'. Once you have ran the project once successfully, swap this back to 'update'
--- The above will tell the server to instantiate the tables of the database when run in create mode, you will lose entries in the table whenever you run in create mode on subsequent runs, so be sure to swap this back to 'update'.
- (OPTIONAL) Configure 'profanityList.txt' in 'resources': You can add or remove a profanity filter for the service, updating the words in the list updates the filter.
-- Changes to the profanityList are reflected after you've saved the file and re-run the server.
- Run a Maven Refresh, then run Maven to install dependencies.
- Build and run the server once locally. Once it's run once successfully, change the configuration file back to 'update'! Stop the server and move to Step 3.

STEP 3: Instantiate RDS Entries
Python is utilized to generate the SQL data that will be utilized in instantiating your database instance.
To configure the generation for a clean RDS installation, edit the following files:
- tags.txt : Responsible for generating the tags utilized and available to users in your instance of RevRater
- departments.txt : Responsible for generating the departments utilized and available to your users when creating employees to rate

If you'd like to test your configuration with mock data and users, you may edit the following text files:
- RatingXStar.txt: These are preconfigured statements utilizing placeholders. The placeholders are in the following order:
- -Mock Employee Name
- -Mock Tag1
- -Mock Tag2
- -Mock Tag3
- comments.txt: These are preconfigured random comments and replies, one per line.
- testDataConfiguration.json: Edit this config file to choose the number of employees to generate for the test, as well as number of users.

When you are ready to generate the data run either of the modules below to generate your data:
- Run 'dataBaseInstantiator.py': This will generate a SQL file called 'instantiator.sql'. This contains only definitions for tags and departments.
- Run 'testDataBaseInstantiator.py': This will generate a SQL file called 'generatedSQL.sql'. This contains mock data for all tables for testing.

Once you have generated your data, utilize DBeaver or your personal flavor of RDS Manager to connect to your RDS Instance.
Run EITHER 'instantiator.sql' or 'generatedSQL.sql' to finish instantiating your database, depending on your use case. DO NOT RUN BOTH.
If you wish to go from testing to live or vice versa, you will need to re-run the server in create mode according to Step 2.

STEP 4: Host the Server Service (AWS Elastic Beanstalk focus)
- Inside of IntelliJ, utilize Maven to run the 'Package' function of the lifecycle. This will create a .war file inside of the orange Target folder. 
-- If you are planning to use an alternative hosting service to AWS Elastic Beanstalk, you may want to update the packaging tag inside of pom.xml to output a jar instead.
- Configure an Elastic Beanstalk instance in AWS, utilizing Web Application as the service style, and Java as the primary technology.
- Once Elastic Beanstalk finishes instantiating, upload the .war file containing your server file.

STEP 5: Initialize the REACTJS application
Open a commandline terminal, and navigate to the directory where you have the cloned repo with the folder called: Social-Media-React-Dev
- Inside of the Social-Media-React folder, run the following commands in a terminal:
-- npm install react-icons --save
-- npm install react-redux
-- npm install axios
Configure the config.json to direct the base URL for the app to the server you've created and hosted in step 4.
- NOTE: This feature is incomplete, and is currently here to show what needs to be utilized in the next Sprint. 
Go ahead and, test the website. You should be able to view a local copy of the web service, if you've set up correctly. Data may not be visible if axios connections are broken.
Finally in the terminal run: npm run build. Take note of the build folder location.

STEP 5: Host the REACTJS Client Service (AWS S3 focus)
- Create a new S3 Bucket in AWS to host the REACTJS component. Make sure access to the bucket's contents is made public.
- Go to the permissions tab for the new bucket and hit the 'edit bucket policy' button.
- Adjust permissions to allow users to get data from your bucket.
- Next, go to the Properties tab, enable static website hosting:
-- Map the index.html to homepage and error page.
- Find and save the website endpoint.
- Next upload the build folder files from the end of step 5. You should be able to navigate to your app if all went well via the website endpoint.
A full guide to this step: https://www.cloudthat.com/resources/blog/step-by-step-guide-to-deploy-reactjs-app-on-aws-s3
