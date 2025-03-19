import React, {useState} from 'react'

export default function Login() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [register, setRegister] = useState(false);
  return (
    <div
        style={{textAlign: "center",
                marginTop: "50px",
        }}    
    >
      {loggedIn}
    </div>
  )
}
