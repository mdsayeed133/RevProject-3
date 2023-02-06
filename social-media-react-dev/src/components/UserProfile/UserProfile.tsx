import React from 'react'
import { FaAngry } from 'react-icons/fa'
import Navbar from '../navbar/Navbar'
import Post from '../post-feed/Post'
import '../UserProfile/UserProfile.css'

const UserProfile = () => {
    return (
        <>
            <Navbar />
            {/* include batch, username, follow */}
            <div className="user-profile-container container">
                <div className="profile-grid">
                    <div className="post-info-container">
                        <div className="join-date">
                            <h2 id='fields'>Join Date:
                                <p id="post-info-details">01/03/1989</p>
                            </h2>
                        </div>
                        <div className="post-info-details" >
                            <h2 id='fields' >Number of Posts:
                                <p id="post-info-details">5000</p>
                            </h2>
                            <h2 id='fields'>Average Rating Given:
                                <p id="post-info-details">6.58</p> / 10
                            </h2>
                            <h2 id='fields'>Favorite Tag:
                                <p id="post-info-details">Hard Grader</p>
                            </h2>
                            <h2 className='image' id='fields'>Favorite Image:
                                <p id="trainer-favorite-img">
                                    <FaAngry />
                                </p>
                            </h2>
                        </div>
                    </div>
                    <div className="profile-info-container">
                        <div className="personal-info-container">
                            <h2 className="first-name" id='fields'>First Name:
                                <p id='inputs'>Benjamin</p>
                            </h2>
                            <h2 className="last-name" id='fields'>Last Name:
                                <p id='inputs'>Petruzziello</p>
                            </h2>
                            <h2 className="email" id='fields'>Email:
                                <p id='inputs'>BPetruzziello@gmail.com</p>
                            </h2>
                        </div>

                        <div className="btn-box d-flex justify-content-around" id='password-btn'>
                            <button className="reset-password-btn">Reset Password</button>
                            {/* <button className="comment-btn" onClick={createComments}>Create comments</button> */}
                        </div>
                    </div>

                    <div className="image-profile-container">
                        <div className="square" id='square'>
                            <p id='user-letter'>B</p>
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
                <Post/>
                {/* Ratings by User */}

                <div className="ratings-container">
                    <div className='ratings-title'>
                        <h2 className="user-ratings" id='ratings'>Ratings by this User:</h2>
                    </div>

                    <div className="post-container" id='container'>
                        <div className="user-container" id='container'>

                            <div className='user-info-container' id='container'>

                                <div className="profile-pic" id="profile-pic">
                                    <h2 className="square-profile-post" id='square'>
                                        <p className="user-letter-post" id='user-letter-post'>B</p>
                                    </h2>

                                    {/* <p id='profile-pic'>Picture</p>  */}
                                </div>

                                <h2 className="username" id="input-field">Username:
                                    <p className='rating-score-input' id='user-inputs'>BPetruzziello</p>
                                </h2>

                                <h2 className="rating-score" id="input-field">Rating:
                                    <p className='rating-score-input' id='user-inputs'>7.3</p> / 10
                                </h2>

                            </div>

                            <div className="reasoning-container" id='container'>
                                <h2 className="username-reasoning-field" id='reasoning'>Reasoning</h2>
                                <p className="username-reasoning-input" id="user-input-response">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem harum ipsum
                                    exercitationem illum, distinctio porro? Quidem vero, labore consectetur
                                    sunt ipsam eum cum? Exercitationem quam natus facere atque quibusdam qui.
                                </p>
                            </div>

                            <div className="emotion-tag-container" id='container'>
                                <div className="emotion-container" id='container'>
                                    <h2 className="emoticon" id='emoticon'>EMOTICON</h2>
                                    <p className="emoticon-img" id="emoticon-img">
                                        <FaAngry style={{ color: "red" }} />
                                    </p>
                                </div>
                                <div className="tag-container" id='tag-inputs' >
                                    <h2 className="tag-options" id='tag-options'>Tags:
                                        <p className='tag' id="tag" >Childish,</p>
                                        <p className='tag' id="tag">Dry,</p>
                                        <p className='tag' id="tag">Boring,</p>
                                    </h2>
                                </div>
                            </div>

                        </div>
                        <div className="button-container">
                            <button className="edit" id='edit'>Edit</button>
                        </div>


                    </div>
                </div>
            </div>
        </>

    )
}

export default UserProfile