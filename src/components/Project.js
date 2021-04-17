import React from 'react'
import './projectCards.css' 

const Project = props =>{

  return (
    <div className="card text-center">
      <div className="overflow">
        <a href={props.link}>
          <img src={props.imgsrc} target="_blank" className="card-img-top" />
        </a>
      </div>
     <div className="card-body text-dark">
       <h4 className="card-title">{props.title}</h4>
       <p className="card-text text-secondary">{props.description}
       </p>
       <a href={props.link} target="_blank" className="btn btn-outline-dark">Check out the repository👈</a>
     </div>
    </div>

  )
}


export default Project