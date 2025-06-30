import React from 'react';
import ProfileImage from '../assets/profile.jpg';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import { Link } from 'react-scroll';


const Home = () => {

  const intro="Hi, I’m Ayush Sajwan — a software developer skilled in Java, JavaScript, SQL, and modern web frameworks like Spring Boot and React. I build scalable, high-performance web and backend systems, currently supporting critical banking solutions at Oracle Financial Services. Passionate about solving problems and growing as an SDE.";


  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      
      <div className='max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row'>

        <div className='flex flex-col justify-center items-center text-center md:items-start md:text-start md:w-4/6 md:pr-6'>
            <h2 className='text-3xl sm:text-7xl font-bold text-white md:pt-10'>I am a Software Engineer</h2>

            <p className='text-gray-500 py-4 '>{intro}</p>

            <div className='hidden md:flex'>
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

            
            <div className='md:hidden'>
              <a href='https://drive.google.com/file/d/1dxBhGeSin6TtmrK0kNfK_8Vrv3xdudXP/view?usp=drive_link' smooth duration={500}>
                <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer
                  hover:bg-gradient-to-l hover:duration-700'>
                    Resume
                    <span className='group-hover:rotate-90 duration-500 ease-in-out'>
                        <MdOutlineKeyboardArrowRight size={25} className='ml-2'/>
                    </span>
                </button>
                </a>
            </div>

        </div>

        <div className='py-8 mx-auto w-2/3 md:w-2/6 '>
            <img src={ProfileImage} alt="profile" className='rounded-2xl animate-blob border-4 border-gray-400 shadow-[0_0_30px_rgba(59,130,246,0.7)] ' />
        </div>

      </div>

    </div>
  )
}

export default Home;
