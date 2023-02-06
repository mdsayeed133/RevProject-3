import React from 'react'
import { FaAngry } from 'react-icons/fa'
import Navbar from '../navbar/Navbar'
import Post from '../post-feed/Post'
import '../UserProfile/UserProfile.css'

const UserProfile = () => {
    return (
        <>
            <Navbar />
            <div className="user-profile-container container">
                <div className="profile-grid d-flex justify-content-around">
                    <div className="post-info-container">
                        <div className="join-date">
                            <p>Join Date:
                                <p id="join-date-value">01/03/1989</p>
                            </p>
                        </div>
                        <div className="post-info-details">
                            <p >Number of Posts:
                                <p id="post-info-details">5000</p>
                            </p>
                            <p>Average Rating Given:
                                <p id="post-info-details">6.58</p> / 10
                            </p>
                            <p>Favorite Tag:
                                <p id="post-info-details">Hard Grader</p>
                            </p>
                            <p className='image' >Favorite Image:
                                <p id="trainer-favorite-img">
                                    <FaAngry />
                                </p>
                            </p>
                        </div>
                    </div>

                    <div className="profile-info-container">
                        <div className="personal-info-container">
                            <p className="first-name" id='personal-fields'>First Name:
                                <p id='inputs'>Benjamin</p>
                            </p>
                            <p className="last-name" id='fields'>Last Name:
                                <p id='inputs'>Petruzziello</p>
                            </p>
                            <p className="email" id='fields'>Email:
                                <p id='inputs'>BPetruzziello@gmail.com</p>
                            </p>
                        </div>

                        <div className="btn-box d-flex justify-content-around" id='password-btn'>
                            <button className="reset-password-btn">Reset Password</button>
                            {/* <button className="comment-btn" onClick={createComments}>Create comments</button> */}
                        </div>
                    </div>

                    <div className="image-profile-container">
                        <div className="holder">
                            <div className="square" id='square'>
                                <p id='user-letter'>B</p>
                            </div>

                        </div>
                        <br></br>
                        <div className='buttons-container'>
                            <button className="view-profile-btn" id='view-profile'>View Public Profile</button>
                            <br></br>
                            {/* <button className="follow-btn" id='follow'>Follow</button>
                                <br></br>
                                <button className="follow-btn" id='unfollow'>Unfollow</button> */}
                        </div>
                    </div>
                </div>
                <br></br>
            </div>
            <div className="user-posts-container container">
                <Post/>
            </div>


        </>

    )
}

export default UserProfile