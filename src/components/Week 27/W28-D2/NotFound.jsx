import React, {useEffect} from 'react'
import { useNavigate} from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate()

    useEffect(()=>{
        navigate('/about')
    },[navigate])

  return (
    <div>
      <h1>404-Not Found</h1>
      <p></p>
    </div>
  )
}
