import { createContext, useState, useContext } from "react";


const AppContext = createContext(null);

export const useAppContext = () =>{
    const context = useContext(AppContext);
   if(context === undefined){
    throw new Error("AppContext must be within AppContextProvider")
   }
   return context;
}

const AppContextProvider = ({children}) => {

  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (book) =>{
   const oldFavourites = [...favourites];
   const newFavourites = oldFavourites.concat(book);

   setFavourites(newFavourites);
  }
  
  const removeFavourites = (isbn) =>{
    const oldFavourites = [...favourites];
    const newFavourites = oldFavourites.filter((book)=> book.isbn !== isbn);

    setFavourites(newFavourites);
  }

    return(
        <AppContext.Provider value= {{favourites, addToFavourites , removeFavourites}}>
            {children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;