import React, { useState, useEffect } from "react";
import { BOOK_API_URL } from "../API";
import axios from "axios";
import "../styles/App.css";
import { useAppContext } from "./context/appContext";
import { useNavigate } from "react-router-dom";


const BookList = () => {
  const [books, setBooks] = useState([]);

  const { favourites, addToFavourites, removeFavourites } = useAppContext();

  const navigate = useNavigate();

  const favouritesChecker = (isbn) => {
    const boolean = favourites.some((book) => book.isbn === isbn);
    return boolean;
  };

  useEffect(() => {
    axios
      .get(BOOK_API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (

  <div className="book-list">
   <div className="text1">Collection of books in the universe of Ice and Fire : </div>
  <div className="card-deck mycss">
  {books.map((book, index) => (
        <div key={book.isbn} className="card-body mycss-card">
          <div>
          <div onClick={() => navigate(`/books/${index+1}`)}>
          <h5 className="card-title mytitle ">{book.name}</h5>
          </div>
          <p className="card-text">Authors : {book.authors}</p>
          
            {favouritesChecker(book.isbn)? (<button className="btn btn-danger" onClick={()=> removeFavourites(book.isbn)}>Remove from Favourites</button>) : (<button className="btn btn-primary" onClick={()=>addToFavourites(book)}>Add to Favourites</button>) }
        </div>
         </div>
      ))
      }
      </div>
  </div>
    
  );
};

export default BookList;
