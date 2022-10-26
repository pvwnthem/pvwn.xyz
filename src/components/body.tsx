import { count } from 'console';
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import ReactAudioPlayer from 'react-audio-player';
import { useState } from "react";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import E from './e'
import StarrySky from './lol'
import './b.css'
export default function Body() {
    const [pd, setPd] = useState('.');
    const [isPlaying, setIsPlaying] = useState(false);
    
    
    return (
        <div className='w-screen h-screen bg-black'>
            < StarrySky />
            <div className="w-full h-screen bg-black flex items-center text-white ">

            <div className='mx-auto h-full'>
            <div className=' flex w-full inter flex-col text-center items-center h-full '>
            <div className='h-full mb-12 flex flex-col'>
            <ReactTypingEffect className='logo mb-2 mx-auto mt-auto '
        text={["PVWN"]} speed={100} typingDelay={750}  eraseDelay={100000000000000} cursor=" "
      />
            <ReactTypingEffect className='logo2 mx-auto'
        text={["Full Stack Web Developer"]} speed={50} typingDelay={1500}  eraseDelay={100000000000000} cursor=" "

      /></div><div className='flex flex-col h-2/3'></div><div className='self-center '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="l w-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
            </svg>
            
            </div>
            

            </div>
            </div>
            
            
            
            
        </div>
        <div id="e"><E /></div>
        
        </div>
    );
}