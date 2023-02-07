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
import { useNavigate } from 'react-router-dom';
import Post from './Post';
import Following from '../Followers/Following';
import NewNavbar from '../navbar/NewNavbar';


export const PostFeed:React.FC<any> = (props:any) => {
    
    // navigate to post component
    const navigate = useNavigate();

    const addEmployee = async () => {
        navigate("/createemployee")
    }
    const createPost = async () => {
        navigate("/createpostform")
    }

    // I want to have the emoticons display

    return (
        // component to edit for changes in the PostFeed
        <>
            <Navbar />
            {/* <NewNavbar/> */}
            {/* kw: create sticky sidebar containing "following/add trainer"? */}
            <div className="post-feed-container container">
                <div className="row">
                    <div className="col-md-3">
                        <section className="sidebar-section">
                            <div className="widget make-sticky">
                                <div className="add-button d-block">
                                    <button onClick={addEmployee}>Add Employee</button>
                                    <button onClick={createPost}>Create Post</button>
                                </div>
                                {/* <Following/> */}
                            </div>
                        </section>
                    </div>
                    <div className="col-md-7">
                        <div className="post-feed-content">
                            <h3>Posts</h3>
                            <Post />
                            {/* <Post />
                            <Post />
                            <Post />
                            <Post /> */}
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="post-feed-following">
                            <Following/>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
};