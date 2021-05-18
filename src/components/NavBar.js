import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

// these are the links that will be available in the navbar
export default function NavBar() {
  return (
    <header className="bg-blue-600">
      {/* mx-auto / flex = puts things in the div / justify-between = spacing between /  */}
      <div className="container m-0.5 flex justify-between">
        <nav className="flex">
          {/* py = padding on the y axis */}
          <NavLink to="/" exact activeClassName="text-white" className="inflex-flex items-center py-1 px-6 mr-4 text-blue-100 hover:text-gray-900 text-5xl font-bold cursive tracking-widest">
            Elliott's Corner
          </NavLink>

          <NavLink to="/post" exact activeClassName="text-white" className="inflex-flex items-center py-6 px-6 mr-4 text-blue-100 hover:text-gray-900 text-4xl font-bold cursive tracking-widest">
            
            Blog Posts
          </NavLink>

          <NavLink to="/project" exact activeClassName="text-white" className="inflex-flex items-center py-6 px-6 mr-4 text-blue-100 hover:text-gray-900 text-4xl font-bold cursive tracking-widest">
            Projects
          </NavLink>

          <NavLink to="/about" exact activeClassName="text-white" className="inflex-flex items-center py-6 px-6 text-blue-100 hover:text-gray-900 text-4xl font-bold cursive tracking-widest">
            About Me!
          </NavLink>
        </nav>
        {/* use a npm download (react-social-icons) to display these images - absolute top-0 right-0 h-16 w-16*/}
        <div className="sm:self-center sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0 hidden">
        
        <SocialIcon url='https://www.linkedin.com/in/elliott-thomlison/' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}}/>
        <SocialIcon url='https://github.com/elliottthomlison' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}}/> 
        <SocialIcon url='https://medium.com/@elliottthomlison' className='mr-4' target='_blank' fgColor='#fff' style={{height: 35, width: 35}}/>
        
      </div>
      </div>
      
    </header>
  )
}