import React from 'react'
import Navbar from '../navbar/Navbar'

const TrainerProfile = () => {
    return (
        <>
        <Navbar/>
        <div>TrainerProfile</div>
        {/* create barebones trainer profile. use jamboard as reference */}
        <div className="profile-container container">
            <h2 className="profile-name" id="trainerName">Name: <em>Ben P.</em></h2>
            <h3>Department: <em>Trainer</em></h3>

        </div>
        </>
    )
}

export default TrainerProfile