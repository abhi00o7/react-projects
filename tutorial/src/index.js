import React from 'react'
import ReactDOM from 'react-dom'

function Greeting() {
  return (
    <div>
      <h4>This is not my first JSX</h4>
    </div>
  )
}

ReactDOM.render(<Greeting />, document.getElementById('root'))

