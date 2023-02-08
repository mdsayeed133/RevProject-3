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

    function thereCanOnlyBeOne()
    {
        let allImageElements = document.getElementsByClassName("onlyOne");
        for (let i = 0; i<7; i++)
        {
            allImageElements[i].classList.add("d-none");
        }
        switch(ratingPost.imageId)
        {
            case 1: allImageElements[0].classList.remove("d-none");
                    break;
            case 2: allImageElements[1].classList.remove("d-none");
                    break;
            case 3: allImageElements[2].classList.remove("d-none");
                    break;
            case 4: allImageElements[3].classList.remove("d-none");
                    break;
            case 5: allImageElements[4].classList.remove("d-none");
                    break;
            case 6: allImageElements[5].classList.remove("d-none");
                    break;
            case 7: allImageElements[6].classList.remove("d-none");
                    break;
            default: ;
        }
    }

    React.useEffect(()=>{thereCanOnlyBeOne()},[])

    return (
        <>
            <div className="post-card">
                {/* example card */}
                <div className="post-message-body">
                    <div className="post-message d-flex justify-content-between">
                        <p>Posted by: <em>{ratingPost.author.email}</em></p>
                        <img src={one} alt="Sick Reaction" id="one" className="onlyOne"/>
                        <img src={two} alt="Angry Reaction" id="two" className="onlyOne"/>
                        <img src={three} alt="Dizzy Reaction" id="three" className="onlyOne"/>
                        <img src={four} alt="Neutral Reaction" id="four" className="onlyOne"/>
                        <img src={five} alt="Happy Reaction" id="five" className="onlyOne"/>
                        <img src={six} alt="Silly Reaction" id="six" className="onlyOne"/>
                        <img src={seven} alt="Cool Reaction" id="seven" className="onlyOne"/>
                    </div>
                    {/* working code */}
                    <p className="message">{ratingPost.message}</p>
                </div>
            </div>
        </>
    )
}

export default Comment