import React from 'react';
import js from '../assets/js.png';
import reactImage from '../assets/react.png';
import mongo from '../assets/mongo.png';
import java from '../assets/java.png';
import spring from '../assets/spring.png';
import sql from '../assets/sql.png';
import nodejs from '../assets/nodejs.png';
import plsql from '../assets/plsql.png';

export default function Components() {
    const projects = [
        {
            id: 1,
            src: java,
            lang:"Java",
            style:"shadow-[#f27516]"
            
            
        },
        {
            id: 2,
            src: js,
            lang:"JavaScript",
            style:"shadow-[#f0e43c]"
        },
        {
            id: 3,
            src: spring,
            lang:"Spring Boot",
            style:"shadow-[#04ba19]"
        },
        {
            id: 4,
            src: reactImage,
            lang:"React",
            style:"shadow-[#07a4ed]"
        },
        {
            id: 5,
            src: nodejs,
            lang:"NodeJS",
            style:"shadow-[#04ba19]"
        },
        {
            id: 6,
            src: plsql,
            lang:"PL-SQL",
            style:"shadow-[#e0280b]"
        },
        {
            id: 7,
            src: mongo,
            lang:"MongoDB",
            style:"shadow-[#04ba19]"
        },
        {
            id: 8,
            src: sql,
            lang:"SQL",
            style:"shadow-[#07a4ed]"
        }

    ];


    return (
        <div name="technologies" className='w-full md:pt-20 bg-gradient-to-b from-gray-800 to-black text-white'>

            <div className='max-w-screen-lg w-full h-full flex flex-col justify-center mx-auto p-4 '>

                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Technologies</p>
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
