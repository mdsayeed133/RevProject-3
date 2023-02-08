import React, { useState } from 'react'
import Comments from '../Comments/Comments';
import { Post as RatingPost } from '../../interfaces/RatingPost';
import one from './one.png'
import two from './two.png';
import three from './three.png';
import four from './four.png';
import five from './five.png';
import six from './six.png';
import seven from './seven.png';
import Like from '../Comments/Like';

const Comment: React.FC<any> = (props: {post:RatingPost, userId:number}) => {

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

    function thereCanOnlyBeOne()
    {
        let allImageElements = document.getElementsByClassName("onlyOne");
        for (let i = 0; i<allImageElements.length; i++)
        {
            if(!allImageElements[i].classList.contains("ignore"))
            {   
                if(allImageElements[i].id != ""+ratingPost.imageId)
                {
                    allImageElements[i].classList.add("d-none");
                }
                allImageElements[i].classList.add("ignore");
            }
        }
    }

    React.useEffect(()=>{thereCanOnlyBeOne()},[])

    return (
        <>
        {thereCanOnlyBeOne()}
            <div className="post-card">
                {/* example card */}
                <div className="post-message-body">
                    <div className="post-message d-flex justify-content-between">
                        <p>Posted by: <em>{ratingPost.author.email}</em></p>
                        <img src={one} alt="Sick Reaction" id="1" className="onlyOne"/>
                        <img src={two} alt="Angry Reaction" id="2" className="onlyOne"/>
                        <img src={three} alt="Dizzy Reaction" id="3" className="onlyOne"/>
                        <img src={four} alt="Neutral Reaction" id="4" className="onlyOne"/>
                        <img src={five} alt="Happy Reaction" id="5" className="onlyOne"/>
                        <img src={six} alt="Silly Reaction" id="6" className="onlyOne"/>
                        <img src={seven} alt="Cool Reaction" id="7" className="onlyOne"/>
                    </div>
                    {/* working code */}
                    <p className="message">{ratingPost.message}</p>
                    <Like postId={ratingPost.id} userId={props.userId}/>
                </div>
            </div>
        </>
    )
}

export default Comment