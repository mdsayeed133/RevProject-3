import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import './EmployeeProfile.css'
import { useNavigate } from 'react-router'
import Comments from '../Comments/Comments'
import { Employee } from '../../interfaces/employee';
import { Tag } from '../../interfaces/tag';
import axios from 'axios'
import { useParams } from "react-router-dom";

const EmployeeProfile: React.FC<any> = (props: any) => {

    let {id} = useParams(); //path = '/employeeprofile/:id'
    const currentUser = props.currentUser;
    // useNavigate to "navigate"
    const navigate = useNavigate();
    const [employee, setEmployee] = useState<Employee>({id:0,firstName:"",lastName:"",author:{id:0,email:"",password:"",firstName:"",lastName:"",date:""},department:{id:0,title:""},createdDate:""});
    const [employeeRating, setRating] = useState(0);
    const [tags, setTags] = useState<Tag[]>([{id:0,tagName:"None"},{id:0,tagName:"None"},{id:0,tagName:"None, be the first to rate me!"}]);

    const showComments = async () => {
        // navigate("/showcomments")

    }
    const createComments = async () => {
        navigate("/createcomments")
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

    useEffect(() => {
        fetchEmployeeData();
        fetchEmployeeRating();
        fetchEmployeeTopTags();
    }, []);

    return (
        <>
            <Navbar />
            {/* create barebones trainer profile. use jamboard as reference */}
            <div className="profile-container container">
                <div className="row">
                    <div className="col-md-6 name-box">
                        <div className="half">
                            <h2 className="profile-name" id="trainerName">Name: {employee.firstName} {employee.lastName}</h2>
                            <h2 className="profile-dept">Department: {employee.department.title}</h2>
                            <h5 className="profile-auth">Author: {employee.author.email} </h5>
                            <h5 className="profile-tags">Most Popular Tags: {tags[0].tagName}, {tags[1].tagName}, {tags[2].tagName}</h5>
                        </div>
                        <div className="btn-box d-flex justify-content-around">
                            <button className="comment-btn" onClick={showComments}>Show comments</button>
                            <button className="comment-btn" onClick={createComments}>Create comments</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-pic d-flex justify-content-around">
                            <div className="status-box">
                                <p>Rating: {employeeRating}</p>
                            </div>
                            <div className="image-container d-block">
                                <img src="https://via.placeholder.com/150" alt="" />
                                <br></br>
                                <button className="follow-btn">Follow</button>
                                <button className="follow-btn">Unfollow</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* this should hold the posted comments upon a click */}
                <div className="posted-comments d-none">
                    <h2><em>comments will populate below</em></h2>
                    {/*<Comments />*/}
                </div>
            </div>
        </>
    )
}



export default EmployeeProfile