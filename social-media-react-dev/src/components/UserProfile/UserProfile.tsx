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
                {/* Ratings by User */}

                <div className="ratings-container">
                    <div className='ratings-title'>
                        <h2 className="user-ratings" id='ratings'>Ratings by this User:</h2>
                    </div>

                    <div className="post-container">
                        <div className="user-container">
                            <h2 className="username" id="username">Username:
                                <p id='username-input'>BPetruzziello</p>
                            </h2>
                            <h2 className="rating-score" id="rating-score">Rating:
                                <p id='rating-score-input'>7.3</p> / 10
                            </h2>
                            <h2 className="profile-pic" id="profile-pic">
                                <div className="square-profile-post" id='square'>
                                    <p id='user-letter-post'>B</p>
                                </div>
                                {/* <p id='profile-pic'>Picture</p>  */}
                            </h2>
                            <div className="reasoning-container" >
                                <h2 id='reasoning'>Reasoning</h2>
                                <p id="user-input-response" >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem harum ipsum
                                    exercitationem illum, distinctio porro? Quidem vero, labore consectetur
                                    sunt ipsam eum cum? Exercitationem quam natus facere atque quibusdam qui.
                                </p>
                            </div>
                            <div className="emotion-tag-container">
                                <div className="emotion-container" id='emoticon'>
                                    <h2 id='emoticon'>Emoticon</h2>
                                    <p id="emoticon-img">
                                        <FaAngry style={{ color: "red" }} />
                                    </p>
                                </div>
                                <div className="tag-container" >
                                    <h2 id='tag-options'>Tags:
                                        <p className='tag1' id="tag" >Childish,</p>
                                        <p className='tag1' id="tag">Dry,</p>
                                        <p className='tag1' id="tag">Boring,</p>
                                    </h2>
                                </div>
                            </div>
                            <div className="button-container">
                                <button className="edit" id='edit'>Edit</button>
                            </div>
                        </div>



                    </div>
                </div>

                {/* Ratings by User */}

                <div className="ratings-container-1">


                    <div className="post-container">
                        <div className="user-container">
                            <h2 className="username" id="username">Username:
                                <p id='username-input'>BPetruzziello</p>
                            </h2>
                            <h2 className="rating-score" id="rating-score">Rating:
                                <p id='rating-score-input'>7.11</p> / 10
                            </h2>
                            <h2 className="profile-pic" id="profile-pic">
                                <div className="square-profile-post" id='square'>
                                    <p id='user-letter-post'>B</p>
                                </div>
                            </h2>
                            <div className="reasoning-container" >
                                <h2 id='reasoning'>Reasoning</h2>
                                <p id="user-input-response" >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem harum ipsum
                                    exercitationem illum, distinctio porro? Quidem vero, labore consectetur
                                    sunt ipsam eum cum? Exercitationem quam natus facere atque quibusdam qui.
                                </p>
                            </div>
                            <div className="emotion-tag-container">
                                <div className="emotion-container" id='emoticon'>
                                    <h2 id='emoticon'>Emoticon</h2>
                                    <p id="emoticon-img">
                                        <FaAngry style={{ color: "red" }} />
                                    </p>
                                </div>
                                <div className="tag-container" >
                                    <h2 id='tag-options'>Tags:
                                        <p className='tag1' id="tag" >Terrible,</p>
                                        <p className='tag1' id="tag">Lame,</p>
                                        <p className='tag1' id="tag">Dumb,</p>
                                    </h2>
                                </div>
                            </div>
                            <div className="button-container">
                                <button className="edit" id='edit'>Edit</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ratings by User */}

                <div className="ratings-container-1">


                    <div className="post-container">
                        <div className="user-container">
                            <h2 className="username" id="username">Username:
                                <p id='username-input'>BPetruzziello</p>
                            </h2>
                            <h2 className="rating-score" id="rating-score">Rating:
                                <p id='rating-score-input'>5.33</p> / 10
                            </h2>
                            <h2 className="profile-pic" id="profile-pic">
                                <div className="square-profile-post" id='square'>
                                    <p id='user-letter-post'>B</p>
                                </div>
                            </h2>
                            <div className="reasoning-container" >
                                <h2 id='reasoning'>Reasoning</h2>
                                <p id="user-input-response" >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem harum ipsum
                                    exercitationem illum, distinctio porro? Quidem vero, labore consectetur
                                    sunt ipsam eum cum? Exercitationem quam natus facere atque quibusdam qui.
                                </p>
                            </div>
                            <div className="emotion-tag-container">
                                <div className="emotion-container" id='emoticon'>
                                    <h2 id='emoticon'>Emoticon</h2>
                                    <p id="emoticon-img">
                                        <FaAngry style={{ color: "red" }} />
                                    </p>
                                </div>
                                <div className="tag-container" >
                                    <h2 id='tag-options'>Tags:
                                        <p className='tag1' id="tag" >Boring,</p>
                                        <p className='tag1' id="tag">Dumb,</p>
                                    </h2>
                                </div>
                            </div>
                            <div className="button-container">
                                <button className="edit" id='edit'>Edit</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>

    )
}

export default UserProfile