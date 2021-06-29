import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
// stateless functional component
function BookList() {
  return (
    <section>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
   
    </section>
  )
}
const Book = () =>{
  return <article>
    <Image></Image>
    <Title/>
    <Author/>
  </article>
}  

const Image = () =>{
 return  <img src="https://images-eu.ssl-images-amazon.com/images/I/71JZ0neAP1L._AC_UL200_SR200,200_.jpg" alt="Book Cover" />
}

const Title = () =>{
  return <h1>
  The Blue Umbrella
</h1>
}
const Author = () => {
  return <h4>Ruskin Bond</h4>
}

ReactDOM.render(<BookList /> , document.getElementById('root'))

