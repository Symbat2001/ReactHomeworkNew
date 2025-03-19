import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function MyProjects() {
    const navigate = useNavigate()
  return (
    <div>
      <h1>My Projects</h1>
      <p>Project 1: Description of Project 1</p>
      <p>Project 2: Description of Project 2</p>
      <p>Project 3: Description of Project 3</p>
      <button onClick={() => navigate('/AboutMe')}>Go to About Page</button>
    </div>
  )
}
