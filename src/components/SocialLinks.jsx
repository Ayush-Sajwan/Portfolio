import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: <><span>LinkedIn </span>
                <FaLinkedin size={30} /></>,
            href: "https://www.linkedin.com/in/ayush-sajwan-723a76220",
            style:"rounded-tr-md"
        },
        {
            id: 2,
            child: <><span>GitHub</span>
                <FaGithub size={30} /></>,
            href: "https://github.com/ayush-sajwan"
        },
        {
            id: 3,
            child: <><span>Resume </span>
                <BsPersonLinesFill size={30} /></>,
            href: "https://drive.google.com/file/d/1-2BBtMrXM6BqsJK_t1Z9HibLMFikqSHV/view?usp=sharing",
            style:"rounded-br-md"
        },

    ];

    
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>

                {
                    links.map((link) => {
                        return (
                            <li  key={link.id} className={'flex justify-between items-center w-40 h-14 pl-6 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-700 '+link.style}>

                                <a href={link.href} className='flex justify-between items-center w-full text-white'>

                                    {link.child}


                                </a>

                            </li>

                        );
                    })
                }

            </ul>
        </div>
    )
}

export default SocialLinks
