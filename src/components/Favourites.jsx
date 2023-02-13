import React from "react";
import { useAppContext } from "./context/appContext";

const Favourites = () => {
  const { favourites, removeFavourites } = useAppContext();

  

  return (
    <div className="favourites">
      {favourites.length > 0
        ? favourites.map((book) => (
            <div key={book.isbn} className="book">
              <div>
                <h2>{book.name}</h2>
              </div>
              <div>
                <h3>{book.authors}</h3>
              </div>
              <div>
                
                  <button className="btn btn-danger"  onClick={() => removeFavourites(book.isbn)}>
                    Remove from Favourites
                  </button>
                
              </div>
            </div>
          ))
        : "You don't have any favourite book yet."}
    </div>
  );
};

export default Favourites;
