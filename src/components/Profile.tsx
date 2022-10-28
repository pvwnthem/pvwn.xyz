import { count } from 'console';
import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import ReactAudioPlayer from 'react-audio-player';
import { useState } from "react";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './profile.css'

export default function Profile() {
    const [pd, setPd] = useState('.');
    const [isPlaying, setIsPlaying] = useState(false);
    
    
    return (   
        <div className="w-full h-screen bg-black flex items-center text-white">         
            
            
            <div className='w-full h-full py-12'>          
                <div className=' w-2/3 h-full bg-white mx-auto rounded-3xl'>
                    <div className='w-1/2 h-full py-8 '>                       
                        <div className=' ml-8 rounded-3xl h-full bg-black '>
                            <div className='w-36 h-36 mx-auto py-8'>                     
                                <img src="waltuh.png" className='image rounded-full'></img>
                            </div>    
                            <div className='text-center mt-16 text-6xl inter'>PVWN</div>     
                            <div className='text-center mt-16 text-xl inter'>I am a 13 year old full stack web developer</div>
                                  
                    
                        </div>     
                    </div>   
                </div> 
            </div>   
              
               
               
             
             
              
        </div> 
    );
}

