import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import './NavBar.css'
import Ripple from './Ripple.js';

// these are the links that will be available in the navbar
export default function NavBar() {
  return (
    // <header classNameName="bg-blue-600">
<div>
  <nav className="bg-blue-600 py-4">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            <NavLink to="/" exact activeClassName="text-white" className="inflex-flex items-center py-1 px-6 mr-4 text-blue-100 hover:text-gray-900 text-5xl font-bold cursive tracking-widest">
              <Ripple classes="btn">Elliott's Corner</Ripple>
            </NavLink>          
            <NavLink to="/post" exact activeClassName="text-white" className="inflex-flex items-center py-6 px-6 mr-4 text-blue-100 hover:text-gray-900 text-4xl font-bold cursive tracking-widest"> 
              <Ripple classes="btn">Blog Posts</Ripple>
            </NavLink>
            <NavLink to="/project" exact activeClassName="text-white" className="inflex-flex items-center py-6 px-6 mr-4 text-blue-100 hover:text-gray-900 text-4xl font-bold cursive tracking-widest">
              <Ripple classes="btn">Projects</Ripple>
            </NavLink>         
            </div>
          </div>
        </div>
        
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
          <p className="inflex-flex items-center py-6 px-6 mr-4 text-blue-100 hover:text-gray-900 text-4xl font-bold cursive tracking-widest">
              <a href="mailto: elliott.thomlison@gmail.com">Contact Me</a>
              </p>
              <div className="ml-3 relative">
              <div>                   
              <SocialIcon url='https://codepen.io/elliottthomlison' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}}/> 
              <SocialIcon url='https://medium.com/@elliottthomlison' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}}/> 
              <SocialIcon url='https://www.linkedin.com/in/elliott-thomlison/' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}}/>
              <SocialIcon url='https://github.com/elliottthomlison' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}}/> 
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</div>

    
  )
}