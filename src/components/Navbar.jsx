import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat App</span>
      <div className="user">
        <img src="https://static.vecteezy.com/system/resources/previews/025/406/261/large_2x/close-up-portrait-of-dog-corgi-face-in-profile-the-muzzle-of-a-dog-with-eyes-pink-language-long-mustache-black-nose-muzzle-of-a-dog-in-profile-generative-ai-photo.jpg" alt="" />
        <span>Mikus</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
