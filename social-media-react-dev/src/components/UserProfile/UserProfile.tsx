import React from 'react'
import Navbar from '../navbar/Navbar'
import Post from '../post-feed/Post'
import '../UserProfile/UserProfile.css'

const UserProfile = () => {
    return (
        <>
            <Navbar />
            {/* include batch, username, follow */}
            <div>UserProfile</div>
            <div className="profile-container container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="user-stats">
                            <ul>
                                <li>Join Date: <em></em></li>
                                <li>Number of Posts: <em></em></li>
                                <li>Average Rating Given: <em>6.58</em></li>
                                <li>Favorite Tag: <em>Hard Grader</em></li>
                                <li>Favorite Reaction: <em></em></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="user-info">
                            <div className="deets">
                                <p className="details">First Name: <em id="dispPic">Harry</em></p>
                                <p className="details">Last Name: <em>Limbres</em></p>
                                <p className="details">Email: <em></em></p>
                                <button className="btn btn-secondary">Reset Password</button>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="user-pic">
                            <p id="profilePic">H</p>
                            <button className="btn btn-secondary">View Public</button>
                        </div>
                    </div>
                </div>
                {/* this should hold the posted comments upon a click */}
            </div>
                <div className="posted-comments container">
                    <h2><em>comments will populate below</em></h2>
                    <Post/>
                    <Post/>
                </div>
        </>

    )
}

export default UserProfile