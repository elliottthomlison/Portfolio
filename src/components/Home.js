import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import './home.css'

export default function Home() {

  const [state, setState] = useState({value:''}) 

  useEffect(() => {
    axios.get('https://api.countapi.xyz/update/ethomlison.netlify.app/ethomlison.netlify.app/?amount=1')
    .then(function (response) {
      setState(response.data);
      console.log(state)
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [])

  return (
    <main className="relative">
      {/* <img src={image} alt="background" className="absolute w-full" /> */}
      <div className="lg:pt-20 container mx-auto relative ">
        <h1 className ="text-6xl text-green-900 font-bold cursive lg:leading-snug home-name hover:text-gray-900 text-center"></h1>
        <section class="mt-10">
          <div className="text-lg flex flex-col justify-center op">
            <h1 className="text-4xl text-gray-900 mb-4 hover:text-gray-900" id="test">
            <h2 id="test">
              <span 
              style={{
                display: 'inline-block',
              }}
              
              ><Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Hi, I am Elliott. 👋')
                  .pauseFor(500)
                  .deleteAll()
                typewriter.typeString('I am a frontend developer. 👨‍💻')
                  .pauseFor(500)
                  .deleteAll()
                typewriter.typeString('I was previously a teacher and corrections officer. 👮')
                  .pauseFor(500)
                  .deleteAll()
                typewriter.typeString('I have learnt French, Korean, and currently I am studying Mandarin.😵')
                  .pauseFor(500)  
                  .deleteAll()
                typewriter.typeString('I am a lover of Cadbury mini eggs.🥚')              
                  .pauseFor(500)   
                  .deleteAll() 
                typewriter.typeString('I am your new employee.🤝')              
                  .pauseFor(500)   
                  .start()         
              }}
            />
            </span>
            </h2>
            </h1>

            <p className=" text-3xl text-gray-900 hover:text-gray-900">I am a recent <a href id="LHL" onClick={()=> window.open("www.lighthouselabs.ca")}>Lighthouse Labs</a> Web Development Bootcamp alumni. During the bootcamp I learned and refined skills in CSS, HTML, JavaScript, React, jQuery, Ajax, SQL, React, Ruby, Ruby-on-Rails, and other software and skills both in the frontend and backend. I created multiple projects individually and collaboratively, as can be seen in the projects tab. I am eager to find a workplace where I can continue to learn and develop my skills, first as a frontend developer and later as a full stack developer. 
            </p>
          </div>
          
            </section>


      <div id="counter">
      {state.value} visitors have seen the magic of this page
      </div>
      </div>
    </main>
  );
}

