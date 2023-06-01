import React from 'react'

function UserCard({user,imageUrl}) {
    console.log(user)
  return (
    <div className="user-card-base">
        <div className="user-avatar-wrapper">
          <img src={`${imageUrl}`} alt='' className='user-avatar' />
        </div>
      
        <div className="user-card-secondary">

        </div>
    </div>
  )
}

export default UserCard


