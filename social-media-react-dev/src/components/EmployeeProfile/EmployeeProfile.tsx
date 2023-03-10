import React from 'react'
import Navbar from '../navbar/Navbar'
import './EmployeeProfile.css'
import { useNavigate } from 'react-router'
const EmployeeProfile = () => {

    // useNavigate to "navigate"
    const navigate = useNavigate();
    // const showComments = async () => {
    //     navigate("/showcomments")
    // }
    const createComments = async () => {
        navigate("/createcomments")
    }
    // const comments = 'yes';

    // React.useEffect(()=> {
    //     if (comments !=){
    //         console.log("show comments")
    //     } else {
    //         const element: HTMLElement = document.getElementById('showComment') as HTMLElement
    //         element.innerHTML = 'display everything'
    //     }
    // })
    return (
        <>
            <Navbar />
            {/* create barebones trainer profile. use jamboard as reference */}
            <div className="profile-container container">
                <div className="row">
                    <div className="col-md-6 name-box">
                        <div className="">
                            <h2 className="profile-name" id="trainerName">Name: <em>Ben P.</em></h2>
                            <h3>Department: <em>Trainer</em></h3>
                        </div>
                        <div className="btn-box d-flex justify-content-around">
                            <button className="comment-btn">Show comments</button>
                            <button className="comment-btn" onClick={createComments}>Create comments</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-pic d-flex justify-content-around">
                            <div className="status-box">
                                <p>Rating: <em>7.89/10</em></p>
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
                </div>
            </div>
        </>
    )
}

export default EmployeeProfile