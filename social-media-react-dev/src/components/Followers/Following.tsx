import React from 'react'
import '../Followers/Following.css'
import FollowedUsers from './FollowedUsers'

const Following: React.FC<any> = (props: any) => {
    return (
        <>
            <div className="follower-list">
                <h3>Following:</h3>
                <div className="follower-item">
                    <FollowedUsers />
                </div>
            </div>
        </>
    )
}

export default Following