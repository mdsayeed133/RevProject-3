import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Button } from '@mui/material';
import Navbar from '../navbar/Navbar';
import { PostCard } from './PostCard';
import Post from '../../models/Post';
import { apiGetAllPosts } from '../../remote/social-media-api/postFeed.api';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import TextField from '@mui/material/TextField';
import { apiUpsertPost } from '../../remote/social-media-api/post.api';
import Footer from '../Footer/Footer';
import { BsFillEmojiAngryFill, BsFillEmojiDizzyFill, BsFillEmojiExpressionlessFill, BsFillEmojiFrownFill, BsFillEmojiNeutralFill, BsFillEmojiSmileFill, BsFillEmojiSunglassesFill} from "react-icons/bs";


import '../post-feed/PostFeed.css'
import { useNavigate } from 'react-router-dom';


export const PostFeed = () => {
    const [post, setPosts] = useState<Post[]>([])
    const { user } = useContext(UserContext);
    let welcomeText = 'Welcome!'
    let postForm = <></>;

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let payload = new Post(0, data.get('postText')?.toString() || '', data.get('postImage')?.toString() || '', [], user, 'Top');
        await apiUpsertPost(payload);
        fetchData();
    }

    if (user) {
        postForm = <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                required
                id="postText"
                name='postText'
                label="Thoughts You Would Like to Share?"
                fullWidth
            />
            <TextField
                id="postImage"
                name="postImage"
                label="Add an Image or Diagram?"
                fullWidth
                variant="standard"
            />
            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, ml: 1 }}
                color="warning"
            >
                Create Post
            </Button>
        </Box>

        welcomeText = `Welcome, ${user.firstName}!`
    }
    const fetchData = async () => {
        const result = await apiGetAllPosts()
        setPosts(result.payload.reverse())
    }

    useEffect(() => {
        fetchData()
    }, []);

    // navigate to post component
    const navigate = useNavigate();
    
    const createPost = async()=>{
        navigate("/createpostform")
    }
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
                                    <button>Add Trainer</button>
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
                            <div className="post-card">
                                <div className="post-user d-flex">
                                    <img src="genericUser.png" className="post-user-image" alt="" />
                                    <h4>Says: <em>"I really couldn't get much out of it...</em></h4>
                                </div>
                                <div className="post-message-body">
                                    <div className="post-headline d-flex justify-content-between">
                                        <p>Name: <em>Trainer Name</em></p>
                                        <p>Rating: <em>5/10</em></p>
                                    </div>
                                    <div className="post-message d-flex justify-content-between">
                                        <p>Department: <em>Trainer Department</em></p>
                                        <p>Posted by: <em>User</em></p>
                                    </div>
                                    <p className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero cumque eius, accusamus officia mollitia. Architecto ducimus ipsum atque libero eos magnam deserunt. Doloremque quae culpa est, ipsa possimus autem!</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <button>View comments</button>
                                    <div className="react-box">
                                        {/* how many icons are too much */}
                                        <BsFillEmojiAngryFill size="2em" />
                                    </div>
                                </div>
                            </div>
                            <p><em>**THEN EVERYTHING POPULATES BELOW**</em></p>
                            <div className="post-card">
                                <div className="post-user d-flex">
                                    <img src="genericUser.png" className="post-user-image" alt="" />
                                    <h4>Says: <em>"I really couldn't get much out of it...</em></h4>
                                </div>
                                <div className="post-message-body">
                                    <div className="post-headline d-flex justify-content-between">
                                        <p>Name: <em>Trainer Name</em></p>
                                        <p>Rating: <em>5/10</em></p>
                                    </div>
                                    <div className="post-message d-flex justify-content-between">
                                        <p>Department: <em>Trainer Department</em></p>
                                        <p>Posted by: <em>User</em></p>
                                    </div>
                                    <p className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero cumque eius, accusamus officia mollitia. Architecto ducimus ipsum atque libero eos magnam deserunt. Doloremque quae culpa est, ipsa possimus autem!</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <button>View comments</button>
                                    <div className="react-box">
                                        {/* how many icons are too much */}
                                        <BsFillEmojiDizzyFill size="2em" />
                                    </div>
                                </div>
                            </div>
                            <div className="post-card">
                                <div className="post-user d-flex">
                                    <img src="genericUser.png" className="post-user-image" alt="" />
                                    <h4>Says: <em>"I really couldn't get much out of it...</em></h4>
                                </div>
                                <div className="post-message-body">
                                    <div className="post-headline d-flex justify-content-between">
                                        <p>Name: <em>Trainer Name</em></p>
                                        <p>Rating: <em>5/10</em></p>
                                    </div>
                                    <div className="post-message d-flex justify-content-between">
                                        <p>Department: <em>Trainer Department</em></p>
                                        <p>Posted by: <em>User</em></p>
                                    </div>
                                    <p className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero cumque eius, accusamus officia mollitia. Architecto ducimus ipsum atque libero eos magnam deserunt. Doloremque quae culpa est, ipsa possimus autem!</p>
                                </div>
                            </div>
                            <div className="post-card">
                                <div className="post-user d-flex">
                                    <img src="genericUser.png" className="post-user-image" alt="" />
                                    <h4>Says: <em>"I really couldn't get much out of it...</em></h4>
                                </div>
                                <div className="post-message-body">
                                    <div className="post-headline d-flex justify-content-between">
                                        <p>Name: <em>Trainer Name</em></p>
                                        <p>Rating: <em>5/10</em></p>
                                    </div>
                                    <div className="post-message d-flex justify-content-between">
                                        <p>Department: <em>Trainer Department</em></p>
                                        <p>Posted by: <em>User</em></p>
                                    </div>
                                    <p className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero cumque eius, accusamus officia mollitia. Architecto ducimus ipsum atque libero eos magnam deserunt. Doloremque quae culpa est, ipsa possimus autem!</p>
                                </div>
                            </div>
                            <div className="post-card">
                                <div className="post-user d-flex">
                                    <img src="genericUser.png" className="post-user-image" alt="" />
                                    <h4>Says: <em>"I really couldn't get much out of it...</em></h4>
                                </div>
                                <div className="post-message-body">
                                    <div className="post-headline d-flex justify-content-between">
                                        <p>Name: <em>Trainer Name</em></p>
                                        <p>Rating: <em>5/10</em></p>
                                    </div>
                                    <div className="post-message d-flex justify-content-between">
                                        <p>Department: <em>Trainer Department</em></p>
                                        <p>Posted by: <em>User</em></p>
                                    </div>
                                    <p className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero cumque eius, accusamus officia mollitia. Architecto ducimus ipsum atque libero eos magnam deserunt. Doloremque quae culpa est, ipsa possimus autem!</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <button>View comments</button>
                                    <div className="react-box">
                                        {/* how many icons are too much */}
                                        <BsFillEmojiDizzyFill size="2em" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
};