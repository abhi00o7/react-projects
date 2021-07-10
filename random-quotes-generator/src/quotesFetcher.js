import React,{useState, useEffect} from 'react'

function FetchQuotes(){

    const [quote,setQuote] = useState('')
    const [loading,setLoading] = useState('')
    const [author,setAuthor] = useState('')

    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/abhi00o7/hindi-quotes-web-crawler/main/hindiQuotes.json')
            .then(res => res.json())
            .then(data =>{ 
                console.log(data)
                setQuote(data.quotes[0].quote)
                setAuthor(data.quotes[0].author)
            }
                )
    },[])
    return (
    <>
    <h1>
        {quote}
    </h1>
    <p>
       - {author}
    </p>
    </>)
}

export default FetchQuotes