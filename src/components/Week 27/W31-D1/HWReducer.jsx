import React, { useReducer } from 'react'


const initialState = {
    current: 'red',
    textColor: 'black'
}


function reduce(state,action) {
    switch (action.type) {
        case 'white':
            return{
                ...state,
                current: 'white',
                textColor: 'black'
            }
        case 'black':
            return{
                ...state,
                current: 'black',
                textColor: 'white'
            }
        case 'blue':
            return{
                ...state,
                current: 'blue',
                textColor: 'white'

            }
    
        default:
            return state;
            
    }
}

export default function HWReducer() {
    const [state, dispatch] = useReducer(reduce, initialState)
  return (
    <div style={{
        background: state.current, 
        color: state.textColor, 
        height:'100vh', 
        width:'100vw', 
        padding: '50px', 
        textAlign: 'center' 
        
    }}>
        <h2>Current theme: {state.current}</h2>
      <button onClick={() => dispatch({ type: 'white' })} style={{backgroundColor: state.current, color: state.textColor}}>Ак тус</button>
      <button onClick={() => dispatch({ type: 'black' })} style={{backgroundColor: state.current, color: state.textColor}}>Кара тус</button>
      <button onClick={() => dispatch({ type: 'blue' })} style={{backgroundColor: state.current, color: state.textColor}}>Кок тус</button>
    </div>
  )
}
