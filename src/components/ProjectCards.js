import React  from 'react'
import Project from './Project.js'
import './projectCards.css' 

//gifs and images
import MiTienda from "../images/MiTienda.gif";
import Tweeter from "../images/Tweeter.gif";
import TiniestLittleApp from "../images/TiniestLittleApp.gif"

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
          <Project imgsrc={Tweeter} title="Twitter" description="Tweeter is a simple, single-page Twitter clone. It is the second project that is built during the Lighthouse Labs Web Development Bootcamp. Tweeter takes in the input of the user and prints it out, resembling Twitter in the process. Tweeter was built in order to practice HTML, CSS, JS, jQuery and Ajax front-end skills, along with NodeJS, Express and MongoDB back-end skills. Difficulties arose from inexperience and the use of new tools, the use of a tool to dynamically print the time of each tweet, for example." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/> 
        </div>
       </div>
      </div>
      <div className="container-fluid d-flex justify-content-center">
       <div className="row bg-gray-900 px-4">
          <div className="col-md-3">
          <Project imgsrc={Tweeter} title="Twitter" description="Tweeter is a simple, single-page Twitter clone. It is the second project that is built during the Lighthouse Labs Web Development Bootcamp. Tweeter takes in the input of the user and prints it out, resembling Twitter in the process. Tweeter was built in order to practice HTML, CSS, JS, jQuery and Ajax front-end skills, along with NodeJS, Express and MongoDB back-end skills. Difficulties arose from inexperience and the use of new tools, the use of a tool to dynamically print the time of each tweet, for example." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/>
        </div>
        <div className="col-md-3">
          <Project imgsrc={Tweeter} title="Twitter" description="Tweeter is a simple, single-page Twitter clone. It is the second project that is built during the Lighthouse Labs Web Development Bootcamp. Tweeter takes in the input of the user and prints it out, resembling Twitter in the process. Tweeter was built in order to practice HTML, CSS, JS, jQuery and Ajax front-end skills, along with NodeJS, Express and MongoDB back-end skills. Difficulties arose from inexperience and the use of new tools, the use of a tool to dynamically print the time of each tweet, for example." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/>
        </div>
        <div className="col-md-3">
          <Project imgsrc={Tweeter} title="Twitter" description="Tweeter is a simple, single-page Twitter clone. It is the second project that is built during the Lighthouse Labs Web Development Bootcamp. Tweeter takes in the input of the user and prints it out, resembling Twitter in the process. Tweeter was built in order to practice HTML, CSS, JS, jQuery and Ajax front-end skills, along with NodeJS, Express and MongoDB back-end skills. Difficulties arose from inexperience and the use of new tools, the use of a tool to dynamically print the time of each tweet, for example." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/>
        </div>
        <div className="col-md-3">
          <Project imgsrc={Tweeter} title="Twitter" description="Tweeter is a simple, single-page Twitter clone. It is the second project that is built during the Lighthouse Labs Web Development Bootcamp. Tweeter takes in the input of the user and prints it out, resembling Twitter in the process. Tweeter was built in order to practice HTML, CSS, JS, jQuery and Ajax front-end skills, along with NodeJS, Express and MongoDB back-end skills. Difficulties arose from inexperience and the use of new tools, the use of a tool to dynamically print the time of each tweet, for example." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/> 
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
