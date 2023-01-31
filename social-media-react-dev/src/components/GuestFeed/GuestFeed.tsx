import React from 'react'
import Navbar from '../navbar/Navbar'
import { useNavigate } from 'react-router-dom'

import '../GuestFeed/GuestFeed.css'

const GuestFeed = () => {

  const navigate = useNavigate();

  const login = async () => {
    navigate("/login")
  }
    return (
        <>
            <Navbar />
            <div>GuestFeed</div>
            {/* fs: */}
            <div className='summaryPart'>
            <h2 className='welcomegreeting'>Welcome to RevRater, Where we connect to our future</h2>
                <div className='tagline_comment'>
                   <h4 className='tagline'>Find an Employee</h4>
                    <h4 className='tagline'>Rate the Employee </h4>
                    <h4 className='tagline'>View what others have to say !</h4>
                </div>
                    </div>


 
            <div className='TrainerRanking_Container' >
            <div className='trainerRanking'>
                     <h3>Current Trainer Rankings...</h3>
                </div>
                   
                <div className='leaderboard'>

                <div className='imgcenter'>
                <h3 className='employeename'>Bonny N.</h3>
                  <img className='imgfeed' src="https://via.placeholder.com/150" alt="" />
                   
                         </div>
                  <div className='instructorinfo'>
                     <h6>Skills: <em>java, html, React, Javascript</em></h6>
                        <h6>Followers: <em>80 </em></h6>
                          <h6>Reviews: <em>78</em></h6>
                             </div>
                   <div className='scoreBoard'>
                      <h5>Overall Rating: <em>4.9/5</em></h5>
                        </div>
                        
                        </div>

                       
                        <div className='leaderboard'>

                        <div className='imgcenter'>
                <h3 className='employeename'>Bonny N.</h3>
                  <img className='imgfeed' src="https://via.placeholder.com/150" alt="" />
                   
                         </div>
                  <div className='instructorinfo'>
                     <h6>Skills: <em>java, html, React, Javascript</em></h6>
                        <h6>Followers: <em>80 </em></h6>
                          <h6>Reviews: <em>78</em></h6>
                             </div>
                   <div className='scoreBoard'>
                      <h5>Overall Rating: <em>4.9/5</em></h5>
                        </div>

                        </div>

                        <div className='leaderboard'>
                          
                <div className='imgcenter'>
                <h3 className='employeename'>Bonny N.</h3>
                  <img className='imgfeed' src="https://via.placeholder.com/150" alt="" />
                   
                         </div>
                  <div className='instructorinfo'>
                     <h6>Skills: <em>java, html, React, Javascript</em></h6>
                        <h6>Followers: <em>80 </em></h6>
                          <h6>Reviews: <em>78</em></h6>
                             </div>
                   <div className='scoreBoard'>
                      <h5>Overall Rating: <em>4.9/5</em></h5>
                        </div>
                        </div>
                   </div>


            <div className='userreview_container'>
                <div className='userreview'>
                   <h3>See what others are Saying...</h3>
                </div>
               <div className='userratings'>

                <p className='paragrapfeed'> <em>i was able to sleep properly for the first time in weeks</em></p>
                   
                   <p> User: <em>NotaBot</em></p>
                   <p>Trainer: <em>Benjamin P.</em></p>
                     <p>Rating: <em>5/5</em></p>
                     


                   <button className='likebuttons' onClick={login}>Like </button>
                   <button className='likebutton' onClick={login}>Reply</button>

              </div>

              <div className='userratings'>

               <p className='paragrapfeed'> <em>i was able to sleep properly for the first time in weeks</em></p>
   
                    <p> User: <em>NotaBot</em></p>
                      <p>Trainer: <em>Benjamin P.</em></p>
                       <p>Rating: <em>5/5</em></p>
     


                     <button className='likebuttons' onClick={login}>Like </button>
                           <button className='likebutton' onClick={login}>Reply</button>

                     </div>

                <div className='userratings'>

                   <p className='paragrapfeed'> <em>i was able to sleep properly for the first time in weeks</em></p>
                   
                      <p> User: <em>NotaBot</em></p>
                        <p>Trainer: <em>Benjamin P.</em></p>
                          <p>Rating: <em>5/5</em></p>
                     


                   <button className='likebuttons' onClick={login}>Like </button>
                   <button className='likebutton' onClick={login}>Reply</button>

              </div>
                    </div>




        </>
    )
}

export default GuestFeed