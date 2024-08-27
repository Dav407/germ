import { Button } from 'flowbite-react'
import React from 'react'

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
        <div className='flex-1 justify-center flex flex-col'>
            <h1 className='text-2xl'>
                Want to learn more about crypto? Sure
            </h1>
            <p className='text-gray-500 my-2'>
                Learn about the basics, use cases, and best practices of blockchain technology.
                Click the button below to get started.
            </p>
            <Button className='rounded-tl-xl rounded-bl-none' gradientDuoTone='purpleToPink'>
                 <a href="https://www.instagram.com/etim_david_?igsh=Mmw5MW9scmxxMHNh" target='_blank' rel='noopener noreferrer'>Learn More</a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKcP2v4QQojtRLkfp1mhYuKgiEg1LQ6DsKWw&s" alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiEh6m60XwR0fai-_Ssey6sYXL4PK6wezgEQ&s" />
        </div>
    </div>
  )
}
