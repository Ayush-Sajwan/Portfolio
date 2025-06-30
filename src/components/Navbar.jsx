import React,{useState} from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';
import { Link } from 'react-scroll';

function Navbar() {


  const [ham,setHam]=useState(false);

     const links=[
        {id:1,link:'home'},
        {id:2,link:'experience'},
        {id:3,link:'projects'},
        {id:4,link:'technologies'},
        {id:5,link:'contact'}
     ]
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-[#090617] fixed'>
    <div>
        <h1 className='text-5xl ml-2 italic font-medium'>Ayush</h1>
    </div>
      
      <ul className='hidden md:flex'>

      {links.map(({id,link})=>{

        return(
            <li  key={id} className='mx-4 cursor-pointer capitalize font-medium text-gray-500 
            hover:scale-110 hover:text-gray-200 duration-200'>
            <Link to={link} smooth duration={400}>{link}</Link>
            </li>
        );
      })}
        
      </ul>

      
      {/* this menu will be hidden for the larger displays */}
      <div onClick={()=>setHam(!ham)} className='cursor-pointer text-gray-500 z-10 pr-4 md:hidden'>
      {ham?<FaTimes size={30}/>:<FaBars size={30}/>}
      </div>

      {ham && <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500'>

        {links.map(({id,link})=>{
          return(

            <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
            <Link onClick={()=>setHam(!ham)} to={link} smooth duration={500} >{link}</Link>
            </li>
          );
        })}
      </ul>  }
        
      
    </div>
  )
}

export default Navbar
