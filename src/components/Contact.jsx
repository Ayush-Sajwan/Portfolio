import React from 'react'

export default function Contact() {
  return (
    <div name="contact" className='w-full md:h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
    
      <div className='max-w-screen-lg w-full h-full flex flex-col justify-end mx-auto p-5 '>
        <div className='pb-4'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact Me</p>
            <p className='py-6'>Submit the form below to contact me</p>
        </div>

        <div className='flex items-center'>
            <form action="https://getform.io/f/bc25ce3f-250b-4911-a847-f5f574ea4094" method='POST' className='flex flex-col w-full md:w-1/2'>
                <input type="text" name="name"
                placeholder='Enter your name'
                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                <input type="text" name="email"
                placeholder='Enter your email'
                className='p-2 bg-transparent border-2 my-2 rounded-md text-white focus:outline-none' />

                <textarea name="message"  rows="10" 
                placeholder='Enter your message'
                className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none '></textarea>

                <button type="submit" className='px-6 self-start py-3 my-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md'>Let's Talk</button>

            </form>
        </div>
      </div>

    </div>
  )
}
