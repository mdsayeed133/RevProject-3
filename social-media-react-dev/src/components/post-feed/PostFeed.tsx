import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Button } from '@mui/material';
import Navbar from '../navbar/Navbar';
import { PostCard } from './PostCard';
import { apiGetAllPosts } from '../../remote/social-media-api/postFeed.api';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import TextField from '@mui/material/TextField';
import { apiUpsertPost } from '../../remote/social-media-api/post.api';
import Footer from '../Footer/Footer';
import { BsFillEmojiAngryFill, BsFillEmojiDizzyFill, BsFillEmojiExpressionlessFill, BsFillEmojiFrownFill, BsFillEmojiNeutralFill, BsFillEmojiSmileFill, BsFillEmojiSunglassesFill} from "react-icons/bs";


import '../post-feed/PostFeed.css'
import { useNavigate } from 'react-router-dom';
import Post from './Post';


export const PostFeed = () => {
    // const [post, setPosts] = useState<Post[]>([])
    // const { user } = useContext(UserContext);
    // let welcomeText = 'Welcome!'
    // let postForm = <></>;

    // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     let payload = new Post(0, data.get('postText')?.toString() || '', data.get('postImage')?.toString() || '', [], user, 'Top');
    //     await apiUpsertPost(payload);
    //     fetchData();
    // }

    // if (user) {
    //     postForm = <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
    //         <TextField
    //             required
    //             id="postText"
    //             name='postText'
    //             label="Thoughts You Would Like to Share?"
    //             fullWidth
    //         />
    //         <TextField
    //             id="postImage"
    //             name="postImage"
    //             label="Add an Image or Diagram?"
    //             fullWidth
    //             variant="standard"
    //         />
    //         <Button
    //             type="submit"
    //             variant="contained"
    //             sx={{ mt: 3, ml: 1 }}
    //             color="warning"
    //         >
    //             Create Post
    //         </Button>
    //     </Box>

    //     welcomeText = `Welcome, ${user.firstName}!`
    // }
    // const fetchData = async () => {
    //     const result = await apiGetAllPosts()
    //     setPosts(result.payload.reverse())
    // }

    // useEffect(() => {
    //     fetchData()
    // }, []);

    // navigate to post component
    const navigate = useNavigate();
    
    const addEmployee = async()=>{
        navigate("/createemployee")
    }
    const createPost = async()=>{
        navigate("/createpostform")
    }

    // I want to have the emoticons display

    return (
        // component to edit for changes in the PostFeed
        <>
            <Navbar />
            {/* kw: create sticky sidebar containing "following/add trainer"? */}
            <div className="post-feed-container container">
                <div className="row">
                    <div className="col-md-3">
                        <section className="sidebar-section">
                            <div className="widget make-sticky">
                                <div className="add-button">
                                    <button onClick={addEmployee}>Add Employee</button>
                                    <button onClick={createPost}>Create Post</button>
                                </div>
                                <p>Following:</p>
                                <ul> <em>**this auto pops**</em>
                                    <li><em>Ben P.</em></li>
                                    <li><em>Trainer</em></li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    <div className="col-md-7">
                        <div className="post-feed-content">
                            <h3>Display information here</h3>
                            <Post/>
                            <Post/>
                            <Post/>
                            <Post/>
                            <Post/>
                            <Post/>
                            <Post/>

                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
};