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
      <main>
  
  <section>
      <h1></h1>
        <h2></h2>
        <div class="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4">            <div className="bg-gray-900">
          <Project imgsrc={TiniestLittleApp} title="Tiniest Little App" description="TiniestLittleApp is a multipage app that creates miniaturized urls." link="https://tinyurl.com/9xjjh93d" github="Check out the repository👈"/>
        </div>
        <div className="bg-gray-900">
          <Project imgsrc={Tweeter} title="Tweeter" description="Tweeter is a simple, single-page Twitter clone." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/>
        </div>
        <div className="py-10 px-10 bg-gray-900">
          <Project imgsrc={TapiocaLoca} title="Tapioca Loca" description="Tapioca Loca is a minimalist single-page app." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/>
        </div>
        {/* <div>
          <Project imgsrc={Interview} title="Interview Scheduler" description="Interview Scheduler is a React app that users can book and cancel interviews." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/> 
        </div> */}
       </div>
      <div className="container-fluid d-flex justify-content-center">
       <div className="row bg-gray-900 px-4">
          <div className="col-md-3 py-5">
          <Project imgsrc={Jungle} title="Jungle" description="Jungle is a mini e-commerce application built with Rails and Ruby on Rails." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/>
        </div>
        <div className="col-md-3 py-5">
          <Project imgsrc={MiCasa} title="MiCasa" description="MiCasa is a mobile app that helps individuals find a home to rent." link="https://tinyurl.com/tzrk9re6" github="Check out the repository👈"/>
        </div>
        <div className="col-md-3 py-5">
          <Project imgsrc={MiTienda} title="MiTienda" description="MiTienda is an e-commerce app that allows users to shop." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/>
        </div>
        <div className="col-md-3 py-5">
          <Project imgsrc={MiCine} title="MiCine" description="MiCine is a movie-searching app where users can read and see ratings." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/> 
        </div>
       </div>
      </div>
      <div className="container-fluid d-flex justify-content-center">
       <div className="row bg-gray-900 px-4">
          <div className="col-md-3">
          <Project imgsrc={Codewars} title="Codewars" description="Codewars contains solutions of problems that I solved." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/>
        </div>
        {/* <div className="col-md-3">
          <Project imgsrc={ReactProjects} title="React Projects" description="Tweeter is a simple, single-page Twitter clone. It is the second project that is built during the Lighthouse Labs Web Development Bootcamp. Tweeter takes in the input of the user and prints it out, resembling Twitter in the process. Tweeter was built in order to practice HTML, CSS, JS, jQuery and Ajax front-end skills, along with NodeJS, Express and MongoDB back-end skills. Difficulties arose from inexperience and the use of new tools, the use of a tool to dynamically print the time of each tweet, for example." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/>
        </div>
        <div className="col-md-3">
          <Project imgsrc={DataValidationForms} title="Data Validation Forms" description="Tapioca Loca is a minimalist single-page app that allows restaurant clients to order from a restaurant's website. Afterwards, the client will receive a confirmation text to inform them of when it will be ready. It is the third project that was built during the Lighthouse Labs Web Development Bootcamp. Tapioca Loca was built using HTML, CSS, JS, JQuery, AJAX, and PostgreSQL. Difficulites and challenges arose throughout the project, yet the issues were resolved. The app proved an useful project to teach all three participants further how to build and troubleshoot." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/>
        </div>
        <div className="col-md-3">
          <Project imgsrc={JavascriptProjects} title="JavaScript Projects" description="Interview Scheduler is a React application that allows users to book and cancel interviews. The app allows the user to book, cancel, edit, and delete appointments. The user can select interview time slots and select the interviewer of their choosing. It is the fourth project that is built during the Lighthouse Labs Web Development Bootcamp. It was built through the use of React, Storybook, and the use of a scheduler-api. Difficulties and challenges arose because of my initial unfamilarity of React." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/> 
        </div>
       </div>
      </div>
      <div className="container-fluid d-flex justify-content-center">
       <div className="row bg-gray-900 px-4">
          <div className="col-md-3">
          <Project imgsrc={YelpClone} title="Yelp Clone" description="This repository contains my progress on Codewars and can be seen here: https://www.codewars.com/users/elliottthomlison. The challenges and their solutions are placed into Anki, the flashcard app, after solving the problem in order to review and cement the approach taken to solve the problems." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/>
        </div>
        <div className="col-md-3">
          <Project imgsrc={InstagramClone} title="Instagram Clone" description="Tweeter is a simple, single-page Twitter clone. It is the second project that is built during the Lighthouse Labs Web Development Bootcamp. Tweeter takes in the input of the user and prints it out, resembling Twitter in the process. Tweeter was built in order to practice HTML, CSS, JS, jQuery and Ajax front-end skills, along with NodeJS, Express and MongoDB back-end skills. Difficulties arose from inexperience and the use of new tools, the use of a tool to dynamically print the time of each tweet, for example." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/>
        </div>
        <div className="col-md-3">
          <Project imgsrc={Friends} title="Friends" description="Tapioca Loca is a minimalist single-page app that allows restaurant clients to order from a restaurant's website. Afterwards, the client will receive a confirmation text to inform them of when it will be ready. It is the third project that was built during the Lighthouse Labs Web Development Bootcamp. Tapioca Loca was built using HTML, CSS, JS, JQuery, AJAX, and PostgreSQL. Difficulites and challenges arose throughout the project, yet the issues were resolved. The app proved an useful project to teach all three participants further how to build and troubleshoot." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/>
        </div>
        {/* <div className="col-md-3">
          <Project imgsrc={JavascriptProjects} title="JavaScript Projects" description="Interview Scheduler is a React application that allows users to book and cancel interviews. The app allows the user to book, cancel, edit, and delete appointments. The user can select interview time slots and select the interviewer of their choosing. It is the fourth project that is built during the Lighthouse Labs Web Development Bootcamp. It was built through the use of React, Storybook, and the use of a scheduler-api. Difficulties and challenges arose because of my initial unfamilarity of React." link="https://tinyurl.com/dadzmpec" github="Check out the repository👈"/> 
        </div> */}
       </div>
      </div>
      </section> 
      </main>
    )
  }

export default ProjectCards
