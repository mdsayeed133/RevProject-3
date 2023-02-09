import * as React from 'react';

import Select from 'react-select'

import '../post-feed/CreatePostForm.css'
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { User } from '../../interfaces/users';

const CreatePostForm: React.FC<any> = (props:any) => {

  // const defaultPost:Post ={}
  const {id} = useParams();
  const [user, setUser] = React.useState<any>(props.user);
  const [postComments, setPostComments] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [tag1, setTag1] = React.useState(0);
  const [tag2, setTag2] = React.useState(0);
  const [tag3, setTag3] = React.useState(0);
  const [localscore, setScore] = React.useState(0);
  
  const updateTag1 = (event:React.ChangeEvent<HTMLSelectElement>)=>
  {
    setTag1(parseInt(event.target.value));
    console.log(tag1);
  }
  const updateTag2 = (event:React.ChangeEvent<HTMLSelectElement>)=>{
    setTag2(parseInt(event.target.value));
    console.log(tag2);
  }
  const updateTag3 = (event:React.ChangeEvent<HTMLSelectElement>)=>
  {
    setTag3(parseInt(event.target.value));
    console.log(tag3);
  }
  const updateMessage = (event:React.ChangeEvent<HTMLInputElement>)=>
  {
    setMessage(event.target.value);
    console.log(message);
  }
  const updateScore = (event:React.ChangeEvent<HTMLSelectElement>)=>
  {
    setScore(parseInt(event.target.value));
    console.log(localscore);
  }
  
  const navigate = useNavigate();
  
  const submitIt = async() =>
  {
    if(message==""||tag1==0||tag2==0||tag3==0||localscore==0)
    {
      alert("You need to fill all entries before you make a post.");
      return;
    }
    try{
        const response = await axios.post("http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/posts/rating",{
          userId: props.user.id,
          text: message,
          imageId: 5,
          ratingDTO:{
            employeeId: id,
            score: localscore,
            tags1: tag1,
            tags2: tag2,
            tags3: tag3
          }
        });
        if(response.status==201)
        {
          alert("Post created successfully!");
          navigate("/employeeprofile/"+id);
        }
        else
        {
          alert("There was an issue with your post! Status:"+response.status);
        }
    }
    catch(error)
    {
      console.log("There was an issue with submitting the post!");
      console.error(error)
    }
  }



  return (
    <>
      <Navbar />
      {/* johannes add info below */}

      <div className="CreatePostForm">
          <h1>Tell us your thoughts</h1>
        <div className="headerContainer d-flex justify-content-around">
          <p className="score" id="userInput">Rating</p>
          <select name="score" id="score" onChange={updateScore} required defaultValue={'DEFAULT'}>
            <option value="0">Please select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="inputContainer">
          <p id="inputQuestion">Enter your reasoning why</p>
          <input type="text" id="userInputResponse" onChange={updateMessage}></input>
          {/* <input id="userInputResponse" type="text" /> */}
        </div>
        {/* maybe drop tags and stick with emoji */}
        <div className="tagContainer">
          <p>Select Up To 3 Tags</p>
          <select name="tags" id="tags1" onChange={updateTag1} required defaultValue={'DEFAULT'}>
            <option value="0">Please select a tag</option>
            <option value="1">aggravating</option>
            <option value="2">amusing</option>
            <option value="3">anxious</option>
            <option value="4">bad</option>
            <option value="5">boring</option>
            <option value="6">challenging</option>
            <option value="7">childish</option>
            <option value="8">confusing</option>
            <option value="9">discouraging</option>
            <option value="10">disliked</option>
            <option value="11">engaging</option>
            <option value="12">friendly</option>
            <option value="13">frustrating</option>
            <option value="14">fulfilling</option>
            <option value="15">glhf</option>
            <option value="16">good</option>
            <option value="17">inconsiderate</option>
            <option value="18">infuriating</option>
            <option value="19">musical</option>
            <option value="20">nerd</option>
            <option value="21">offputting</option>
            <option value="22">rage-inducing</option>
            <option value="23">respected</option>
            <option value="24">respectful</option>
            <option value="25">stressful</option>
            <option value="26">understanding</option>
          </select>
          <select name="tags" id="tags2" onChange={updateTag2} required defaultValue={'DEFAULT'}>
            <option value="0">Please select a tag</option>
            <option value="1">aggravating</option>
            <option value="2">amusing</option>
            <option value="3">anxious</option>
            <option value="4">bad</option>
            <option value="5">boring</option>
            <option value="6">challenging</option>
            <option value="7">childish</option>
            <option value="8">confusing</option>
            <option value="9">discouraging</option>
            <option value="10">disliked</option>
            <option value="11">engaging</option>
            <option value="12">friendly</option>
            <option value="13">frustrating</option>
            <option value="14">fulfilling</option>
            <option value="15">glhf</option>
            <option value="16">good</option>
            <option value="17">inconsiderate</option>
            <option value="18">infuriating</option>
            <option value="19">musical</option>
            <option value="20">nerd</option>
            <option value="21">offputting</option>
            <option value="22">rage-inducing</option>
            <option value="23">respected</option>
            <option value="24">respectful</option>
            <option value="25">stressful</option>
            <option value="26">understanding</option>
          </select>
          <select name="tags" id="tags3" onChange={updateTag3} required defaultValue={'DEFAULT'}>
            <option value="0">Please select a tag</option>
            <option value="1">aggravating</option>
            <option value="2">amusing</option>
            <option value="3">anxious</option>
            <option value="4">bad</option>
            <option value="5">boring</option>
            <option value="6">challenging</option>
            <option value="7">childish</option>
            <option value="8">confusing</option>
            <option value="9">discouraging</option>
            <option value="10">disliked</option>
            <option value="11">engaging</option>
            <option value="12">friendly</option>
            <option value="13">frustrating</option>
            <option value="14">fulfilling</option>
            <option value="15">glhf</option>
            <option value="16">good</option>
            <option value="17">inconsiderate</option>
            <option value="18">infuriating</option>
            <option value="19">musical</option>
            <option value="20">nerd</option>
            <option value="21">offputting</option>
            <option value="22">rage-inducing</option>
            <option value="23">respected</option>
            <option value="24">respectful</option>
            <option value="25">stressful</option>
            <option value="26">understanding</option>
          </select>
        </div>
        <div className="buttonContainer">
          <button className="button" type="button" onClick={submitIt}>Submit</button>
        </div>
      </div>

    </>

  );
}

export default CreatePostForm;