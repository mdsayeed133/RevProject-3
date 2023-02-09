import React, { useState } from 'react'
import Comments from '../Comments/Comments';
import { Post as RatingPost } from '../../interfaces/RatingPost';
import { Rating } from '../../interfaces/RatingPost';
import one from './one.png'
import two from './two.png';
import three from './three.png';
import four from './four.png';
import five from './five.png';
import six from './six.png';
import seven from './seven.png';
import Like from '../Comments/Like';
import axios from 'axios';
import Post from './Post';
import '../post-feed/CreatePostForm.css'

const Comment: React.FC<any> = (props: {post:RatingPost, userId:number}) => {

    const defaultRating:Rating = {id: 0, employee: {id: 0, firstName: "", lastName: "", author: {id: 0, email: "", password: "", firstName: "", lastName: "",date: ""}, department: {id: 0,title: ""},createdDate: ""},score: 0,tag1: { id: 0,tagName: ""},tag2: { id: 0, tagName: ""},tag3: { id: 0, tagName: ""}}
    const [ratingPost, setPostContents] = useState<RatingPost>(props.post);
    const [childrenPosts, setChildrenContents] = useState<RatingPost[]>([{
        id: 0,
        message: "",
        imageId: 0,
        author: {
            id: 0,
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            date: ""
        },
        postType: "",
        rating: defaultRating,
        createdDate: ""
    }]);

    const [message, setMessage] = useState<String>("");

    const updateMessage = (event:React.ChangeEvent<HTMLInputElement>) =>
    {
        setMessage(event.target.value);
        console.log(message);
    }

    const showComment = async () => {
        const comms = document.getElementById("commentBox")

    }
    const [userComments, setUserComments] = React.useState(false);
    React.useEffect(() => {
        if (userComments) {
            var comms = document.getElementById("commentBox")
            comms?.classList.add("d-none")
        } else {
            var comms = document.getElementById("commentBox")
            comms?.classList.remove("d-none")
        }
    }, [userComments])
/*
    function thereCanOnlyBeOne()
    {
        let allImageElements = document.getElementsByClassName("onlyOne");
        for (let i = 0; i<allImageElements.length; i++)
        {
            if(!allImageElements[i].classList.contains("ignore"))
            {   
                if(allImageElements[i].id != ""+ratingPost.imageId)
                {
                    allImageElements[i].classList.add("d-none");
                }
                allImageElements[i].classList.add("ignore");
            }
        }
    }

    React.useEffect(()=>{thereCanOnlyBeOne()},[])
*/
    const showCommentsAndReplies = async () =>
    {   

        /**
         * const element: HTMLElement = document.getElementById('stat') as HTMLElement
            element.innerHTML = `Welcome to Revature Banking, ${props.targetUser.firstName}`
         */
        let targetDiv: HTMLElement = document.getElementById(''+ratingPost.id) as HTMLElement
        // let targetDiv = document.getElementById(""+ratingPost.id);
        targetDiv.classList.remove("d-none");
        // targetDiv.innerHTML = `someting`
        // targetDiv.innerHTML += `<h3>wow much content.</h3>`
        console.log("This is the post type:"+props.post.postType);
        if(props.post.postType=="Rating")
        {
            try{
                const response = await axios.get(`http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/posts/${props.post.id}/post/comments`);
                if(response.status===200)
                {
                    for(let i=0;i<response.data.length;i++)
                    {
                        response.data[i].rating = defaultRating
                    }
                    setChildrenContents(response.data);
                    console.log(childrenPosts);
                    for(let i = 0; i<response.data.length;i++)
                    {
                        targetDiv.innerHTML += "<hr/><h5>"+response.data[i].author.email+" replied with...</h5>"+"<p>"+response.data[i].message+"</p><hr/>"
                    }

                }
            }
            catch(error)
            {
                console.error(error)
            }
        }
        if(props.post.postType=="Comment")
        {
            try{
                const response = await axios.get(`http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/posts/${props.post.id}/comment/replies`);
                if(response.status===200)
                {
                    for(let i=0;i<response.data.length;i++)
                    {
                        response.data[i].rating = defaultRating
                    }
                    for(let i = 0; i<response.data.length;i++)
                    {
                        targetDiv.innerHTML += "<hr/><h5>"+response.data[i].author.email+" replied with...</h5>"+"<p>"+response.data[i].message+"</p><hr/>"
                    }
                }
            }
            catch(error)
            {
                console.error(error)
            }
        }
    }
    const submitResponse = async(target:number, elementId:string) =>
    {
        try{
            const response = await axios.post(`http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/posts/comment`,{userId:props.userId,text:message,imageId:5,postId:props.post.id})
            if(response.status==201)
            {
                alert("Your post has been submitted, refresh the page and view the comments to see your new post!");
            }
            if(response.status==406)
            {
                alert("Your post could not be accepted, it violates our profanity policy.");
            }
        }
        catch(error)
        {
            console.log("Issue with submitting request!");
            console.error(error);
        }
    }
/*
    React.useEffect(()=>{
        showCommentsAndReplies();
    },[])
*/
    return (
        <>
            <div className="post-card">
                {/* example card */}
                <div className="post-message-body">
                    <div className="post-message d-flex justify-content-between">
                        <p>Posted by: <em>{ratingPost.author.email}</em></p>
                    </div>
                    {/* working code */}
                    <p className="message">{ratingPost.message}</p>
                    <Like postId={ratingPost.id} userId={props.userId}/>
                    <br/>
                    <input id={"currentInputBox"+ratingPost.id} type="text" placeholder="Enter your reply here." className="comment-box" onChange={updateMessage}></input>
                    <button className="CreateReplyButton" id={"reply"+ratingPost.id} onClick={()=>{
                        submitResponse(props.post.id, "currentInputBox"+ratingPost.id);
                    }}>Reply to this Post!</button>
                </div>
                <button className="RepliesButton" onClick={showCommentsAndReplies}>Show Replies</button>
                <div className="d-none" id={""+ratingPost.id}>
                </div>
            </div>
        </>
    )
}

export default Comment