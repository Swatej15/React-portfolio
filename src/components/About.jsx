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
            
                Detail-oriented computer science graduate interested in Data Science, Data Analysis, Data Engineering, Machine Learning, and
                Software engineering dedicated to assisting companies in strategic decision-making through predictive modeling.
                <br/>
                Proficient in coding, fixing bugs, and software development with a disciplined approach to version control..
            </p>
            <br />
            <p className="text-xl">
                I have completed few internship one as Python developer second is .NET developer and third one is MERN Stack developer.<hr/>
                <br />
                <div class="w-full">
                <span class="float-left">Data Analyst &nbsp;&nbsp;&nbsp;(Office24 Hours.)</span>
                <span class="float-right">(June, 2023 - August, 2024)</span>
                <span class="float-left">MERN Stack Developer &nbsp;&nbsp;&nbsp;(Pardy Panda Studio PVT LTD.)</span>
                <span class="float-right">(February, 2023 - May, 2023)</span>
                <span class="float-left">Programming In Core And Advance Python With SQL &nbsp;&nbsp;&nbsp;(URO WEB SOFT.)</span>
                <span class="float-right">(June, 2022 - september, 2022)</span> <br/><br/>
                </div>
                <br/>                                    
            </p>
        </div>
    </div>
  )
}

export default About