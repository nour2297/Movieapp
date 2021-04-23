import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {
    return (
        <div className="movie-list">
          {

              movies.map((movie)=>(
                  <MovieCard film={movie}></MovieCard>
              )

              )
}
        </div>
    )
}

export default MovieList
