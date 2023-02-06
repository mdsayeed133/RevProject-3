import React from 'react'

const FollowedUsers: React.FC<any> = (props: any) => {
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