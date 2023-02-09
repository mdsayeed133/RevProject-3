import React from 'react'
import Navbar from '../navbar/Navbar'
import { useNavigate } from 'react-router-dom'

import '../GuestFeed/GuestFeed.css'
import Post from '../post-feed/Post'
import GuestEmployee from './GuestEmployee'
import Footer from '../Footer/Footer'
import { MdMarkChatRead, MdOutlinePersonSearch, MdOutlineRateReview } from "react-icons/md";

const GuestFeed: React.FC<any> = (props: any) => {

  const navigate = useNavigate();

  const login = async () => {
    navigate("/login")
  }
  return (
    <>
      <Navbar />
      {/* attempt at a guest carousel */}

      {/* ======================================================== */}
      {/* fs: */}
      <div className="guest-feed container">
        {/* beginning of carousel */}
        <div className="container marketing">
          <h2 className='welcomegreeting text-center'>Welcome to RevRater, Where we connect to our future</h2>
          <div className="row d-flex justify-content-around">
            <div className="col-md-4 mission-statement-box">
              <div className="hide-icon">
                <MdOutlinePersonSearch className="hidden-icon" size="13vh"/>
                {/* <div className="special" id="special"></div> */}
              </div>
              <h2 className="fw-normal">Find an Employee</h2>
              <p className="text-justify">"At RevRater, our mission is to provide a fair, unbiased and fun service to users that will allow them to rate their employees"</p>
              {/* <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p> */}
            </div>
            <div className="col-md-4 mission-statement-box">
              <div className="hide-icon">
                <MdOutlineRateReview className="hidden-icon" size="13vh"/>
              </div>
              <h2 className="fw-normal">Rate the Employee</h2>
              <p className="text-justify">"At RevRater, we believe in holding everyone accountable to the judgement to other around them. We believe that this will help in maintaining high quality employees."</p>
              {/* <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p> */}
            </div>
            <div className="col-md-4 mission-statement-box">
              <div className="hide-icon">
                <MdMarkChatRead className="hidden-icon" size="13vh"/>
              </div>
              <h2 className="fw-normal">View what others say!</h2>
              <p className="text-justify">"At RevRater, our users will have access to our database of employees as well as our completely anonymous users. Just sign in to leave your thoughts."</p>
              {/* <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p> */}
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
            <h3>Current Employee Rankings...</h3>
          </div>
          <GuestEmployee />
          <GuestEmployee />
          <GuestEmployee />
        </div>
        <div className='userreview_container'>
          <div className='userreview d-flex'>
            <h3>See what others are Saying...</h3>
            <button className="tease-btn btn btn-secondary" onClick={login}>Sign Up</button>
          </div>
          {/* <Post/>
          <Post/> */}
          <div className="make-blur">
            <div className='userratings'>

              <p className='paragrapfeed'> <em>i was able to sleep properly for the first time in weeks</em></p>

              <p> User: <em>NotaBot</em></p>
              <p>Trainer: <em>Benjamin P.</em></p>
              <p>Rating: <em>5/5</em></p>
              <button disabled={true} className='likebuttons' onClick={login}>Like </button>
              <button disabled={true} className='likebutton' onClick={login}>Reply</button>

            </div>

            <div className='userratings'>
              <p className='paragrapfeed'> <em>i was able to sleep properly for the first time in weeks</em></p>
              <p> User: <em>NotaBot</em></p>
              <p>Trainer: <em>Benjamin P.</em></p>
              <p>Rating: <em>5/5</em></p>
              <button disabled={true} className='likebuttons' onClick={login}>Like </button>
              <button disabled={true} className='likebutton' onClick={login}>Reply</button>
            </div>
            <div className='userratings'>
              <p className='paragrapfeed'> <em>i was able to sleep properly for the first time in weeks</em></p>
              <p> User: <em>NotaBot</em></p>
              <p>Trainer: <em>Benjamin P.</em></p>
              <p>Rating: <em>5/5</em></p>
              <button disabled={true} className='likebuttons' onClick={login}>Like </button>
              <button disabled={true} className='likebutton' onClick={login}>Reply</button>
            </div>
            <div className='userratings'>
              <p className='paragrapfeed'> <em>i was able to sleep properly for the first time in weeks</em></p>
              <p> User: <em>NotaBot</em></p>
              <p>Trainer: <em>Benjamin P.</em></p>
              <p>Rating: <em>5/5</em></p>
              <button disabled={true} className='likebuttons' onClick={login}>Like </button>
              <button disabled={true} className='likebutton' onClick={login}>Reply</button>
            </div>
          </div>
        </div>

      </div>


    </>
  )
}

export default GuestFeed