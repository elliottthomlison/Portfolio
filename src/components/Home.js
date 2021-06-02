import axios from 'axios';
import React, { useEffect, useState } from 'react';
import image from '../bg.jpg';
import Typical from 'react-typical'
import './home.css'

export default function Home() {

  const [state, setState] = useState({value:''}) 

  useEffect(() => {
    axios.get('https://api.countapi.xyz/update/hellothere/elliott2.netlify.app/?amount=1')
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
          <div >
          <div className="text-lg flex flex-col justify-center op">
            <h1 className="text-4xl text-gray-900 mb-4 hover:text-gray-900">
              <p>Hi there, I'm Elliott. 
                <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  ' I am a frontend developer.',
                  2500,
                  ' I am a frisbee player.',
                  2500,
                  ' I am a Canadian.',
                  2500,
                  ' I am a constant learner.',
                  2500,
                  ' I am transitioning my career into frontend development.',
                  2500,
                  ' I am a lover of Cadbury mini eggs.',
                  2500,
                  ' I am able to speak French, Korean, and soon Mandarin.',
                  2500,
                  ' I have lived throughout Quebec, and in South Korea. ',
                ]}
                
                />
              </p>
             
            </h1>
            
            <p className=" text-3xl text-gray-900 hover:text-gray-900">I am a recent <a href id="LHL" onClick={()=> window.open("www.lighthouselabs.ca")}>Lighthouse Labs</a> Web Development Bootcamp alumni. During the bootcamp I learned CSS, HTML, JavaScript, React, jQuery, Ajax, SQL, React, Ruby, Ruby-on-Rails, and other software and skills both in the frontend and backend. I created multiple projects individually and collaboratively, as can be seen in the projects tab. I am eager to find a workplace where I can continue to learn and develop my skills, first as a frontend developer and later as a full stack developer. 
            </p>
{/* 
            <br></br>
            
            <p className=" text-3xl text-gray-900 hover:text-gray-900">
            I've lived in Quebec (Montréal and Trois-Rivières), South Korea (Daejeon), and now I've returned home to Vancouver. I enjoy throwing frisbees, attempting muscle-ups, reading, attempting my hand at art, and the mental challenge of coding. This year I will become increasingly competent as a developer and look forward to finding a team to expedite that process.
            </p> */}
          </div>
          </div>
            </section>
            
      </div>
      <div id="counter">
      {state.value} Visitors have seen the magic of this page
      </div>
    </main>
  );
}

