import axios from "axios";
import { useState, useEffect } from "react";

const Follow = (props: { userId: Number, employeeId: Number }) => {
    const [follow, setFollow] = useState(false);
    const [response, setResponse] = useState<any>("");


    const handleFollow = async () => {
        try {
            const res = await axios.put(`http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/users/follow`, {
                userId: props.userId,
                employeeId: props.employeeId,
            });
            setResponse(res.data);
            setFollow(true);
        } catch (error) {
            console.error(error);
            
        } 
    };

    const handleUnfollow = async () => {
        try {
            const res = await axios.put(`http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/users/unfollow`, {
                userId: props.userId,
                employeeId: props.employeeId,
            });
            setResponse(res.data);
            setFollow(false);
        } catch (error) {
            console.error(error);
            
        }
    };

    

    return (
        <>
            {follow ? (
                <button className="follow-btn" onClick={handleUnfollow}>
                    Unfollow
                </button>
            ) : (
                <button className="follow-btn" onClick={handleFollow}>
                    Follow
                </button>
            )}
            <h5>{response}</h5>
        </>
    );

}
export default Follow