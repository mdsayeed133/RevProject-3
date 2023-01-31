import React from 'react'
import Navbar from '../navbar/Navbar'
import "../UserProfile/UserProfile.css"

const UserProfile = () => {
    return (
        <>
        <Navbar/>
        {/* include batch, username, follow */}
        <div className="user-profile-container">
            <div className="profile-grid">
                <div className="post-info-container">
                    <div className="join-date">
                        <h2>Join Date:
                            <p>01/03/1989</p>
                        </h2>
                    </div>
                    <div className="post-info-details">
                        <h2>Number of Posts
                            <p>5000</p>
                        </h2>
                        <h2>Average Rating Given: 
                            <p>6.58</p> / 10
                        </h2>
                        <h2>Favorite Tag:
                            <p>Hard Grader</p>
                        </h2>
                        <h2>Favorite Image:
                            <img src="https://i1.sndcdn.com/avatars-000286122741-4zbhxx-t500x500.jpg" alt="trainer-favorite-img" />
                        </h2>
                    </div>
                </div>

                <div className="profile-info-container">
                    <div className="personal-info-container">
                       <h2 className="first-name" id='fields'>First Name:
                            <p id='inputs'>Benjamin</p>
                       </h2>
                       <h2 className="last-name" id='fields'>First Name:
                            <p id='inputs'>Petruzziello</p>
                       </h2>
                       <h2 className="email" id='fields'>First Name:
                            <p id='inputs'>BPetruzziello@gmail.com</p>
                       </h2>
                    </div>
                    <div className="btn-box d-flex justify-content-around">
                        <button className="comment-btn">Show comments</button>
                        {/* <button className="comment-btn" onClick={createComments}>Create comments</button> */}
                    </div>
                 </div>

                 <div className="image-container d-block">
                                <img src="https://via.placeholder.com/150" alt="" />
                                <br></br>
                                <button className="follow-btn">Follow</button>
                                <button className="follow-btn">Unfollow</button>
                            </div>

                            <div className="posted-comments d-none">
                    <h2><em>comments will populate below</em></h2>
                </div>        

                </div>
        </div>  
        </>
        
    )
}

export default UserProfile