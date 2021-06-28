import React from 'react';
import ReactDom from 'react-dom';

// Nested Components, React Tools

// CSS
import './index.css';
function BookList() {
  return (
    <section>
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
    <article className='book'>
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};
const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg'
    alt=''
  />
);
const Title = () => <h1>I Love You to the Moon and Back</h1>;
const Author = () => <h4>Amelia Hepworth</h4>;
ReactDom.render(<BookList />, document.getElementById('root'));