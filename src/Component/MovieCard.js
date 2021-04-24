import React from 'react'
import StarRating from './StarRating'
import { Link} from "react-router-dom";
const MovieCard = ({film}) => {
    return (
        <div className="movie-card"> 
        <StarRating rate={film.rating}></StarRating>
        <img src={film.image} alt=""></img>
        <h3> {film.name}</h3>
        <p>{film.date}</p>
        <button className="btn btn-primary" >
            <Link to={`/Infos/${film.name}`}> More infos</Link>
             </button>    
        </div>
    )
}

export default MovieCard
