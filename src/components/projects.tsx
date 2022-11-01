import React from "react";
import './profile.css'

export default function Projects(props: any) {
    if (props.shown === false) {
        return (
            <>
            <p></p>
            </>
        )
    }
    else {
        return (
            <div className="w-screen h-screen bg-black flex items-center text-white flex">         
                
            <div className='w-full h-full md:flex px-24 py-8'>
            <div className="above md:w-1/2 h-full bg-white rounded-3xl text-center">
                <h1 className="above md:text-7xl text-5xl mt-8 inter text-black text-center">DevInspo</h1>
                <a className="text-center above text-black underline mt-4"href="https://dev.pvwn.xyz/">dev.pvwn.xyz</a>
                <img className="w-3/4 mx-auto border rounded-xl mt-8 border-4 border-black" src="./dev.png"></img>
                <h1 className="inter text-black text-4xl mt-8 ">Description</h1>
                <p className="inter text-black md:text-xl text-sm mt-4 px-4 ">DevInspo is a platform for anyone to share and view coding project ideas for free! It was made using the MERN stack and is completely open source! You can find the repo <a className="underline" href="https://github.com/pvwnthem/devinspo">here</a>. Please note that this project is always under construction and some parts may not work 100% of the time.</p>
                <div className="inter flex text-black  px-4 mt-12 text-xl space-x-12">
                    <p>Stack: MERN</p>
                    <p>WIP: True</p>
                    <p>Open Source: True</p>
                    <p>New Tech Used: True</p>
                </div>
            </div>
            
               
              
        
                        </div> 
                            </div>
                
    
    
                            
                    
                    
                  
        )
    }
    
}
