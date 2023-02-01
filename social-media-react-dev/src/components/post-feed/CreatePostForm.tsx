import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import { apiUpsertPost } from '../../remote/social-media-api/post.api';
import Select from 'react-select'

import '../post-feed/CreatePostForm.css'
import Navbar from '../navbar/Navbar';

export default function CreatePostForm() {





  return (
    <>
      <Navbar />
      {/* johannes add info below */}

      <div className="CreatePostForm">
        <div className="headerContainer">
          <h2 id="userInput">Username</h2>
          <h2 className="score" id="userInput">
            <input id="userInputScore" type="text" /> / 10
          </h2>
          <h2 className="profilePic" id="userInput"> ProfilePic </h2>

        </div>
        <div className="inputContainer">
          <h2 id="inputQuestion">Enter your reasoning why</h2>
          <textarea id="userInputResponse" ></textarea>
          {/* <input id="userInputResponse" type="text" /> */}
        </div>
        <div className="tagContainer">
          <h2>Select Up To 3 Tags</h2>
          <select name="tags" id="tags" required defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled></option>
            <option value="boring">Boring</option>
            <option value="interesting">Interesting</option>
            <option value="childish">Childish</option>
            <option value="mature">Mature</option>
            <option value="inconsiderate">Inconsiderate</option>
            <option value="understanding">Understanding</option>
          </select>
          <select name="tags" id="tags" required defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled></option>
            <option value="boring">Boring</option>
            <option value="interesting">Interesting</option>
            <option value="childish">Childish</option>
            <option value="mature">Mature</option>
            <option value="inconsiderate">Inconsiderate</option>
            <option value="understanding">Understanding</option>
          </select>
          <select name="tags" id="tags" required defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled></option>
            <option value="boring">Boring</option>
            <option value="interesting">Interesting</option>
            <option value="childish">Childish</option>
            <option value="mature">Mature</option>
            <option value="inconsiderate">Inconsiderate</option>
            <option value="understanding">Understanding</option>
          </select>

        </div>
        <div className="buttonContainer">
          <button className="button" type="button">Submit</button>
        </div>
      </div>











      {/* <section className="create-post-section">
        <div className="post-container container">
          <h2>Create Your Post</h2>
          <div className="post-box">
            <h4>Rating: 1-10</h4>
            <input type="number" name="rating" id="rating" placeholder="only 1-10 will count" />
            <div className="post-input">
              <p>Reasoning:</p>
              <input type="text" name="post" id="reasonsBox" />
              <div className="tags d-flext">
                <p>How did they make you feel?</p>
                <div className="dropdowns">
                </div>
              </div>
            </div>
            <button>Post</button>
          </div>
        </div>
      </section> */}
    </>

  );
}

// export default CreatePostForm;