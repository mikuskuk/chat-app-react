import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find user' />
      </div>
      <div className="userChat">
        <img src="https://static.vecteezy.com/system/resources/previews/025/406/261/large_2x/close-up-portrait-of-dog-corgi-face-in-profile-the-muzzle-of-a-dog-with-eyes-pink-language-long-mustache-black-nose-muzzle-of-a-dog-in-profile-generative-ai-photo.jpg" alt="" />
        <div className="userChatInfo">
          <span>Mikus</span>
        </div>      
      </div>
    </div>
  )
}

export default Search
