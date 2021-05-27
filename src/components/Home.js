import React from 'react';
import image from '../bg.jpg';

export default function Home() {
  return (
    <main className="relative">
      <img src={image} alt="background" className="absolute w-full" />
      <div className="lg:pt-20 container mx-auto relative">
        <h1 className ="text-6xl text-green-100 font-bold cursive lg:leading-snug home-name hover:text-gray-900 text-center">Welcome!</h1>
        <section class="mt-10">
          <div class="container mx-auto p-5 bg-blue-600	bg-opacity-50">
          <div className="text-lg flex flex-col justify-center op">
            <h1 className="cursive text-6xl text-gray-300 mb-4 hover:text-gray-900">
              Hi there, I'm <span className="cursive text-6xl text-gray-100">Elliott</span>.
            </h1>
            <p className="cursive text-4xl text-gray-100 hover:text-gray-900">I am a Canadian man transitioning my career from education and law enforcement to front-end development. A transition that I hope will evolve in a workplace that I can expand my knowledge of CSS, HTML, JavaScript, React, along with other languages and frameworks.
            </p>
            
            <br></br>
            
            <p className="cursive text-4xl text-gray-100 hover:text-gray-900">
            I've lived in Quebec (Montréal and Trois-Rivières), South Korea (Daejeon), and now I've returned home to Vancouver. I enjoy throwing frisbees, attempting muscle-ups, reading, attempting my hand at art, and the mental challenge of coding. This year I will become increasingly competent as a developer and look forward to finding a team to expedite that process.
            </p>
          </div>
          </div>
            </section>
            
          <section>
            <div class="container mx-auto p-5 bg-blue-600	bg-opacity-50">
              <div className="text-lg flex flex-col justify-center op">
                <button className="cursive text-4xl text-gray-100 hover:text-gray-900">
                    <a className="button" href="https://drive.google.com/file/d/1cColA806srPvtQYb3sdQXk8nh__JUKRz/view?usp=sharing" > Check out my resume here! :) 
                    </a>
                </button>
              </div>
            </div>
          </section>
      </div>
    </main>
  );
}

