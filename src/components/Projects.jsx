import React from 'react';
import pimage from '../assets/project.png';


export default function Projects() {

    const projects = [
        {
            id: 1,
            src: pimage
        },
        {
            id: 2,
            src: pimage
        },
        {
            id: 3,
            src: pimage
        },
        {
            id: 4,
            src: pimage
        },
        {
            id: 5,
            src: pimage
        },
        {
            id: 6,
            src: pimage
        }

    ];


    return (
        <div name="projects" className='w-full md:h-screen bg-gradient-to-b from-black to-gray-800 text-white'>

            <div className='max-w-screen-lg w-full h-full flex flex-col justify-center mx-auto p-4 '>

                <div >
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                    <p className='py-3'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 px-12 sm:px-0 h-3/5'>

                    {
                        projects.map(({ id, src }) => {
                            return (
                                <div key={id} className='rounded-lg w-[80%] shadow-gray-600 shadow-md'>
                                    <img className='rounded-md duration-200 hover:scale-105' src={src} alt="pimage" />

                                    <div className='flex items-center justify-center' >
                                        <button className='w-1/2 px-4 py-3 m-4 duration-200 hover:scale-125'>Demo</button>
                                        <button className='w-1/2 px-4 py-3 m-4 duration-200 hover:scale-125'>Code</button>
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
