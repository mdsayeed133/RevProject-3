import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar'
import '../Trainers/Trainers.css'

const Trainers = () => {

    // import navigate
    const navigate = useNavigate();

    const seeProfile = async () => {
        navigate('/trainerprofile')
    }
    return (
        <>
            <Navbar />
            <div className="trainers-container container">
                <h1>Display trainers</h1>
                <p><em>auto populate...</em></p>
                <div className="display-trainers">
                    {/* this card format will auto generate the trainers */}
                    <div className="trainer-card card d-flex jusity-content-between">
                        <img src="genericUser.png" className="card-img-top img-fluid" alt="..." />
                        <div className="comment-boxes">
                            <ul>
                                <li>something</li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title"><em>Ben P.</em></h5>
                            <p className="card-text">Some information about <em>Ben</em> will display. Maybe top comment?</p>
                            <button className="trainer-btn" onClick={seeProfile}>See profile</button>
                        </div>
                    </div>
                    <div className="trainer-card card">
                        <img src="genericUser.png" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some information about <em>Trainer</em> will display. Maybe top comment?</p>
                            <button className="trainer-btn" onClick={seeProfile}>See profile</button>
                        </div>
                    </div>
                    <div className="trainer-card card">
                        <img src="genericUser.png" className="card-img-top" alt="..." />
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