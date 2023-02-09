import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import Post from '../post-feed/Post'
import '../UserProfile/UserProfile.css'
import { Post as p, Rating } from '../../interfaces/RatingPost';
import { useParams } from "react-router-dom";
import { User } from '../../interfaces/users';
import axios from 'axios'


const PublicUserProfile: React.FC<any> = (any) => {
    let {id} = useParams();
    const [user, setUser] = useState<User>({id:0,email:"",password:"",firstName:"",lastName:"",date:""});
    const [postCount, setPostCount] = useState(0);
    const [averageRating, setAverageRating] = useState(-1);
    const defaultRating:Rating = {id: 0, employee: {id: 0, firstName: "", lastName: "", author: {id: 0, email: "", password: "", firstName: "", lastName: "",date: ""}, department: {id: 0,title: ""},createdDate: ""},score: 0,tag1: { id: 0,tagName: ""},tag2: { id: 0, tagName: ""},tag3: { id: 0, tagName: ""}}
    const [posts, setPosts] = useState<p[]>([{
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
    const [comments, setComments] = useState<p[]>([{
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
    const [replies, setReplies] = useState<p[]>([{
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

    function updatePostCount() {
        setPostCount(posts.length + comments.length + replies.length);
    }

    function updateAverageRating() {
        let currentTotal = 0;
        for (let i = 0; i < posts.length; i++) {
            currentTotal += posts[i].rating.score;
        }
        currentTotal = currentTotal/posts.length;
        console.log("Displayed Average: "+currentTotal)
        setAverageRating(currentTotal);
    }

    const getPosts = async () => {
        try {
            console.log("This is the userId:" + user.id);
            const response = await axios.get(`http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/posts/${id}/user/ratings`);
            if (response.status == 200) {
                if(response.data.length>0)
                {
                    setPosts(response.data);
                    updatePostCount();
                    updateAverageRating();
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    const getComments = async () => {
        try {
            let response = await axios.get(`http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/posts/${id}/user/comments`);
            if (response.status == 200) {
                if(response.data.length>0)
                {
                    for(let i=0;i<response.data.length;i++)
                    {
                        response.data[i].rating = defaultRating
                    }
                    setComments(response.data);
                    updatePostCount();
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    const getReplies = async () => {
        try {
            const response = await axios.get(`http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/posts/${id}/user/replies`);
            if (response.status == 200) {
                if(response.data.length>0)
                {
                    for(let i=0;i<response.data.length;i++)
                    {
                        response.data[i].rating = defaultRating
                    }
                    setReplies(response.data);
                    updatePostCount();
                }
            }
        } catch (error) {
            console.error(error);
        }
    }


    const getUserById = async() =>{
        try{
            const response = await axios.get(`http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/users/${id}/id`);
            if(response.status == 200)
            {
                setUser(response.data);
                getPosts();
                getComments();
                getReplies();
            }
        }
        catch(error)
        {
            console.log(error);
        }
    };


    function hideComponents(activeValue:String)
    {
        if(activeValue=="postbox")
        {
            //hide comment and reply
            let commentsToHide = document.getElementsByClassName("commentbox");
            let repliesToHide = document.getElementsByClassName("replybox");
            let postsToShow = document.getElementsByClassName("postbox");
            for (let i = 0; i<postsToShow.length;i++)
            {
                postsToShow[i].classList.remove("d-none");
            }
            for (let i = 0; i<commentsToHide.length;i++)
            {
                commentsToHide[i].classList.add("d-none");
            }
            for (let i = 0; i<repliesToHide.length;i++)
            {
                repliesToHide[i].classList.add("d-none");
            }
        }
        else if(activeValue=="commentbox")
        {
            //hide post and reply
            let postsTohide = document.getElementsByClassName("postbox");
            let repliesToHide = document.getElementsByClassName("replybox");
            let commentsToShow = document.getElementsByClassName("commentbox");
            for (let i = 0; i<commentsToShow.length;i++)
            {
                commentsToShow[i].classList.remove("d-none");
            }
            for (let i = 0; i<postsTohide.length;i++)
            {
                postsTohide[i].classList.add("d-none");
            }
            for (let i = 0; i<repliesToHide.length;i++)
            {
                repliesToHide[i].classList.add("d-none");
            }
        }
        else
        {
            //hide post and comment
            let postsTohide = document.getElementsByClassName("postbox");
            let commentsToHide = document.getElementsByClassName("commentbox");
            let repliesToShow = document.getElementsByClassName("replybox");
            for(let i = 0; i < repliesToShow.length; i++)
            {
                repliesToShow[i].classList.remove("d-none");
            }
            for (let i = 0; i<postsTohide.length;i++)
            {
                postsTohide[i].classList.add("d-none");
            }
            for (let i = 0; i<commentsToHide.length;i++)
            {
                commentsToHide[i].classList.add("d-none");
            }
        }
    }




    React.useEffect(() => {
        getUserById();
    }, []) //useEffect is how we can call a function as soon as a page loads.

    // const [tempFirst, setFirstName] = useState(props.targetUser.firstName);
    // const [tempLast, setLastName] = useState(props.targetUser.lastName);
    // const [tempEmail, setEmail] = useState(props.targetEmail.email);
    // const [tempPassword, setPassword] = useState(props.targetPassword.password);


    return (
        <>
            {hideComponents("postbox")}
            <Navbar />
            {/* include batch, username, follow */}
            <div className="user-profile-container container">
                <div className="profile-grid">
                    <div className="post-info-container">
                        <div className="join-date">
                            <h2 id='fields'>Join Date:
                                <p id="post-info-details"><em>{user.date}</em></p>
                            </h2>
                        </div>
                        <div className="post-info-details" >
                            {/*<h2 id='fields' >Number of Posts:
                                <p id="post-info-details"><em>{postCount}</em></p>
                            </h2>
                            <h2 id='fields'>Average Rating Given:
                                <p id="post-info-details">{averageRating}</p> / 10
                            </h2>*/}
                        </div>
                    </div>
                    <div className="profile-info-container">
                        <div className="personal-info-container">
                            <h2 className="user-info" id='fields'>First Name:
                                <p id='inputs'><em>{user.firstName}</em></p>
                            </h2>
                            <h2 className="user-info" id='fields'>Last Name:
                                <p id='inputs'><em>{user.lastName}</em></p>
                            </h2>
                            <h2 className="email" id='fields'>Email:
                                <p id='inputs'><em>{user.email}</em></p>
                            </h2>
                        </div>
                    </div>

                    <div className="image-profile-container">
                        <div className="square" id='square'>
                            <p id='user-letter'>{user.email[0]}</p>
                        </div>
                        <br></br>
                    </div>
                </div>
                <div className="post-container-navigator">
                    <button className="pu-btn" id='nav-button' onClick={()=>hideComponents("postbox")}>Get Posts</button>
                    <button className="pu-btn" id='nav-button' onClick = {()=>hideComponents("commentbox")}>Get Comments</button>
                    <button className="pu-btn" id='nav-button' onClick = {() => hideComponents("replybox")}>Get Replies</button>
                </div>
                <div className="posts-container">
                    {posts.map((post, index) => (
                        <div className = "postbox">
                            <Post key={index} post={post} userId = {user.id}/>
                        </div>
                    ))}
                    {comments.map((comment, index) => (
                        <div className = "commentbox">
                            <Post key={index} post={comment} userId = {user.id}/>
                        </div>
                    ))}
                    {replies.map((reply, index) => (
                        <div className = "replybox">
                            <Post key={index} post={reply} userId = {user.id}/>
                        </div>
                    ))}
                    
                </div>
                
                {/* Ratings by User */}
            </div>
        </>

    )
}

export default PublicUserProfile