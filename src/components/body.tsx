import { count } from 'console';
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import ReactAudioPlayer from 'react-audio-player';
import { useState } from "react";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Profile from './Profile'
import StarrySky from './lol'
import './b.css'

import Projects from './projects';
export default function Body() {
    const [pd, setPd] = useState('.');
    const [isPlaying, setIsPlaying] = useState(false);
    
    
    return (
        <div className='w-screen h-screen bg-black'>
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
        <Profile />
        < Projects shown={true} />
            
        
        
        </div>
    );
}