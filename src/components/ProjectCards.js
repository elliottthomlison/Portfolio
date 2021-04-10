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
      <div class="flex flex-wrap -mx-5 overflow-hidden sm:-mx-5 md:-mx-5 lg:-mx-5 xl:-mx-5">

  <div class="my-5 px-5 w-1/3 overflow-hidden sm:my-5 sm:px-5 sm:w-1/3 md:my-5 md:px-5 md:w-1/3 lg:my-5 lg:px-5 lg:w-1/3 xl:my-5 xl:px-5 xl:w-1/3">
  <Project imgsrc={TiniestLittleApp} title="Tiniest Little App" description="TiniestLittleApp is a multipage app that creates miniaturized urls." link="https://tinyurl.com/9xjjh93d" github="Check out the repository👈"/>
  </div>

  <div class="my-5 px-5 w-1/3 overflow-hidden sm:my-5 sm:px-5 sm:w-1/3 md:my-5 md:px-5 md:w-1/3 lg:my-5 lg:px-5 lg:w-1/3 xl:my-5 xl:px-5 xl:w-1/3"> <Project imgsrc={Tweeter} title="Tweeter" description="Tweeter is a simple, single-page Twitter clone." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/>
  </div>

  <div class="my-5 px-5 w-1/3 overflow-hidden sm:my-5 sm:px-5 sm:w-1/3 md:my-5 md:px-5 md:w-1/3 lg:my-5 lg:px-5 lg:w-1/3 xl:my-5 xl:px-5 xl:w-1/3"> <Project imgsrc={TapiocaLoca} title="Tapioca Loca" description="Tapioca Loca is a minimalist single-page app." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/>
  </div>

  <div class="my-5 px-5 w-1/3 overflow-hidden sm:my-5 sm:px-5 sm:w-1/3 md:my-5 md:px-5 md:w-1/3 lg:my-5 lg:px-5 lg:w-1/3 xl:my-5 xl:px-5 xl:w-1/3"> <Project imgsrc={Interview} title="Interview Scheduler" description="Interview Scheduler is a React app that users can book and cancel interviews." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/> 
  </div>

  <div class="my-5 px-5 w-1/3 overflow-hidden sm:my-5 sm:px-5 sm:w-1/3 md:my-5 md:px-5 md:w-1/3 lg:my-5 lg:px-5 lg:w-1/3 xl:my-5 xl:px-5 xl:w-1/3">
  </div>

  <div class="my-5 px-5 w-1/3 overflow-hidden sm:my-5 sm:px-5 sm:w-1/3 md:my-5 md:px-5 md:w-1/3 lg:my-5 lg:px-5 lg:w-1/3 xl:my-5 xl:px-5 xl:w-1/3">
  </div>

  <div class="my-5 px-5 w-1/3 overflow-hidden sm:my-5 sm:px-5 sm:w-1/3 md:my-5 md:px-5 md:w-1/3 lg:my-5 lg:px-5 lg:w-1/3 xl:my-5 xl:px-5 xl:w-1/3">
  </div>

  <div class="my-5 px-5 w-1/3 overflow-hidden sm:my-5 sm:px-5 sm:w-1/3 md:my-5 md:px-5 md:w-1/3 lg:my-5 lg:px-5 lg:w-1/3 xl:my-5 xl:px-5 xl:w-1/3">
  </div>

  <div class="my-5 px-5 w-1/3 overflow-hidden sm:my-5 sm:px-5 sm:w-1/3 md:my-5 md:px-5 md:w-1/3 lg:my-5 lg:px-5 lg:w-1/3 xl:my-5 xl:px-5 xl:w-1/3">
  </div>

  <div class="my-5 px-5 w-1/3 overflow-hidden sm:my-5 sm:px-5 sm:w-1/3 md:my-5 md:px-5 md:w-1/3 lg:my-5 lg:px-5 lg:w-1/3 xl:my-5 xl:px-5 xl:w-1/3">
  </div>

  <div class="my-5 px-5 w-1/3 overflow-hidden sm:my-5 sm:px-5 sm:w-1/3 md:my-5 md:px-5 md:w-1/3 lg:my-5 lg:px-5 lg:w-1/3 xl:my-5 xl:px-5 xl:w-1/3">
  </div>

  <div class="my-5 px-5 w-1/3 overflow-hidden sm:my-5 sm:px-5 sm:w-1/3 md:my-5 md:px-5 md:w-1/3 lg:my-5 lg:px-5 lg:w-1/3 xl:my-5 xl:px-5 xl:w-1/3">
  </div>

</div>
    )
  }

export default ProjectCards
