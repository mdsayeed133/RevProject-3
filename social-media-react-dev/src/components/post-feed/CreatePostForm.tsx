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
    //</div className={styles.postCont}>
    <React.Fragment>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        required
          id="filled-multiline-static"
          label="Thoughts You Would Like to Share?"
          fullWidth
        />
        <TextField
            id="postImage"
            name="postImage"
            label="Add an Image or Diagram?"
            fullWidth
            variant="standard"
        />
        <Button 
            type="submit"
            variant="contained"
            sx={{ mt: 3, ml: 1 }}
            color="warning"
        >
            Create Post
        </Button>
      </Box>
    </React.Fragment>
    //</div>
  );
}