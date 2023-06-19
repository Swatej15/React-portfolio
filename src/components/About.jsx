import React from 'react';

const About = () => {
  return (
    <div
        name="about"
        className="w-full h-screen  bg-gradient-to-b from-gray-800 to-black text-white"
        >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>

            <p className="text-xl mt-20">
            
                I am Last Year Student of Computer Engineering.
                <br/>
                i have good one Skills in Communication  ,Aptitude  and Leadership.
            </p>
            <br />
            <p className="text-xl">
                I have done 2 Internship and currently doing internship On MERN Stack developer.<hr/>
                <br />
                <div class="w-full">
                <span class="float-left">Python with Django &nbsp;&nbsp;&nbsp;(URO WEB SOFT.)</span>
                <span class="float-right">(January 10,2022 - september 22,2022)</span> <br/><br/>
                <span class="float-left">.NET with C# &nbsp;&nbsp;&nbsp;(URO WEB SOFT.)</span>
                <span class="float-right">(June 6,2022 - July 22,2022)</span><br/><br/>
                <span class="float-left">MERN Stack Developer &nbsp;&nbsp;&nbsp;(Pardy Panda Studio)</span>
                <span class="float-right">(February 6,2023 - May 8,2023)</span>
                </div>
                <br/>                                    
            </p>
        </div>
    </div>
  )
}

export default About