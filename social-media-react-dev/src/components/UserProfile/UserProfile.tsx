import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import Post from '../post-feed/Post'
import '../UserProfile/UserProfile.css'
import { Post as p, Rating } from '../../interfaces/RatingPost'
import axios from 'axios'
import { User } from '../../interfaces/users'
import { useNavigate } from 'react-router-dom'


const UserProfile: React.FC<any> = (props: any) => {

    const navigate = useNavigate();
    const [user, setUser] = useState<User>(props.currentUser);
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

    function navigateToPublic()
    {
        navigate(`/user/${user.id}`);
    }

    function navigateToReset(){
        navigate("/ResetPassword");
    }

    const getPosts = async () => {
        try {
            console.log("This is the userId:" + user.id);
            const response = await axios.get(`http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/posts/${user.id}/user/ratings`);
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
            const response = await axios.get(`http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/posts/${user.id}/user/comments`);
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
            const response = await axios.get(`http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/posts/${user.id}/user/replies`);
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
        getPosts();
        getComments();
        getReplies();
    }, [])
    // const [tempFirst, setFirstName] = useState(props.targetUser.firstName);
    // const [tempLast, setLastName] = useState(props.targetUser.lastName);
    // const [tempEmail, setEmail] = useState(props.targetEmail.email);
    // const [tempPassword, setPassword] = useState(props.targetPassword.password);

    return (
        <>
            {hideComponents("postbox")}
            {console.log("These are your props:"+props)}
            {console.log("This is your user:"+user)}
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
                            <h2 className="user-info">Password:
                                <p id='inpus'><em>{user.password}</em></p>
                            </h2>
                        </div>

                        <div className="btn-box d-flex justify-content-around" id='password-btn'>
                            <button className="reset-password-btn" onClick={navigateToReset}>Reset Password</button>
                        </div>
                    </div>

                    <div className="image-profile-container">
                        <div className="square" id='square'>
                            <p id='user-letter'>{user.email[0]}</p>
                        </div>
                        <br></br>
                        <div className='buttons-container'>
                            <button className="view-profile-btn" id='view-profile' onClick={navigateToPublic}>View Public Profile</button>
                            <br></br>
                        </div>
                    </div>
                </div>
                <div className="post-container-navigator">
                    <button className="getPost" id='nav-button' onClick={()=>hideComponents("postbox")}>Get Posts</button>
                    <button className="getComment" id='nav-button' onClick = {()=>hideComponents("commentbox")}>Get Comments</button>
                    <button className="getReply" id='nav-button' onClick = {() => hideComponents("replybox")}>Get Replies</button>
                </div>
                <div className="posts-container">
                    {posts.map((post, index) => (
                        <div className = "postbox">
                            <Post key={index} post={post}/>
                        </div>
                    ))}
                    {comments.map((comment, index) => (
                        <div className = "commentbox">
                            <Post key={index} post={comment}/>
                        </div>
                    ))}
                    {replies.map((reply, index) => (
                        <div className = "replybox">
                            <Post key={index} post={reply}/>
                        </div>
                    ))}
                    
                </div>
                {/*<Post />*/}
                {/* Ratings by User */}
            </div>
        </>

    )
}

export default UserProfile