import React, {useState, useEffect} from 'react'
import "../styles/App.css"
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {BOOK_API_URL} from '../API'

const BookDetails = () => {

  const [book , setBook] = useState({});
  const {id} = useParams();
  
  useEffect(()=> {
    axios.get(`${BOOK_API_URL}/${id}`).then((res)=>{
      setBook(res.data);
    }).catch((err)=>console.log(err));
  },[id]);
  
  return (
    <div className='book-details'>
<h2>Name: {book.name}</h2>
<p>Author: {book.authors}</p>
<p>Country: {book.country}</p>
<p>ISBN: {book.isbn}</p>
<p>Pages: {book.numberOfPages}</p>
<p>Publisher: {book.publisher}</p>

    </div>
  )
}

export default BookDetails