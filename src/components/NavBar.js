import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

// these are the links that will be available in the navbar
export default function NavBar() {
  return (
    <header className="bg-red-600">
      {/* mx-auto / flex = puts things in the div / justify-between = spacing between /  */}
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          {/* py = padding on the y axis */}
          <NavLink to="/" exact activeClassName="text-white" className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
            Test
          </NavLink>

          <NavLink to="/post" className="inflex-flex items-center py-3 px-3 my-6 text-red-100 hover:text-green-800" activeClassName="text-red-100 bg-red-700">
            
            Blog Posts
          </NavLink>

          <NavLink to="/project" className="inflex-flex items-center py-3 px-3 my-6 text-red-100 hover:text-green-800" activeClassName="text-red-100 bg-red-700">
            Projects
          </NavLink>

          <NavLink to="/about" className="inflex-flex items-center py-3 px-3 my-6 text-red-100 hover:text-green-800" activeClassName="text-red-100 bg-red-700">
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon url='https://www.linkedin.com/in/elliott-thomlison/' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}}/>
          <SocialIcon url='https://github.com/elliottthomlison' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}}/> 
          <SocialIcon url='https://medium.com/@elliottthomlison' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}}/>
        </div>
      </div>
    </header>
  
  )
}