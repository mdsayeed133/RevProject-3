import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Box, Button } from '@mui/material';
import { apiUpsertPost } from '../../remote/social-media-api/post.api';
import '../post-feed/CreatePostForm.css'
import Navbar from '../navbar/Navbar';

export default function CreatePostForm() {

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   //const response = await apiUpsertPost(data);
  //   apiUpsertPost(data);
  // }

  return (
    <>
      <Navbar />
      <section className="create-post-section">
        <div className="post-container container">
          <h2>Create Your Post</h2>
          <div className="post-box">
            <h4>Rating: 1-10</h4>
            {/* maybe a radio since */}
            <input type="number" name="rating" id="rating" placeholder="only 1-10 will count" />
            <div className="post-input">
              <p>Reasoning:</p>
              <input type="text" name="post" id="reasonsBox"/>
              <div className="tags">
                <p>How did they make you feel?</p>
                <div className="dropdowns">
                  
                </div>
              </div>
            </div>
            <button>Post</button>
          </div>
        </div>
      </section>
    </>

  );
}

// export default CreatePostForm;