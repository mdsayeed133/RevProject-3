import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";

const Like: React.FC<any> = (props: { postId: number, userId: number }) => {
    const [likes, setLikes] = useState<number>(0);
    useEffect(() => {
        const fetchLikes = async () => {
            const response = await axios.get(`http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/likes/${props.postId}/amount`);
            setLikes(response.data);
        };
        fetchLikes();
    }, [props.postId]);

    const handleLike = async () => {
        await axios.post(`http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/likes/like`, {
            postId: props.postId,
            userId: props.userId,
        });
        setLikes(likes + 1);
    };

    return (
        <>
            <button className='reply_button' onClick={handleLike}>Like:</button>
            <span className='like_button'>{likes} likes</span>
        </>
    );
};

export default Like