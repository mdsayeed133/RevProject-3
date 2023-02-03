import React from 'react'
import './Reply.css'

const Reply = () => {
    return (
        <>
          <div className="reply d-flex">
            <div className="user-profile">
              <p>L</p>
            </div>
            <p className='reply_message'>This will render with data from <em>Linda Belcher</em></p>
          </div>
            {/* <div className="reply-to-reply">
              <p>reply</p>
            </div> */}
        </>
      );
    };

export default Reply