import React from 'react'
import Navbar from '../navbar/Navbar'
import { useNavigate } from 'react-router-dom'

import '../GuestFeed/GuestFeed.css'

const GuestFeed: React.FC<any> = (props: any) => {

  const navigate = useNavigate();

  const login = async () => {
    navigate("/login")
  }
  return (
    <>
      <Navbar />
      <div>GuestFeed</div>
      {/* attempt at a guest carousel */}

      {/* ======================================================== */}
      {/* fs: */}
      <div className="guest-feed">
        {/* beginning of carousel */}
        <div className="container marketing">
        <h2 className='welcomegreeting text-center'>Welcome to RevRater, Where we connect to our future</h2>
          <div className="row">
            <div className="col-lg-4">
              <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
              <h2 className="fw-normal">Find an Employee</h2>
              <p className="text-justify">Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
              <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            <div className="col-lg-4">
              <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
              <h2 className="fw-normal">Rate the Employee</h2>
              <p className="text-justify">Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
              <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            <div className="col-lg-4">
              <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
              <h2 className="fw-normal">View what others say!</h2>
              <p className="text-justify">And lastly this, the third column of representative placeholder content.</p>
              <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
          </div>
        </div>

        {/* <div className='summaryPart'>
          <h2 className='welcomegreeting'>Welcome to RevRater, Where we connect to our future</h2>
          <div className='tagline_comment'>
            <h4 className='tagline'>Find an Employee</h4>
            <h4 className='tagline'>Rate the Employee </h4>
            <h4 className='tagline'>View what others have to say !</h4>
          </div>
        </div> */}

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
      </div>


    </>
  )
}

export default GuestFeed