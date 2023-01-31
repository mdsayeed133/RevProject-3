import React from 'react'
import Navbar from '../navbar/Navbar'

import '../GuestFeed/GuestFeed.css'

const GuestFeed = () => {

    return (
        <>
            <Navbar />
            <div>GuestFeed</div>
            {/* fs: */}
            <div className='summaryPart'>
                <div className='tagline_comment'>
                    <h2>Welcome to RevRater, Where we connect to our future</h2>
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
                    <img src="https://via.placeholder.com/150" alt="" />
                     <h3 className='rankingname'>Bonny N.</h3>
                      <h6>Skills: <em>java, html, React, Javascript</em></h6>
                        <h6>Followers: <em>80 </em></h6>
                          <h6>Reviews: <em>78</em></h6>
                      <div className='scoreBoard'>
                      <h5>Overall Rating: <em>4.9/5</em></h5>
                        </div>
                        
                        </div>

                        <div className='leaderboard'>
                    <img src="https://via.placeholder.com/150" alt="" />
                     <h3 className='rankingname'>Name</h3>
                        <h6>Skills: <em>java, html, React, Javascript</em></h6>
                          <h6>Followers: <em>80 </em></h6>
                            <h6>Reviews: <em>78</em></h6>
                      <div className='scoreBoard'>
                         <h5>Overall Rating: <em>4.7/5</em></h5>
                        </div>
                          </div>        

                          <div className='leaderboard'>
                    <img src="https://via.placeholder.com/150" alt="" />
                     <h3 className='rankingname'>Name</h3>
                       <h6>Skills: <em>java, html, React, Javascript</em></h6>
                         <h6>Followers: <em>80 </em></h6>
                           <h6>Reviews: <em>78</em></h6>
                      <div className='scoreBoard'>
                         <h5>Overall Rating: <em>4.5/5</em></h5>
                        </div>
                          </div>        


            </div>


            <div className='userreview_container'>
                <div className='userreview'>
                   <h3>See what others are Saying...</h3>
                </div>
               <div className='userratings'>

                <p>i was able to sleep properly for the first time in weeks</p>
                   <p> User: <em>NotaBot</em></p> 
                   <p>Trainer: <em>Benjamin P.</em></p>
                   <p>Rating: <em>5/5</em></p>

                   <button className='likebutton'>
                  <span>Like</span>
                </button>

              

                </div>

                <div className='userratings'>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis purus eget lectus convallis, 
    eget malesuada tortor finibus. Pellentesque sem leo, ullamcorper et ex vel, laoreet vulputate nisl.</p>
   <p> User: <em>NotaBot</em></p> 
   <p>Trainer: <em>Benjamin P.</em></p>
   <p>Rating: <em>5/5</em></p>

   <button className='likebutton'>
  <span>Like</span>
</button>


</div>

<div className='userratings'>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis purus eget lectus convallis, 
    eget malesuada tortor finibus. Pellentesque sem leo, ullamcorper et ex vel, laoreet vulputate nisl.</p>
   <p> User: <em>NotaBot</em></p> 
   <p>Trainer: <em>Benjamin P.</em></p>
   <p>Rating: <em>5/5</em></p>

   <button className='likebutton'>
  <span>Like</span>
</button>



</div>

<div className='userratings'>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis purus eget lectus convallis, 
    eget malesuada tortor finibus. Pellentesque sem leo, ullamcorper et ex vel, laoreet vulputate nisl.</p>
   <p> User: <em>NotaBot</em></p> 
   <p>Trainer: <em>Benjamin P.</em></p>
   <p>Rating: <em>5/5</em></p>

   <button className='likebutton'>
  <span>Like</span>
</button>



</div>

 </div>




        </>
    )
}

export default GuestFeed