import './styles/App.css';
import {Routes, Route} from 'react-router-dom';
import BookDetails from './components/BookDetails';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Favourites from './components/Favourites';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path = "/" element = {<BookList/>}/>
      <Route path = "/books/:id" element = {<BookDetails/>}/>
      <Route path = "/favourites" element = {<Favourites/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
