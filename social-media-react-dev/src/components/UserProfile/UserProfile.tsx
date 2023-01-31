import React from 'react'
import Navbar from '../navbar/Navbar'

const UserProfile = () => {
    return (
        <>
        <Navbar/>
        {/* include batch, username, follow */}
        <div>UserProfile</div>
        <div className="profile-container container">
                <div className="row">
                    <div className="col-md-6 name-box">
                        <div className="">
                            <h2 className="profile-name" id="trainerName">Name: <em>Ben P.</em></h2>
                            <h3>Department: <em>Trainer</em></h3>
                        </div>
                        <div className="btn-box d-flex justify-content-around">
                            <button className="comment-btn">Show comments</button>
                            {/* <button className="comment-btn" onClick={createComments}>Create comments</button> */}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="profile-pic d-flex justify-content-around">
                            <div className="status-box">
                                <p>Status: <em>Active</em></p>
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

export default UserProfile