import React from 'react'
import Navbar from '../navbar/Navbar'
import '../TrainerProfile/TrainerProfile.css'

const TrainerProfile = () => {
    return (
        <>
        <Navbar/>
        <div>TrainerProfile</div>
        {/* create barebones trainer profile. use jamboard as reference */}
        <div className="profile-container container">
            <div className="row">
                <div className="col-md-6">
                <div className="name-box">
                <h2 className="profile-name" id="trainerName">Name: <em>Ben P.</em></h2>
                <h3>Department: <em>Trainer</em></h3>
            </div>
            <div className="batch-list">
                <h4>Batch</h4>
                <ul className="batch-list">
                    <li className="batch-list-item">batch 1</li>
                    <li className="batch-list-item">batch 2</li>
                    <li className="batch-list-item">batch 3</li>
                    <li className="batch-list-item">batch 4</li>
                </ul>
            </div>
                </div>
                <div className="col-md-6">
                    <div className="profile-pic">
                        <img src="https://via.placeholder.com/150" alt="" />
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default TrainerProfile