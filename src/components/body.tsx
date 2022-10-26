import { count } from 'console';
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import ReactAudioPlayer from 'react-audio-player';
import { useState } from "react";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import E from './e'
import './b.css'
export default function Body() {
    const [pd, setPd] = useState('.');
    const [isPlaying, setIsPlaying] = useState(false);
    
    
    return (
        <div>
        <div className="w-full h-screen bg-black flex items-center text-white ">
            
            <div className='mx-auto'>
            <div className='flex w-full inter text-7xl flex-col  text-center '>
            <ReactTypingEffect 
        text={["PVWN"]} speed={100} typingDelay={750} eraseDelay={100000000000000} cursor="|"
      />
            </div>
            </div>
            
            
            
            
        </div>
        <div id="e"><E /></div>
        
        </div>
    );
}