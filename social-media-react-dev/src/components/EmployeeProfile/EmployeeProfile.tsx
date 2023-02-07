import React from 'react'
import Navbar from '../navbar/Navbar'
import './EmployeeProfile.css'
import { useNavigate } from 'react-router'
import Comments from '../Comments/Comments'
import { Employee } from '../../interfaces/employee';
import axios from 'axios'

const EmployeeProfile: React.FC<any> = (props: { employee: Employee }) => {
//const EmployeeProfile: React.FC<{ employee: Employee }> = (props) => {

    const employee = props.employee;
    // useNavigate to "navigate"
    const navigate = useNavigate();
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

    return (
        <>
            <Navbar />
            {/* create barebones trainer profile. use jamboard as reference */}
            <div className="profile-container container">
                <div className="row">
                    <div className="col-md-6 name-box">
                        <div className="">
                            <h2 className="profile-name" id="trainerName">Name: {employee.firstName} {employee.lastName}</h2>
                            {/* <h3>Department: {employee.department}</h3> */}
                        </div>
                        <div className="btn-box d-flex justify-content-around">
                            <button className="comment-btn" onClick={showComments}>Show comments</button>
                            <button className="comment-btn" onClick={createComments}>Create comments</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-pic d-flex justify-content-around">
                            <div className="status-box">
                                <p>Rating: </p>
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
                    <Comments/>
                </div>
            </div>
        </>
    )
}

export default EmployeeProfile