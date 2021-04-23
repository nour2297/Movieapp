
import { useState } from 'react';
import './App.css';
import AddMovie from './Component/AddMovie';
import Filter from './Component/Filter';
import MovieList from './Component/MovieList';
import { moviesData } from './data';

function App() {

const [movies, setMovies] = useState(moviesData);
const [searchRating, setSearchRating] = useState(1);
const [searchValue, setSearchValue] = useState("");

//const [state, setstate] = useState(initialState)

//add new movie
const handleAdd=(newmovie)=>setMovies([...movies,newmovie]);
 //handle rate
 const handleRating = (newRate) => setSearchRating(newRate);
 //handle filter
 const handleSearch = (e) => setSearchValue(e.target.value);
  return (
    <div className="App">
      <Filter
      searchRating={searchRating}
      searchValue={searchValue}
      handleRating={handleRating}
      handleSearch={handleSearch}
      />
    <MovieList 
    movies={movies.filter((movie)=> 
      movie.name.toLowerCase()
     .includes(searchValue.toLowerCase().trim())
      && movie.rating>= searchRating)}
      /> 

    <AddMovie handleAdd={handleAdd}></AddMovie>
    </div>
  );
}

export default App;
