import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function MyProfile() {
    const profile = useNavigate
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [about, setAbout] = useState('')

    const handleClick = () =>{
      alert("Малимет сакталды")
    }

  return (
    <div>
      <h1>My Profile</h1>
      <div>
        <input type="text" placeholder="Атынызды енгизиниз" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Почтанызды енгизиниз" value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea value={about} onChange={(e) => setAbout(e.target.value)}>Озиниз туралы кыскаша акпарат</textarea>
      </div>
        <button onClick={handleClick}>Сактау</button>
        <button onClick={() => navigate('/projects')}>Go to My Projects</button>
    </div>
  )
}
