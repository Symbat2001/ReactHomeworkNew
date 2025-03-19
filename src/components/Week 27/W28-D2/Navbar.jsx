import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
  return (
    <nav>
        <Link to="/">My Profile</Link>
        <Link to="/projects" >My Projects</Link>
        <Link to="/about">About me</Link>
    </nav>
  )
}
