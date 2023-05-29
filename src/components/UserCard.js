import React from 'react'

function UserCard({user,imageUrl}) {
    console.log(user)
  return (
    <div className="user-card">
      <div className="user-card-avatar-wrapper">
        <img src={`${imageUrl}`} alt='' className='user-card-avatar' />
      </div>
    </div>
  )
}

export default UserCard


