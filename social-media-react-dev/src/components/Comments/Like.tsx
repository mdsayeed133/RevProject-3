import React from 'react'
import{useState, useEffect} from 'react'
import axios from "axios";

const Like: React.FC<any> = (props: {postId: number, userId :number}) => {
    const [likes, setLikes] = useState<number>(0);

    return (
        <span className='like_button'>{likes} likes</span>
    )
}

export default Like