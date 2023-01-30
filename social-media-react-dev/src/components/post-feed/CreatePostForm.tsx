import * as React from 'react';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import { apiUpsertPost } from '../../remote/social-media-api/post.api';
import '../post-feed/CreatePostForm.css'
import { useNavigate } from "react-router-dom";

const CreatePostForm = () => {


    const createPostForm = {

      username: "",
      score: "",
      text: "",
      tag1: "",
      tag2: "",
      tag3: "",
  };

    const [username, setUsername] = useState("");
    const [score, setScore] = useState("");
    const [text, setText] = useState("");
    const [tag1, setTag1] = useState("");
    const [tag2, setTag2] = useState("");
    const [tag3, setTag3] = useState("");

  const validateForm = () => {

    if(!username || !score || !text || !tag1) {
      return false;
    }
    return true;

  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    //const response = await apiUpsertPost(data);
    apiUpsertPost(data);
  }

  return (
    <div className="CreatePostForm">
        <div className="headerContainer">
          <h2 id="userInput">Username</h2>
          <h2 className="score" id="userInput">
            <input id="userInputScore" type="text"> / 10 </input>
          </h2>
          <h2 className="profilePic" id="userInput"> ProfilePic </h2>
          
    </div>
    <div className="inputContainer">
        <h2>Enter your reasoning why</h2>
        <input id="userInputResponse" type="text"></input>
    </div>
    <div className="tagContainer">
        <h2>Select Up To 3 Tags</h2>
        <select name="tags" id="tags" required >
                <option value="none" selected disabled hidden></option>
                <option value="boring">Boring</option>
                <option value="interesting">Interesting</option>
                <option value="childish">Childish</option>
                <option value="mature">Mature</option>
                <option value="inconsiderate">Inconsiderate</option>
                <option value="understanding">Understanding</option>
        </select>
        <select name="tags" id="tags">
                <option value="none" selected disabled hidden></option>
                <option value="boring">Boring</option>
                <option value="interesting">Interesting</option>
                <option value="childish">Childish</option>
                <option value="mature">Mature</option>
                <option value="inconsiderate">Inconsiderate</option>
                <option value="understanding">Understanding</option>
        </select>
        <select name="tags" id="tags">
                <option value="none" selected disabled hidden></option>
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
    
  );
}

export default CreatePostForm;