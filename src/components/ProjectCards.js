import React  from 'react'
import Project from './Project.js'
import './projectCards.css' 
import MiTienda from "../images/MiTienda.gif";

const ProjectCards = () => {
    return (
      <section>
        <h1 className="relative text-6xl text-blue-900 flex justify-center cursive pt-20 hover:text-gray-900"></h1>
        <h2 className="relative text-4xl text-gray-900 flex justify-center hover:text-gray-900">
        </h2>
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-3">
          <Project imgsrc={MiTienda} title="Console" description="Test" github="Test"/>
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
