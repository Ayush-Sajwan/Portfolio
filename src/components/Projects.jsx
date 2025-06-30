import React from 'react';
import pimage from '../assets/project.png';


export default function Projects() {

    const projects = [
        {
            id: 1,
            src: pimage,
            name:"BlogKage",
            desc:"An anime-themed blogging platform using Express, MongoDB, Node.js, and EJS.",
            demo:null,
            code:"https://github.com/Ayush-Sajwan/BloggingWebsite"
        },
        {
            id: 2,
            src: pimage,
            name:"ChatApp",
            desc:"Developed a real-time chat application using Java, Threads ,Sockets and SQL.",
            demo:null,
            code:"https://github.com/Ayush-Sajwan/JavaChatApplication"
        },
        {
            id: 3,
            src: pimage,
            name:"INoteBook",
            desc:"Full-stack notes app using the MERN stack with secure authentication via JWT.",
            demo:null,
            code:"https://github.com/Ayush-Sajwan/INoteBookBackEnd"
        },
        {
            id: 4,
            src: pimage,
            name:"Puzzle Website",
            desc:"A puzzle theme website built using Flask, SQlAlchemy ,HTML and CSS.",
            demo:null,
            code:"https://github.com/Ayush-Sajwan/puzzleapp"
        }

    ];


    return (
        <div name="projects" className='w-full pt-20 bg-gradient-to-b from-black to-gray-800 text-white'>

            <div className='max-w-screen-lg w-full h-full flex flex-col justify-center mx-auto p-4 '>

                <div >
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                    <p className='py-3'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-6 px-12 sm:px-0 h-3/5'>

                    {
                        projects.map(({ id, src ,name ,desc,demo,code}) => {
                            return (
                                <div key={id} className='rounded-lg w-[80%] shadow-gray-600 shadow-lg my-6'>
                                    <img className='rounded-md duration-200 hover:scale-105' src={src} alt="pimage" />
                                    <div className="text-gray-200">
                                        <p className='font-3xl font-bold px-2 pt-4'>{name}</p>
                                        <p className='font-xl font-light italic px-2'>{desc}</p>
                                    </div>

                                    <div className='flex items-center justify-center' >
                                        <a href={demo} className='w-1/2 px-4 py-1 m-4 text-center hover:text-blue-400 hover:scale-125 duration-200'>Demo</a>
                                        <a href={code} className='w-1/2 px-4 py-1 m-4 text-center  hover:text-blue-400 hover:scale-125 duration-200'>Code</a>
                                    </div>
                                </div>
                            );
                        })
                    }

                </div>

            </div>
        </div>
    )
}
