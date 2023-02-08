import React, { useState } from 'react'
import Comments from '../Comments/Comments';
import { Post as RatingPost } from '../../interfaces/RatingPost';


const Post: React.FC<any> = (props: {post:RatingPost}) => {

    const ratingPost:RatingPost= props.post;
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

    // edit
    const [showEditForm, setShowEdit] = useState(false);
    const handleEditClick = async()=> {
        setShowEdit(!showEditForm);
    }

    // axios get url("http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/posts/1/user/feed")

    return (
        <>
            <div className="post-card">
                {/* example card */}
                <div className="post-user d-flex">
                    {/* <img src="genericUser.png" className="post-user-image" alt="" /> */}
                    {/* <BsFillEmojiAngryFill size="4em" /> */}
                    <div className="user-div"></div>
                    <h4><em>"I really couldn't get much out of it...</em></h4>
                </div>
                <div className="post-message-body">
                    <div className="post-headline d-flex justify-content-between">
                        <p>Name: <em>{ratingPost.rating.employee.firstName} {ratingPost.rating.employee.lastName}</em></p>
                        <p>Rating: <em>{ratingPost.rating.score}/10</em></p>
                    </div>
                    <div className="post-message d-flex justify-content-between">
                        <p>Department: <em>Trainer Department</em></p>
                        <p>Posted by: <em>User</em></p>
                    </div>
                    {/* working code */}
                    <p className="message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero cumque eius, accusamus officia mollitia. Architecto ducimus ipsum atque libero eos magnam deserunt. Doloremque quae culpa est, ipsa possimus autem!</p>
                    
                    {/* edit feature */}
                    {showEditForm && (
                        <form className="edit-form">
                            <textarea className='edit-textarea' placeholder="Edit your post *should load text*" name="edit"></textarea>
                            <br />
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <button className='submit_form' type="submit">Submit</button>
                                <button className='submit_form' type="button">Cancel</button>
                            </div>
                        </form>
                    )}
                    <button className="" onClick={handleEditClick}>Edit</button>
                </div>
                <div className="">
                    <div className="react-box">
                        <p className="comment-box " id="commentBox">
                            <Comments />
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post