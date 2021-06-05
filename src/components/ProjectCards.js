import React  from 'react'
import Project from './Project.js'
import './projectCards.css' 

//gifs and images
import TiniestLittleApp from "../images/TiniestLittleApp.gif"
import Tweeter from "../images/Tweeter.gif"
import TapiocaLoca from "../images/TapiocaLoca.png"
import MiCasa from "../images/MiCasa.png"
import Interview from "../images/Interview.jpeg"
import Jungle from "../images/Jungle.png"
import MiTienda from "../images/MiTienda.gif"
import MiCine from "../images/MiCine.gif"
import Codewars from "../images/Codewars.png"

const ProjectCards = () => {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xl:gap-12 lg:gap-6 md:gap-6">
        {/* <h1 className="relative text-6xl text-blue-900 flex justify-center cursive pt-20 hover:text-gray-900"></h1>
        <h2 className="relative text-4xl text-gray-900 flex justify-center mb-12 pb-10 hover:text-gray-900"></h2>
        <h1 className="relative text-6xl text-blue-900 flex justify-center cursive pt-20 hover:text-gray-900"></h1>
        <h2 className="relative text-4xl text-gray-900 flex justify-center mb-12 pb-10 hover:text-gray-900"></h2> */}

          <div className="bg-gray-900 p-6 rounded">
            <Project imgsrc={TiniestLittleApp} title="Tiniest Little App" description="TiniestLittleApp is a multipage app that creates miniaturized urls." link="https://tinyurl.com/9xjjh93d" github="Check out the repository👈" class="bg-gray-900"/>
          </div>
          <div className="bg-gray-900 p-6 rounded">
            <Project imgsrc={Tweeter} title="Tweeter" description="Tweeter is a simple, single-page Twitter clone." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/>
          </div>
          <div className="bg-gray-900 p-6 rounded">
            <Project imgsrc={TapiocaLoca} title="Tapioca Loca" description="Tapioca Loca is a minimalist single-page app." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/>
          </div>
          <div className="bg-gray-900 p-6 rounded">
            <Project imgsrc={Interview} title="Interview Scheduler" description="Interview Scheduler is a React app that users can book and cancel interviews." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/> 
          </div>
          <div className="bg-gray-900  p-6 rounded">
            <Project imgsrc={Jungle} title="Jungle" description="Jungle is an e-commerce application built with Rails and Ruby on Rails." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/>
          </div>
          <div className="bg-gray-900  p-6 rounded">
            <Project imgsrc={MiCasa} title="MiCasa" description="MiCasa is a mobile app that helps individuals find a home to rent." link="https://tinyurl.com/tzrk9re6" github="Check out the repository👈"/>
          </div>
          <div className="bg-gray-900  p-6 rounded">  
            <Project imgsrc={MiTienda} title="MiTienda" description="MiTienda is an e-commerce app that allows users to shop." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/>
          </div>
          <div className="bg-gray-900   p-6 rounded"> 
            <Project imgsrc={MiCine} title="MiCine" description="MiCine is a movie-searching app where users can read and see ratings." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/> 
          </div>
          <div className="bg-gray-900 p-3 rounded">
            <Project imgsrc={Codewars} title="Codewars" description="Codewars contains solutions of problems that I solved." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/>
          </div>
          <div className="bg-white p-3 rounded">1</div>
          <div className="bg-white p-3 rounded">1</div>
          <div className="bg-white p-3 rounded">1</div>
          
        </div>
      </div>
    )
  }

export default ProjectCards
