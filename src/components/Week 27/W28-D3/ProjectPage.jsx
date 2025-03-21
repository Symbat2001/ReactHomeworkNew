import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function ProjectPage() {
    const navigate = useNavigate()

    const projects = [
        {
          id: 1,
          title: "Жоба 1",
          description: "Бұл бірінші жобаның сипаттамасы."
        },
        {
          id: 2,
          title: "Жоба 2",
          description: "Бұл екінші жобаның сипаттамасы."
        },
        {
          id: 3,
          title: "Жоба 3",
          description: "Бұл үшінші жобаның сипаттамасы."
        }
      ];
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        
      </ul>
    </div>
  )
} 
