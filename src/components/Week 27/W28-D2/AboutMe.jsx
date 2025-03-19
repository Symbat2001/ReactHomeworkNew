import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function AboutMe() {
    const navigate = useNavigate();
  return (
    <div>
      <h1>About me</h1>
      <p>Озим туралы кыскаша акпарат</p>
      <button onClick={() => navigate('/projects')}>Go to my Profile</button>
    </div>
  )
}
