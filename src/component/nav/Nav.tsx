import React from 'react'
import {Link} from 'react-router'

const Nav: React.FC<{}> = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mark Teoh</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-400 transition">About</Link>
          </li>
          <li>
            <Link to="/experience" className="hover:text-gray-400 transition">Experience</Link>
          </li>
          <li>
            <Link to="/diving" className="hover:text-gray-400 transition">Diving</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400 transition">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;