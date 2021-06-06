import React from 'react'
import './projectCards.css' 

const Project = props =>{

  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={props.imgsrc} className="card-img-top"/>
      </div>
     <div className="card-body text-dark">
       <h4 className="card-title">{props.title}</h4>
       <p className="card-text text-secondary">{props.description}
       </p>
       <a href={props.stuff} target="_blank"   className="btn btn-outline-success">Check out the repository👈</a>
     </div>
    </div>

  )
}


export default Project