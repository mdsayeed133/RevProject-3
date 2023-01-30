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
                    <h2>A place to connect the future with the Past.</h2>
                    <h4 className='tagline'>Find your trainer</h4>
                    <h4 className='tagline'>Connect with your batchmates</h4>
                    <h4 className='tagline'>Rate your Trainer</h4>
                    <h4 className='tagline'>View what others have to say !</h4>
                </div>
                    </div>


 
            <div className='TrainerRanking_Container' >
            <div className='trainerRanking'>
                     <h3>Current Trainer Rankings...</h3>
                </div>
                    
                <div className='leaderboard'>
                    <img src="https://via.placeholder.com/150" alt="" />
                     <h3 className='rankingname'>Name</h3>
                      <p>Skills: <em> java,React,HTML</em></p>
                        <p>Followers: <em>80 Followers</em></p>
                          <p>Reviews: <em>76 Reviews</em></p>
                      <div className='scoreBoard'>
                         <p>Rating: <em>5/5</em></p>
                        </div>
                        
                        </div>

                        <div className='leaderboard'>
                    <img src="https://via.placeholder.com/150" alt="" />
                     <h3 className='rankingname'>Name</h3>
                      <p>Skills: <em> java,React,HTML</em></p>
                        <p>Followers: <em>70 Followers</em></p>
                          <p>Reviews: <em>70 Reviews</em></p>
                      <div className='scoreBoard'>
                         <p>Rating: <em>4.7/5</em></p>
                        </div>
                          </div>        

                          <div className='leaderboard'>
                    <img src="https://via.placeholder.com/150" alt="" />
                     <h3 className='rankingname'>Name</h3>
                      <p>Skills: <em> java,React,HTML</em></p>
                        <p>Followers: <em>68 Followers</em></p>
                          <p>Reviews: <em>67 Reviews</em></p>
                      <div className='scoreBoard'>
                         <p>Rating: <em>4.5/5</em></p>
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

                <button className='dislikebutton'>
                  <span>Dislike</span>
                </button>

                </div>

                <div className='userratings'>

<p>i was able to sleep properly for the first time in weeks</p>
   <p> User: <em>NotaBot</em></p> 
   <p>Trainer: <em>Benjamin P.</em></p>
   <p>Rating: <em>5/5</em></p>

   <button className='likebutton'>
  <span>Like</span>
</button>

<button className='dislikebutton'>
  <span>Dislike</span>
</button>

</div>

<div className='userratings'>

<p>i was able to sleep properly for the first time in weeks</p>
   <p> User: <em>NotaBot</em></p> 
   <p>Trainer: <em>Benjamin P.</em></p>
   <p>Rating: <em>5/5</em></p>

   <button className='likebutton'>
  <span>Like</span>
</button>

<button className='dislikebutton'>
  <span>Dislike</span>
</button>

</div>

<div className='userratings'>

<p>i was able to sleep properly for the first time in weeks</p>
   <p> User: <em>NotaBot</em></p> 
   <p>Trainer: <em>Benjamin P.</em></p>
   <p>Rating: <em>5/5</em></p>

   <button className='likebutton'>
  <span>Like</span>
</button>

<button className='dislikebutton'>
  <span>Dislike</span>
</button>

</div>




         


            </div>




        </>
    )
}

export default GuestFeed