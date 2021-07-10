import React,{useState, useEffect} from 'react'

function FetchQuotes(){

    const [quote,setQuote] = useState('')
    // const [loading,setLoading] = useState('')
    const [author,setAuthor] = useState('')
    let random = Math.floor(Math.random() * 99)
    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/abhi00o7/hindi-quotes-web-crawler/main/hindiQuotes.json')
            .then(res => res.json())
            .then(data =>{ 
                console.log(data)
                setQuote(data.quotes[random].quote)
                setAuthor(data.quotes[random].author)
            }
                )
    },[])
    return (
    <>
    <p>
       - {author} -
    </p>
    <h1 className="hindiFonts">
        {quote}
    </h1>
    </>)
}

export default FetchQuotes