import React, { useState } from 'react'
import Comments from '../Comments/Comments';
import { Post as RatingPost } from '../../interfaces/RatingPost';


const Comment: React.FC<any> = (props: {post:RatingPost}) => {

    const [ratingPost, setPostContents] = useState<RatingPost>(props.post);
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
                </div>
            </div>
        </>
    )
}

export default Comment