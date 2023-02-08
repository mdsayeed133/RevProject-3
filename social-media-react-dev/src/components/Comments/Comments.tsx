import React from 'react'
import Reply from './Reply';
import { useState } from 'react'
import './Comments.css'


const Comments = () => {

  const [showReplyForm, setShowReplyForm] = useState(false);
  const [likes, setLikes] = useState(0);
  const [replies, setReplies] = useState<string[]>([]);

  const handleReplyClick = () => {
    setShowReplyForm(!showReplyForm);
  };

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const handleReplySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const reply = e.currentTarget.elements.namedItem('reply') as HTMLTextAreaElement;
    setReplies([...replies, reply.value]);
    setShowReplyForm(false);
    reply.value = '';
  };


  return (
    <>
      <div className="comment">
        <button className='reply_button' onClick={handleReplyClick}>Reply</button>
        <button className='reply_button' onClick={handleLikeClick}>Like:</button>
        <span className='like_button'>{likes} likes</span>
      </div>

      {showReplyForm && (
        <form className="reply-form" onSubmit={handleReplySubmit}>
          <textarea className='text_form' placeholder="Write your reply" name="reply"></textarea>
          <br />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button className='submit_form' type="submit">Submit</button>
            <button className='submit_form' type="button" onClick={handleReplyClick}>Cancel</button>
          </div>
        </form>)}
      {replies.map((reply, index) => (
        <Reply key={index} />
      ))}
    </>
  );
};

export default Comments