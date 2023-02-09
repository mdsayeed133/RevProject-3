import React, { useEffect, useState } from 'react';
// import { Box, Container, Grid, Button } from '@mui/material';
import Navbar from '../navbar/Navbar';
// import { PostCard } from './PostCard';
// import { apiGetAllPosts } from '../../remote/social-media-api/postFeed.api';
// import { useContext } from 'react';
// import { UserContext } from '../../context/user.context';
// import TextField from '@mui/material/TextField';
// import { apiUpsertPost } from '../../remote/social-media-api/post.api';
import Footer from '../Footer/Footer';
// import { BsFillEmojiAngryFill, BsFillEmojiDizzyFill, BsFillEmojiExpressionlessFill, BsFillEmojiFrownFill, BsFillEmojiNeutralFill, BsFillEmojiSmileFill, BsFillEmojiSunglassesFill } from "react-icons/bs";


import '../post-feed/PostFeed.css'
import { Link, useNavigate } from 'react-router-dom';
import Post from './Post';
import Following from '../Followers/Following';
import NewNavbar from '../navbar/NewNavbar';
import { User } from '../../interfaces/users';
import { Post as P, Rating } from '../../interfaces/RatingPost';
import { Employee } from '../../interfaces/employee';
import axios from 'axios';


export const PostFeed: React.FC<any> = (props: { user: User }) => {
    let link = "";
    const defaultRating: Rating = { id: 0, employee: { id: 0, firstName: "", lastName: "", author: { id: 0, email: "", password: "", firstName: "", lastName: "", date: "" }, department: { id: 0, title: "" }, createdDate: "" }, score: 0, tag1: { id: 0, tagName: "" }, tag2: { id: 0, tagName: "" }, tag3: { id: 0, tagName: "" } }
    const defaultPost: P = {
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
    };
    const defaultEmployee:Employee = {
        id: 0,
        firstName: "string",
        lastName: "string",
        author: {
            id: 0,
            email: "string",
            password: "string",
            firstName: "string",
            lastName: "string",
            date: "string"
        },
        department: {
            id: 0,
            title: "string"
        },
        createdDate: "string"
    };
    const user = props.user;
    const [posts, setUserFeed] = useState<P[]>([defaultPost]);
    const [following, setFollowing] = useState<Employee[]>([defaultEmployee]);
    // navigate to post component
    const navigate = useNavigate();

    const addEmployee = async () => {
        navigate("/createemployee")
    }
    const createPost = async () => {
        navigate("/createpostform")
    }

    const retrieveFeed = async () => {
        try {
            const response = await axios.get(`http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/posts/${user.id}/user/feed`);
            if (response.status === 200) {
                setUserFeed(response.data);
            }
        }
        catch (error) {
            console.error(error)
        }
    }
    // http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/users/followed/

    const retrieveFollows = async () => {
        try {
            const response = await axios.get(`http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/users/followed/${user.id}/id`);
            if (response.status === 200) {
                setFollowing(response.data);
            }
        }
        catch (error) {

        }
    }

    useEffect(() => {
        retrieveFeed();
        retrieveFollows();
    }, [])

    // I want to have the emoticons display

    return (
        // component to edit for changes in the PostFeed
        <>
            <Navbar />
            {/* <NewNavbar/> */}
            {/* kw: create sticky sidebar containing "following/add trainer"? */}
            <div className="post-feed-container container">
                <div className="row d-flex justify-content-around">
                    {/* <div className="col-md-3">
                        <section className="sidebar-section">
                            <div className="widget make-sticky">
                                <div className="add-button d-block">
                                    <button onClick={addEmployee}>Add Employee</button>
                                    <button onClick={createPost}>Create Post</button>
                                </div>
                            </div>
                        </section>
                    </div> */}
                    <div className="col-md-9">
                        <div className="post-feed-content">
                            <h3>Posts From Other Users</h3>
                            {
                                posts.map((post,index)=>(
                                    <Post key={index} post={post} userId ={user.id}/>
                                ))
                            }
                            {/* <Post /> */}
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="post-feed-following">
                            {/* <Following/> */}
                            <ul> Your Follows:
                                {
                                    following.map((followed, index) => (
                                        
                                        <li key={index}><Link to={`/employeeprofile/${followed.id}`} className="followed-employee">{followed.firstName} {followed.lastName}</Link></li>)
                                    )
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
};