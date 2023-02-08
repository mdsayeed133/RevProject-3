'''Ok this will be interesting'''
import random

ratingComments = []
generalComments = []

def fileToList(fileName):
    '''converts a file to a list'''
    temp = []
    file = open(fileName, "r")
    for line in file:
        temp.append(line.strip())
    file.close()
    return temp

def generateRating(ratingId, employeeId, tagsList):
    tag1 = random.randint(1,len(tagsList))
    tag2 = tag1
    while tag2 == tag1:
        tag2 = random.randint(1,len(tagsList))
    tag3 = tag1
    while tag3 == tag1 or tag3 == tag2:
        tag3 = random.randint(1,len(tagsList))
    return [ratingId, random.randint(1,10), employeeId, tag1,tag2,tag3], ratingId+1

def generatePost(postId, rating, userId, employeeName):
    global ratingComments
    imageId = -1
    text = ""
    postType = 0
    ratingId = rating[0]
    if(rating[1] > 8):
        imageId = random.randint(6,7)
        text = random.choice(ratingComments[4])
    elif (rating[1] >6):
        imageId = random.randint(5,7)
        text = random.choice(ratingComments[3])
    elif (rating[1] >4):
        imageId = random.randint(4,6)
        text = random.choice(ratingComments[2])
    elif (rating[1]>2):
        imageId = random.randint(1,5)
        text = random.choice(ratingComments[1])
    else:
        imageId = random.randint(1,4)
        text = random.choice(ratingComments[0])
    text = text.format(employeeName, rating[3],rating[4],rating[5])
    return [postId,imageId,postType,text,userId,ratingId], postId+1

def generateCommentOrReply(post, userId, postId, postComments, commenttype):
    global generalComments
    imageId = random.randint(1,7)
    text = random.choice(generalComments)
    if commenttype:
        postType = 1
    else:
        postType = 2
    ratingId = None
    postComments.append([post[0],postId])
    return [postId,imageId,postType,text,userId,ratingId], postId+1, postComments

def generateLikes(likes, postId, users):
    tempUsersId = []
    maxPotential = random.randint(0,len(users)-1)
    for i in range(0,maxPotential): #ensures that we get up to between 0-9 likes on a post, without worrying about going over the length of total users.
        tempUsersId.append(random.randint(1,len(users)))
    likeSet = set(tempUsersId) #filters duplicates.
    for userId in likeSet:
        likes.append([postId,userId])
    return likes

def generatePosts(employees, users, tags):
    '''The primary function. Calls helper functions and produces posts, comments, and replies.'''
    global ratingComments, generalComments
    oneStarList = fileToList("rating1star.txt")
    twoStarList = fileToList("rating2star.txt")
    threeStarList = fileToList("rating3star.txt")
    fourStarList = fileToList("rating4star.txt")
    fiveStarList = fileToList("rating5star.txt")
    generalComments = fileToList("comments.txt")
    ratingComments = [oneStarList, twoStarList, threeStarList, fourStarList, fiveStarList]
    postCounter = 1
    ratingsCounter = 1
    postInsertStatement = "insert into posts(created_date,image_id,message,post_type,author_id,rating_id) values"
    postsCommentsStatement = "insert into posts_comments(comments_id,post_id) values"
    ratingsInsertStatement =  "insert into ratings(score,employee_id,tag_1,tag_2,tag_3) values"
    likesInsertStatement  = "insert into likes(post_id, user_id) values"
    posts = []
    ratings = []
    postComments = []
    likes = []
    #start with generating employee posts.
    for employeeId in range(len(employees)): #An individual employee
        for postCount in range(1, random.randint(1,4)): #will get between 1-3 posts.
            currentRating,ratingsCounter = generateRating(ratingsCounter,employeeId+1,tags)
            currentPost,postCounter = generatePost(postCounter,currentRating,random.randint(1,len(users)),employees[employeeId][0])
            likes = generateLikes(likes, postCounter-1, users)
            ratings.append(currentRating)
            posts.append(currentPost)
            for commentCount in range(0, random.randint(0,3)): #with each post having between 0-3 comments.
                currentComment, postCounter, postComments = generateCommentOrReply(currentPost, random.randint(1,len(users)),postCounter, postComments,True)
                likes = generateLikes(likes, postCounter-1, users)
                posts.append(currentComment)
                for replyCount in range(0, random.randint(0,2)): #with each comment having between 0-2 replies.
                    currentReply, postCounter, postComments = generateCommentOrReply(currentComment,random.randint(1,len(users)),postCounter,postComments,False)
                    likes = generateLikes(likes, postCounter-1, users)
                    posts.append(currentReply)
    #End of data generation, begin SQL generation. ratings start first, as posts may be dependent.
    firstLine = True
    for rating in ratings:
        if not firstLine:
            ratingsInsertStatement+=",\n"
        ratingsInsertStatement+="("+str(rating[1])+","+str(rating[2])+","+str(rating[3])+","+str(rating[4])+","+str(rating[5])+")"
        firstLine = False
    ratingsInsertStatement+=";"
    #Next, post generation.
    firstLine = True
    for post in posts:
        if not firstLine:
            postInsertStatement+=",\n"
        temp = post[5]
        if (temp==None):
            temp = 'null'
        postInsertStatement+="(current_timestamp,"+str(post[1])+",'"+str(post[3])+"',"+str(post[2])+","+str(post[4])+","+str(temp)+")"#aware this is out of order. there was a change in the sql.
        firstLine = False
    postInsertStatement+=";"
    #insert connective links into the joins table for comments.
    firstLine = True
    for postComment in postComments:
        if not firstLine:
            postsCommentsStatement+=",\n"
        postsCommentsStatement+="("+str(postComment[0])+","+str(postComment[1])+")"
        firstLine = False
    postsCommentsStatement+=";"
    #insert the likes!
    firstLine = True
    for like in likes:
        if not firstLine:
            likesInsertStatement+=",\n"
        likesInsertStatement+="("+str(like[0])+","+str(like[1])+")"
        firstLine = False
    likesInsertStatement+=";"
    return ratingsInsertStatement, postInsertStatement, postsCommentsStatement,likesInsertStatement




