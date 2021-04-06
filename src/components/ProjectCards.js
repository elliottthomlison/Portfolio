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
<div class="md:flex content-center flex-wrap -mx-2 p-3 bg-grey rounded shadow-lg">
      <div class="md:flex md:w-1/2 lg:w-1/3 px-2 py-2">
        <div class="md:flex-1 p-4 rounded shadow-lg bg-white border-b border-r border-grey-dark">
          <p>Edison bulb poke etsy brunch, freegan lumbersexual tacos. Activated charcoal mustache small batch thundercats vexillologist poke meh snackwave. Biodiesel photo booth cardigan heirloom normcore taiyaki palo santo yuccie unicorn swag street art kitsch seitan raclette.</p>
        </div>
      </div>
      <div class="md:flex md:w-1/2 lg:w-1/3 px-2 py-2">
        <div class="md:flex-1 p-4 rounded shadow-lg bg-white border-b border-r border-grey-dark">
          <p>Chambray gochujang activated charcoal seitan etsy. Williamsburg tattooed intelligentsia shoreditch keytar. Paleo gochujang copper mug.</p>
        </div>
      </div>
      <div class="md:flex md:w-1/2 lg:w-1/3 px-2 py-2">
        <div class="md:flex-1 p-4 rounded shadow-lg bg-white border-b border-r border-grey-dark">
          <p>90s vape pork belly gastropub, meh cold-pressed microdosing fam yuccie cronut brunch.</p>
        </div>
      </div>
      <div class="md:flex md:w-1/2 lg:w-1/3 px-2 py-2">
        <div class="md:flex-1 p-4 rounded shadow-lg bg-white border-b border-r border-grey-dark">
          <p>Squid palo santo shaman, crucifix occupy twee thundercats.</p>
        </div>
      </div>
      <div class="md:flex md:w-1/2 lg:w-1/3 px-2 py-2">
        <div class="md:flex-1 p-4 rounded shadow-lg bg-white border-b border-r border-grey-dark">
          <p>Pour-over ennui twee man braid kogi. Forage man braid offal pickled tumblr kickstarter. Cray vaporware locavore vexillologist, kitsch la croix man bun.</p>
        </div>
      </div>
      <div class="md:flex md:w-1/2 lg:w-1/3 px-2 py-2">
        <div class="md:flex-1 p-4 rounded shadow-lg bg-white border-b border-r border-grey-dark">
          <p class="mb-4">Vexillologist glossier venmo prism mixtape shaman. Before they sold out cronut raw denim prism lomo mixtape echo park kitsch hella vape aesthetic hot chicken freegan. Normcore 8-bit chartreuse, austin shoreditch single-origin coffee tofu pinterest iPhone franzen ugh mixtape vape brooklyn.</p>
          <p>Cardigan copper mug narwhal, fixie cronut four dollar toast next level viral pork belly shabby chic small batch DIY brooklyn yuccie tumeric. Irony poutine health goth coloring book.</p>
        </div>
      </div>
    </div>
    )
  }

export default ProjectCards
