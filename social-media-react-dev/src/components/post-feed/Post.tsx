import React, { useState } from 'react'
import Comment from './Comment';
import Comments from '../Comments/Comments';
import { Post as RatingPost } from '../../interfaces/RatingPost';


const Post: React.FC<any> = (props: {post:RatingPost, userId:number}) => {

    const postData:RatingPost= props.post;
    const checkMe = () =>
    {
        console.log(props.post);
    }

    React.useEffect(()=>{
        checkMe();
    },[])

    return (
        <>
            
            <div className="post-card">
                {/* example card */}
                <div className="post-user d-flex">
                    {/* <img src="genericUser.png" className="post-user-image" alt="" /> */}
                    {/* <BsFillEmojiAngryFill size="4em" /> */}
                    <h4><em>{postData.author.email} has this to say about {postData.rating.employee.firstName}</em></h4>
                </div>
                <div className="post-message-body">
                    <div className="post-headline d-flex justify-content-between">
                        <p>Name: <em>{postData.rating.employee.firstName} {postData.rating.employee.lastName}</em></p>
                        <p>Rating: <em>{postData.rating.score}/10</em></p>
                    </div>
                    <div className="post-message d-flex justify-content-between">
                        <p>Department: <em>{postData.rating.employee.department.title}</em></p>
                        <p>Posted by: <em>{postData.author.email}</em></p>
                    </div>
                    {/* working code */}
                    <Comment post={postData} userId={props.userId}/>
                </div>
                <div className="">
                    <div className="react-box">
                        <p className="comment-box " id="commentBox">
                            {/*<Comments />*/}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post