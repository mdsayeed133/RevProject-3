import React from 'react'
import './Reply.css'

const Reply = () => {
    return (
        <>
          <div className="reply d-flex">
            <div className="user-profile">
              <p>L</p>
            </div>
            <p className='reply_message'>This is a message of me replying to you.
            from:<em>Linda Belcher</em></p>
          </div>
        </>
      );
    };

export default Reply