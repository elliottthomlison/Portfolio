import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import './NavBar.css'
import Ripple from './Ripple.js'

// these are the links that will be available in the navbar
export default function NavBar() {
  return (
    
    <nav class="bg-gray-900 py-10">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <header class="flex items-center bg-gray-900 ">
    <div class="flex-1 flex justify-between items-center">
    <NavLink to="/" exact activeClassName="text-white" className="inflex-flex items-center py-2 px-2 text-blue-100 hover:text-gray-900 text-6xl font-bold cursive tracking-widest">
              <Ripple >Elliott's Corner</Ripple>
            </NavLink> 
    </div>

    <label for="menu-toggle" class="pointer-cursor md:hidden block">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 9.5H3M21 4.5H3M21 14.5H3M21 19.5H3"/></svg>
    </label>
    <input class="hidden" type="checkbox" id="menu-toggle" />

    <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
      <nav>
      <NavLink to="/project" exact activeClassName="text-white" className="inflex-flex items-center py-6 px-6 text-blue-100 hover:text-blue-900 text-4xl font-bold cursive tracking-widest">
              <Ripple >Projects</Ripple>
            </NavLink>        
            
            <NavLink to="/post" exact activeClassName="text-white" className="inflex-flex items-center py-6 px-6 text-blue-100 hover:text-blue-900 text-4xl font-bold cursive tracking-widest"> 
              <Ripple >Blog Posts</Ripple>
            </NavLink>
            
            <a id="resumeButton" className="no-underline button text-white inflex-flex items-center py-6 px-6 text-blue-100 hover:text-blue-900 text-4xl font-bold cursive tracking-widest">
              <Ripple >
            <td onClick={()=> window.open("https://drive.google.com/file/d/1ULhMdc-i-7YZMNFTAbuVqKMmD0xtnKcu/view?usp=sharing")}>Resume</td>
              </Ripple>
            </a>
            
            <a className="inflex-flex items-center py-6 px-6 text-blue-100 hover:text-blue-900 text-4xl font-bold cursive tracking-widest" href="mailto: elliott.thomlison@gmail.com">
              <Ripple>Contact Me</Ripple>
            </a>     
            <a className="inflex-flex items-center py-6 px-6 text-blue-100 hover:text-blue-900 text-4xl font-bold cursive tracking-widest">
              <SocialIcon url='https://medium.com/@elliottthomlison' className='mr-4' target='_blank' fgColor='#fff' style={{height: 50, width: 50}}/> 
              <SocialIcon url='https://www.linkedin.com/in/elliott-thomlison/' className='mr-4' target='_blank' fgColor='#fff' style={{height: 50, width: 50}}/>
              <SocialIcon url='https://github.com/elliottthomlison' className='mr-4' target='_blank' fgColor='#fff' style={{height: 50, width: 50}}/> 
              </a>
      </nav>
    </div>
  </header>
</div>
</nav>

    
  )
}