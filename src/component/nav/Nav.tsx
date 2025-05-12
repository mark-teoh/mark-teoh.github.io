import React, { useState } from 'react'
import { Link } from 'react-router'

const Nav: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mark Teoh</h1>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul className={`flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-6 absolute md:static bg-gray-800 left-0 right-0 top-16 md:top-auto z-10 md:z-auto p-4 md:p-0 transition-all duration-300 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
          <li>
            <Link to="/" className="hover:text-gray-400 transition block">About</Link>
          </li>
          <li>
            <Link to="/experience" className="hover:text-gray-400 transition block">Experience</Link>
          </li>
          <li>
            <Link to="/diving" className="hover:text-gray-400 transition block">Diving</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400 transition block">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
