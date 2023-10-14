import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import reactImage from '../assets/react.png';
import mongo from '../assets/mongo.png';
import java from '../assets/java.png';

export default function Components() {
    const projects = [
        {
            id: 1,
            src: html,
            lang:"HTML",
            style:"shadow-[#f77845]"
            
        },
        {
            id: 2,
            src: css,
            lang:"CSS",
            style:"shadow-[#3c87f0]"
        },
        {
            id: 3,
            src: js,
            lang:"JavaScript",
            style:"shadow-[#f0e43c]"
        },
        {
            id: 4,
            src: reactImage,
            lang:"React",
            style:"shadow-[#07a4ed]"
        },
        {
            id: 5,
            src: mongo,
            lang:"MongoDB",
            style:"shadow-[#04ba19]"
        },
        {
            id: 6,
            src: java,
            lang:"Java",
            style:"shadow-[#f27516]"
        }

    ];


    return (
        <div name="experience" className='w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white'>

            <div className='max-w-screen-lg w-full h-full flex flex-col justify-center mx-auto p-4 '>

                <div className=''>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
                    <p className='py-6'>These are the technologies that I have worked with.....</p>
                </div>

                <div className='grid w-9/10  text-center sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                    {
                        projects.map(({ id, src ,lang, style }) => {
                            return (
                                <div key={id} className={"py-2 rounded-lg shadow-md "+style}>
                                    <img className='w-20 h-3/5 mx-auto' src={src} alt="pimage" />

                                    <p className='mt-4 h-2/5 text-2xl' >{lang}</p>
                                </div>
                            );
                        })
                    }

                </div>

            </div>
        </div>
    )
}
