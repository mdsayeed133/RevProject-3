import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar'

const Trainers = () => {

    // import navigate
    const navigate = useNavigate();

    const seeProfile= async()=>{
        navigate('/trainerprofile')
    }
    return (
        <>
            <Navbar />
            <div>Trainers</div>
            <div className="trainers-container container">
                <div className="display-trainers">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Yada yada some quick info about the trainer...</p>
                                <button className="trainer-btn" onClick={seeProfile}>See profile</button>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trainers