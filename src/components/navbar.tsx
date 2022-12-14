import { count } from 'console';
import React from 'react';
import './nav.css'
import Profile from './Profile';
import { useState, useRef } from "react";
export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    
    return (
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
                           <a className='text-white text-2xl inter'>About</a>
                            
                            <a className='text-white text-2xl inter'>Projects</a>
                            <a className='text-white text-2xl inter'>Contact</a>
                            
                            
                        </ul>
                    </div>
                </div>
                
            </div>
            
            
        </nav>
    );
}