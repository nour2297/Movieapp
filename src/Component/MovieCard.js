import React from 'react'
import StarRating from './StarRating'

const MovieCard = ({film}) => {
    return (
        <div className="movie-card"> 
        <StarRating rate={film.rating}></StarRating>
        <img src={film.image} alt=""></img>
        <h3> {film.name}</h3>
        <p>{film.date}</p>
            
        </div>
    )
}

export default MovieCard
