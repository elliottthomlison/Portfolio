import React  from 'react'
import Project from './Project.js'
import './projectCards.css' 

//gifs and images
import TiniestLittleApp from "../images/TiniestLittleApp.gif"
import Tweeter from "../images/Tweeter.gif";
import TapiocaLoca from "../images/TapiocaLoca.png"
import MiCasa from "../images/MiCasa.png"
import Interview from "../images/Interview.jpeg"
import Jungle from "../images/Jungle.png"
import MiTienda from "../images/MiTienda.gif";

const ProjectCards = () => {
    return (
      <section>
        <h1 className="relative text-6xl text-blue-900 flex justify-center cursive pt-20 hover:text-gray-900"></h1>
        <h2 className="relative text-4xl text-gray-900 flex justify-center hover:text-gray-900">
        </h2>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row bg-gray-900 px-4">
          <div className="col-md-3">
          <Project imgsrc={TiniestLittleApp} title="TiniestLittleApp" description="TiniestLittleApp is a multipage app that creates miniaturized urls. It is the first project made during the Lighthouse Labs Web Development Bootcamp. It is a project that allows one to register, login, and create, delete, and edit the urls that were created. It was created in order to practice using EJS, JS, Express, and NodeJS. It was difficult to comprehend the dynamics of the project initially because of the lack of familiarity with the concepts and implementation steps." link="https://tinyurl.com/9xjjh93d" github="Check out the repository👈"/>
        </div>
        <div className="col-md-3">
          <Project imgsrc={Tweeter} title="Twitter" description="Tweeter is a simple, single-page Twitter clone. It is the second project that is built during the Lighthouse Labs Web Development Bootcamp. Tweeter takes in the input of the user and prints it out, resembling Twitter in the process. Tweeter was built in order to practice HTML, CSS, JS, jQuery and Ajax front-end skills, along with NodeJS, Express and MongoDB back-end skills. Difficulties arose from inexperience and the use of new tools, the use of a tool to dynamically print the time of each tweet, for example." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/>
        </div>
        <div className="col-md-3">
          <Project imgsrc={TapiocaLoca} title="Tapioca Loca" description="Tweeter is a simple, single-page Twitter clone. It is the second project that is built during the Lighthouse Labs Web Development Bootcamp. Tweeter takes in the input of the user and prints it out, resembling Twitter in the process. Tweeter was built in order to practice HTML, CSS, JS, jQuery and Ajax front-end skills, along with NodeJS, Express and MongoDB back-end skills. Difficulties arose from inexperience and the use of new tools, the use of a tool to dynamically print the time of each tweet, for example." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/>
        </div>
        <div className="col-md-3">
          <Project imgsrc={Interview} title="Interview" description="Tweeter is a simple, single-page Twitter clone. It is the second project that is built during the Lighthouse Labs Web Development Bootcamp. Tweeter takes in the input of the user and prints it out, resembling Twitter in the process. Tweeter was built in order to practice HTML, CSS, JS, jQuery and Ajax front-end skills, along with NodeJS, Express and MongoDB back-end skills. Difficulties arose from inexperience and the use of new tools, the use of a tool to dynamically print the time of each tweet, for example." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/> 
        </div>
       </div>
      </div>
      <div className="container-fluid d-flex justify-content-center">
       <div className="row bg-gray-900 px-4">
          <div className="col-md-3">
          <Project imgsrc={Jungle} title="Jungle" description="Tweeter is a simple, single-page Twitter clone. It is the second project that is built during the Lighthouse Labs Web Development Bootcamp. Tweeter takes in the input of the user and prints it out, resembling Twitter in the process. Tweeter was built in order to practice HTML, CSS, JS, jQuery and Ajax front-end skills, along with NodeJS, Express and MongoDB back-end skills. Difficulties arose from inexperience and the use of new tools, the use of a tool to dynamically print the time of each tweet, for example." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/>
        </div>
        <div className="col-md-3">
          <Project imgsrc={MiCasa} title="MiCasa" description="MiCasa is a mobile app that helps individuals looking to rent to find available units without having to constantly check rental websites. It was is final project that was built during the Lighthouse Labs Web Development Bootcamp. A user sets their preferences and what they're looking for in the desired property, then once they pass that location their receive a cellular notification. MiCasa was built using the PERN stack (Postgre, Express, React, and NodeJS. It aims to help the average person find an appropriate property more easily. This is achieved through the user simply setting the aforementioned preferences to what they look for in a rental, and then passively receiving pings when such properties are found. There were backend specific difficulties during the creation of the app, yet the frontend presented challenges and learning experiences as well." link="https://tinyurl.com/tzrk9re6" github="Check out the repository👈"/>
        </div>
        <div className="col-md-3">
          <Project imgsrc={MiTienda} title="MiTienda" description="Tweeter is a simple, single-page Twitter clone. It is the second project that is built during the Lighthouse Labs Web Development Bootcamp. Tweeter takes in the input of the user and prints it out, resembling Twitter in the process. Tweeter was built in order to practice HTML, CSS, JS, jQuery and Ajax front-end skills, along with NodeJS, Express and MongoDB back-end skills. Difficulties arose from inexperience and the use of new tools, the use of a tool to dynamically print the time of each tweet, for example." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/>
        </div>
        <div className="col-md-3">
          <Project imgsrc={MiCine} title="MiCine" description="Tweeter is a simple, single-page Twitter clone. It is the second project that is built during the Lighthouse Labs Web Development Bootcamp. Tweeter takes in the input of the user and prints it out, resembling Twitter in the process. Tweeter was built in order to practice HTML, CSS, JS, jQuery and Ajax front-end skills, along with NodeJS, Express and MongoDB back-end skills. Difficulties arose from inexperience and the use of new tools, the use of a tool to dynamically print the time of each tweet, for example." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/> 
        </div>
       </div>
      </div>
       {/* <div className="container-fluid d-flex justify-content-center">
       <div className="row">
          <div className="col-md-3">
          <Project imgsrc={MiTienda} title="Console"/>
        </div>
        <div className="col-md-3">
          <Project imgsrc={MiTienda} title="Console"/>
        </div>
        <div className="col-md-3">
          <Project imgsrc={MiTienda} title="Console"/>
        </div>
        <div className="col-md-3">
          <Project imgsrc={MiTienda} title="Console"/> 
        </div>  */}
       {/* </div> 
      </div> */}
      </section>
    )
  }

export default ProjectCards
