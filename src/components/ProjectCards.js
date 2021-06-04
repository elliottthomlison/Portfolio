import React  from 'react'
import Project from './Project.js'
import './projectCards.css' 

//gifs and images
import MiTienda from "../images/MiTienda.gif";
import Tweeter from "../images/Tweeter.gif";

const ProjectCards = () => {
    return (
      <section>
        <h1 className="relative text-6xl text-blue-900 flex justify-center cursive pt-20 hover:text-gray-900"></h1>
        <h2 className="relative text-4xl text-gray-900 flex justify-center hover:text-gray-900">
        </h2>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-3">
          <Project imgsrc={MiTienda} title="Console" description="Test" github="https://github.com/elliottthomlison/MiTienda👈"/>
        </div>
        <div className="col-md-3">
          <Project imgsrc={Tweeter} title="Twitter" description="Tweeter is a simple, single-page Twitter clone. It is the second project that is built during the Lighthouse Labs Web Development Bootcamp. Tweeter takes in the input of the user and prints it out, resembling Twitter in the process. Tweeter was built in order to practice HTML, CSS, JS, jQuery and Ajax front-end skills, along with NodeJS, Express and MongoDB back-end skills. Difficulties arose from inexperience and the use of new tools, the use of a tool to dynamically print the time of each tweet, for example." github="https://tinyurl.com/dadzmpec👈"/>
        </div>
        <div className="col-md-3">
          <Project imgsrc={MiTienda} title="Console"/>
        </div>
        <div className="col-md-3">
          <Project imgsrc={MiTienda} title="Console"/> 
        </div>
       </div>
      </div>
      <div className="container-fluid d-flex justify-content-center">
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
        </div>
       </div>
      </div>
      <div className="container-fluid d-flex justify-content-center">
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
        </div>
       </div> 
      </div>
      </section>
    )
  }

export default ProjectCards
