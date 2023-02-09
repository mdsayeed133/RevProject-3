import * as React from 'react';

import Select from 'react-select'

import '../post-feed/CreatePostForm.css'
import Navbar from '../navbar/Navbar';
import axios from 'axios';

const CreatePostForm: React.FC<any> = (props) => {

  // const defaultPost:Post ={}

  const [postComments, setPostComments] = React.useState(false);

  // const gatherInput = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.text === "email") {
  // };

  // //axios post request to post comment
  // const postAComment = async () => {
  //   try{
  //     const response = await axios.post(`http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/posts/comment`, userId, text, imageId, postId})
  //     if(response.status === 200){
  //       console.log()
  //     }
  //   } catch {}
  // }


  return (
    <>
      <Navbar />
      {/* johannes add info below */}

      <div className="CreatePostForm">
          <h1>Tell us your thoughts</h1>
        <div className="headerContainer d-flex justify-content-around">
          <div className="employee-name">
            <p id="dispEmployeeName"><em>employee</em></p>
          </div>
          <p className="score" id="userInput">
            <input id="userInputScore" type="text" /> / 10
          </p>
        </div>
        <div className="inputContainer">
          <p id="inputQuestion">Enter your reasoning why</p>
          <textarea id="userInputResponse" ></textarea>
          {/* <input id="userInputResponse" type="text" /> */}
        </div>
        {/* maybe drop tags and stick with emoji */}
        <div className="tagContainer">
          <p>Select Up To 3 Tags</p>
          <select name="tags" id="tags" required defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled>please select</option>
            <option value="boring">Boring</option>
            <option value="interesting">Interesting</option>
            <option value="childish">Childish</option>
            <option value="mature">Mature</option>
            <option value="inconsiderate">Inconsiderate</option>
            <option value="understanding">Understanding</option>
          </select>
          <select name="tags" id="tags" required defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled>please select</option>
            <option value="boring">Boring</option>
            <option value="interesting">Interesting</option>
            <option value="childish">Childish</option>
            <option value="mature">Mature</option>
            <option value="inconsiderate">Inconsiderate</option>
            <option value="understanding">Understanding</option>
          </select>
          <select name="tags" id="tags" required defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled>please select</option>
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

    </>

  );
}

export default CreatePostForm;