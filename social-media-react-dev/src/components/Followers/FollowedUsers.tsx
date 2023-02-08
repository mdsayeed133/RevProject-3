import React from 'react'

const FollowedUsers: React.FC<any> = (props: any) => {
    // remove function
    // axios request
    // separate call
    // http://aaagh-env.eba-hd2up2kh.us-east-1.elasticbeanstalk.com/RevRater/users/followed/3/id
    
    return (
        <div className="followed-user d-flex justify-content-around">
            <div className="user-div">
                <p><span>U</span></p>
            </div>
            <p><em>Username</em></p>
            <button>unfollow</button>
        </div>
    )
}

export default FollowedUsers