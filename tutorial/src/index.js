import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
// stateless functional component
function BookList() {
  return (
    <section>
      <Book/>
      </section>
  )
}
const Book = () =>{
  const title = 'The Blue Umbrella'
  const author = 'Ruskin Bond'

return <article className="book">
    <Image></Image>
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>
}  

const Image = () =>{
 return  <img src="https://images-eu.ssl-images-amazon.com/images/I/71JZ0neAP1L._AC_UL200_SR200,200_.jpg" alt="Book Cover" />
}


ReactDOM.render(<BookList /> , document.getElementById('root'))

