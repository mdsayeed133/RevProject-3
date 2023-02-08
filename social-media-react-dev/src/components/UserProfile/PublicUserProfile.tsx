import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import Post from '../post-feed/Post'
import '../UserProfile/UserProfile.css'
import { Post as p } from '../../interfaces/RatingPost';
import { useParams } from "react-router-dom";
import { User } from '../../interfaces/users';
import axios from 'axios'


const PublicUserProfile: React.FC<any> = (any) => {
    let {id} = useParams();
    const [user, setUser] = useState<User>({id:0,email:"",password:"",firstName:"",lastName:"",date:""});
    const [postCount, setPostCount] = useState(0);
    const [averageRating, setAverageRating] = useState(-1);
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
        rating: {
            id: 0,
            employee: {
                id: 0,
                firstName: "",
                lastName: "",
                author: {
                    id: 0,
                    email: "",
                    password: "",
                    firstName: "",
                    lastName: "",
                    date: ""
                },
                department: {
                    id: 0,
                    title: ""
                },
                createdDate: ""
            },
            score: 0,
            tag1: {
                id: 0,
                tagName: ""
            },
            tag2: {
                id: 0,
                tagName: ""
            },
            tag3: {
                id: 0,
                tagName: ""
            }
        },
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
        rating: {
            id: 0,
            employee: {
                id: 0,
                firstName: "",
                lastName: "",
                author: {
                    id: 0,
                    email: "",
                    password: "",
                    firstName: "",
                    lastName: "",
                    date: ""
                },
                department: {
                    id: 0,
                    title: ""
                },
                createdDate: ""
            },
            score: 0,
            tag1: {
                id: 0,
                tagName: ""
            },
            tag2: {
                id: 0,
                tagName: ""
            },
            tag3: {
                id: 0,
                tagName: ""
            }
        },
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
        rating: {
            id: 0,
            employee: {
                id: 0,
                firstName: "",
                lastName: "",
                author: {
                    id: 0,
                    email: "",
                    password: "",
                    firstName: "",
                    lastName: "",
                    date: ""
                },
                department: {
                    id: 0,
                    title: ""
                },
                createdDate: ""
            },
            score: 0,
            tag1: {
                id: 0,
                tagName: ""
            },
            tag2: {
                id: 0,
                tagName: ""
            },
            tag3: {
                id: 0,
                tagName: ""
            }
        },
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
            const response = await axios.get(`http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/posts/${id}/user/comments`);
            if (response.status == 200) {
                if(response.data.length>0)
                {
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

    React.useEffect(() => {
      getUserById();  
    }, [])
    // const [tempFirst, setFirstName] = useState(props.targetUser.firstName);
    // const [tempLast, setLastName] = useState(props.targetUser.lastName);
    // const [tempEmail, setEmail] = useState(props.targetEmail.email);
    // const [tempPassword, setPassword] = useState(props.targetPassword.password);

    return (
        <>
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
                            <h2 id='fields' >Number of Posts:
                                <p id="post-info-details"><em>{postCount}</em></p>
                            </h2>
                            <h2 id='fields'>Average Rating Given:
                                <p id="post-info-details">{averageRating}</p> / 10
                            </h2>
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
                {/*<Post />*/}
                {/* Ratings by User */}
            </div>
        </>

    )
}

export default PublicUserProfile