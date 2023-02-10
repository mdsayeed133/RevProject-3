import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import './EmployeeProfile.css'
import { useNavigate } from 'react-router'
import Comments from '../Comments/Comments'
import { Employee } from '../../interfaces/employee';
import { User as U } from '../../interfaces/users';
import { Tag } from '../../interfaces/tag';
import axios from 'axios'
import { useParams } from "react-router-dom";
import Follow from "./Follow"
import { FaUserCircle } from 'react-icons/fa'

const EmployeeProfile: React.FC<any> = (props: {currentUser:U}) => {

    const {id} = useParams(); //path = '/employeeprofile/:id'
    const intId:number = parseInt(id as string);
    const currentUser:U = props.currentUser;
    const [userID, setUserID]= useState(props.currentUser==null? -1:currentUser.id);
    // useNavigate to "navigate"
    const navigate = useNavigate();
    const [employee, setEmployee] = useState<Employee>({id:0,firstName:"",lastName:"",author:{id:0,email:"",password:"",firstName:"",lastName:"",date:""},department:{id:0,title:""},createdDate:""});
    const [employeeRating, setRating] = useState(0);
    const [tags, setTags] = useState<Tag[]>([{id:0,tagName:"None"},{id:0,tagName:"None"},{id:0,tagName:"None, be the first to rate me!"}]);

    const showComments = async () => {
        // navigate("/showcomments")

    }
    const createPost = async () => {
        navigate("/createpostform/"+employee.id);
    }
    // const comments = 'yes';
    //const employee = props.employee;
    // const showEmployeeProfile = async () => {
    //     const response = await axios.get(`http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/employee${}${}`)
    // }
    const fetchEmployeeData = async () => {
        try {
            console.log("This is what the id is:"+id)
            const response = await axios.get(`http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/employee/${id}/id`);
            if (response.status == 200) {
                setEmployee(response.data);
            }
            console.log(employee)
        } catch (error) {
            console.error(error);
        }
    };

    const fetchEmployeeRating = async () => {
        try {
            const response = await axios.get(`http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/rating/post/employee/${id}/average`);
            if (response.status == 200) {
                setRating(response.data);
            }
            console.log(employeeRating)
        } catch (error) {
            console.error(error);
        }
    };

    const fetchEmployeeTopTags = async () => {
        try{
            const response = await axios.get(`http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/rating/post/employee/${id}/top3tags`);
            if (response.status == 200)
            {
                if (response.data.length==3)
                {
                    setTags(response.data);
                }
            }
        }
        catch(error)
        {
            console.error(error);
        }
    }

    function setCurrentUser()
    {
        console.log("I was called.")
        if(currentUser==null){
            setUserID(-1);
        }else{
            setUserID(currentUser.id);
        }
    }
    const hideElements = () =>
    {
        let box = document.getElementById("followBox") as HTMLElement;
        let post = document.getElementById("postButton") as HTMLElement;
        if(userID==-1)
        {
            box.innerHTML="<h4 className='followBox'>Sign in to Follow!</h4>";
            post.innerHTML="<h4>Sign in to Post!</h4>";
        }
    }

    useEffect(() => {
        setCurrentUser();
        fetchEmployeeData();
        fetchEmployeeRating();
        fetchEmployeeTopTags();
        hideElements();
    }, []);

    return (
        <>
            <Navbar />
            {/* create barebones trainer profile. use jamboard as reference */}
            <div className="profile-container container transparent">
                <div className="row">
                    <div className="col-md-6 name-box">
                        <div className="half">
                            <h2 className="profile-name" id="trainerName">Name: {employee.firstName} {employee.lastName}</h2>
                            <h2 className="profile-dept">Department: {employee.department.title}</h2>
                            <h5 className="profile-auth">Author: {employee.author.email} </h5>
                            <h5 className="profile-tags">Most popular tags: {tags[0].tagName}, {tags[1].tagName}, {tags[2].tagName}</h5>
                        </div>
                        <div className="btn-box d-flex justify-content-around">
                            <button className="comment-btn" onClick={showComments}>Show comments</button>
                            <div id="postButton"><button className="comment-btn" onClick={createPost}>Create post</button></div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-pic d-flex justify-content-around">
                            <div className="status-box">
                                <p>Rating: {employeeRating}</p>
                            </div>
                            <div className="image-container d-block text-center">
                                {/* <img src="https://via.placeholder.com/150" alt="" /> */}
                                <FaUserCircle size="10em"/>
                                <br></br>
                                <div className="followBox" id="followBox">
                                    <Follow userId={userID} employeeId={intId}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* this should hold the posted comments upon a click */}
                <div className="posted-comments d-none">
                    <h2><em>Comments will populate below</em></h2>
                    {/*<Comments />*/}
                </div>
            </div>
        </>
    )
}



export default EmployeeProfile