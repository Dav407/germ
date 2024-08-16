import React from 'react'

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className='text-3xl font-semibold text-center my-7'>About Etim's Blog</h1>
          <div className='tetx-md text-gray-500 flex flex-col gap-6'>
            <p>Welcome to Etim's Blog! This blog was created by Etim David as a personal project to share his thoughts and ideas with the world. Etim is a passionate developer and trader who loves to write about technology, trade, and everything in between.
            </p>
            <p>On this blog, you'll find weekly articles and tutorials on topics such as crypto-currency, investing in stock's, and finacial literacy. Etim is always learning and exploring new technologies, so be sure to check back often for new content!</p>
            <p>We encourage you to leave comments on our posts and engage with other readers. You can like other people's comments and reply to them as well. We believe that a community of learners can help each other grow and improve.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
