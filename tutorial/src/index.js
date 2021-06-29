import React from 'react'
import ReactDOM from 'react-dom'

// stateless functional component
function Greeting() {
  return (
    <div>
      <Person/>
      <h4>This is not my first JSX</h4>
      <ul>
        <li>
          <a href="#main">Sparta</a>
        </li>
        <li>
          <Message/>
        </li>
        <li>
          <Kya/>
        </li>
      </ul>
    </div>
  )
}
const Person = () =>{ return <h2>Jon Pierce</h2>}  
const Message = () => <p>Gali gali me shor hai</p>  
const Kya = () => <p>Pierce bhai chor hai</p>  

ReactDOM.render(<Greeting /> , document.getElementById('root'))

