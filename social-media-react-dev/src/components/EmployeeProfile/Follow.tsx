import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Follow = (props: { userId: number, employeeId: number }) => {
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
/*
    const fetchData = async () => {
        try{
            console.log("This is your user:" + props.userId);
            console.log("This is the target employee id: "+ props.employeeId);
            const res = await axios.get(`http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/users/isFollowing`, {userId, employeeId});
            setFollow(res.data);
        }
        catch(error)
        {console.error(error);}
    };
    */
    
    const fetchData = async () => {
        try {
            console.log("This is your user:" + props.userId);
            console.log("This is the target employee id: " + props.employeeId);
            const res = await axios.get(
              "http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/users/isFollowing",
              {
                params: {
                  userId: props.userId,
                  employeeId: props.employeeId,
                },
              }
            );
            if(res.status==200)
            {
                setFollow(res.data);
            }
        } catch (error) {
            console.error(error);
        }
  };
     

    useEffect(() => {
        fetchData();
    }, []);




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