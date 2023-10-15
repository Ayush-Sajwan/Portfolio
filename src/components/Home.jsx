import React from 'react';
import ProfileImage from '../assets/profile.jpg';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      
      <div className='max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row'>

        <div className='flex flex-col justify-center items-center text-center md:items-start md:text-start'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I am a Software Engineer</h2>

            <p className='text-gray-500 py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias maiores mollitia consequuntur, soluta voluptas quae cumque sapiente, numquam delectus nemo possimus nihil et? Repellendus, sed praesentium eos quo doloribus vitae?</p>

            <div>
              <Link to='projects' smooth duration={500}>
                <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer
                  hover:bg-gradient-to-l hover:duration-700'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-500 ease-in-out'>
                        <MdOutlineKeyboardArrowRight size={25} className='ml-2'/>
                    </span>
                </button>
                </Link>
            </div>

        </div>

        <div className='py-8 mx-auto w-2/3 md:w-full'>
            <img src={ProfileImage} alt="profile" className='rounded-2xl animate-blob border-4 border-gray-400 ' />
        </div>

      </div>

    </div>
  )
}

export default Home;
