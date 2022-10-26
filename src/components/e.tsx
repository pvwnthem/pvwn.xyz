import { count } from 'console';
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import ReactAudioPlayer from 'react-audio-player';
import { useState } from "react";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function Body() {
    const [pd, setPd] = useState('.');
    const [isPlaying, setIsPlaying] = useState(false);
    
    
    return (
        <div className="w-full h-screen bg-black flex items-center text-white border border-red-700">
            
            
            <div className='mx-auto border border-red-700 '>
            <div className='flex w-full inter text-7xl flex-col  text-center'>
            <ReactTypingEffect
        text={["PVWN"]} speed={100} typingDelay={750} eraseDelay={100000000000000} cursor="|"
      />
            </div>
            </div>
            
            
            
            
        </div>
    );
}

