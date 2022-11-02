import { count } from 'console';
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import ReactAudioPlayer from 'react-audio-player';
import { useState, useRef } from "react";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Profile from './Profile'
import StarrySky from './lol'
import './b.css'
import './nav.css'

import Projects from './projects';
export default function Body() {
    const [pd, setPd] = useState('.');
    const [isPlaying, setIsPlaying] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const profileRef = useRef<null | HTMLDivElement>(null); 
    const projectRef = useRef<null | HTMLDivElement>(null); 
    const scrollHandler = (el: any) => {
        if(el === 'profile') {
            profileRef.current?.scrollIntoView({behavior: 'smooth'})
    }
        if(el === 'projects') {
            projectRef.current?.scrollIntoView({behavior: 'smooth'})
        }
        
    }
    return (
        <div className='w-screen h-screen bg-black'>
            <nav className="w-full bg-white shadow absolute ">
            
            <div className="justify-between px-4 mx-auto  md:items-center md:flex md:px-8 bg-black">
            
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="/">
                        <div className='flex space-x-4'>
                           

                                <h2 className="text-4xl inter text-white flex hover:text-blue-700">PVWN.</h2>
                            
                        </div>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 real"
                                        viewBox="0 0 20 20"
                                        
                                        
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="white"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1  justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
                           <button onClick={() => scrollHandler('profile')} className='btn above text-white text-2xl inter'>About</button>
                            
                           <button onClick={() => scrollHandler('projects')} className='btn above text-white text-2xl inter'>Projects</button>
                           <button onClick={() => scrollHandler('profile')} className='btn above text-white text-2xl inter'>Contact</button>
                            
                            
                        </ul>
                    </div>
                </div>
                
            </div>
            
            
        </nav>
            < StarrySky />
            <div className="w-full h-screen bg-black flex items-center text-white ">

            <div className='mx-auto'>
            <div className=' flex w-full inter flex-col  text-center '>
            
            <ReactTypingEffect className='logo mb-2'
        text={["PVWN"]} speed={100} typingDelay={750}  eraseDelay={100000000000000} cursor=" "
      />
      
      
            </div>
            <ReactTypingEffect className='logo2 ml-5 mx-auto'
        text={["Full Stack Web Developer"]} speed={50} typingDelay={1500}  eraseDelay={100000000000000} cursor=" "
      />
            </div>
            
            
            
            
        </div>
        <div ref={profileRef}>
            <Profile />
        </div>
        <div ref={projectRef}>
< Projects shown={true} />
        </div>
        
            
        
        
        </div>
    );
}