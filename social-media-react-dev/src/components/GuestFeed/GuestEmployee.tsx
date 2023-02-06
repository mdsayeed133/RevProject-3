import React from 'react'
import '../GuestFeed/GuestFeed.css'

const GuestEmployee: React.FC<any> = (props: any) => {
    return (
        <>
            <div className='leaderboard'>
                <div className='imgcenter'>
                    <h3 className='employeename'><em>Employee</em></h3>
                    <img className='imgfeed' src="https://via.placeholder.com/150" alt="" />
                </div>
                <div className='instructorinfo'>
                    <p>Skills: <em>java, html, React, Javascript</em></p>
                    <p>Followers: <em>80 </em></p>
                    <p>Reviews: <em>78</em></p>
                </div>
                <div className='scoreBoard'>
                    <h5>Overall Rating: <em>4.9/5</em></h5>
                </div>
            </div>
        </>
    )
}

export default GuestEmployee