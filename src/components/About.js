import React from 'react';
import image from '../bg.jpg';

export default function Home() {
  return (
    <main className="relative">
      <img src={image} alt="background" className="absolute w-full" />
      <div className="lg:pt-20 container mx-auto relative">
        <section className=" ">
          <div class="container mx-auto p-5 bg-blue-600	bg-opacity-50">
          <div className="text-lg flex flex-col justify-center op">
            <h1 className="cursive text-6xl text-gray-300 mb-4 hover:text-gray-900">
              Hey there. Once again, I'm <span className="cursive text-6xl text-gray-100">Elliott</span>. Please recognize the two T's.
            </h1>
            <p className="cursive text-3xl text-gray-100 hover:text-gray-900">I am a Canadian man trying to evolve from Pinky to The Brain. A transformation that I hope will take place as I continually make progress and expand my knowledge of CSS, HTML, JavaScript, React, along with the other languages and frameworks that I know.
            </p>
            
            <br></br>
            
            <p className="cursive text-3xl text-gray-100 hover:text-gray-900">
            I've lived in Quebec (Montréal and Trois-Rivières), South Korea (Daejeon), and now I've returned home to Vancouver. I enjoy throwing frisbees, attempting muscle-ups, reading, attempting my hand at art, and the mental challenge of coding. I will become increasingly competent as a developer and look forward to finding a team to expedite that process.
            </p>
          </div>
          </div>
        </section>
      </div>
    </main>
  );
}