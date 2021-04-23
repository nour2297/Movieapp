import React from 'react'
import StarRating from './StarRating'

const Filter = ({searchValue,searchRating,handleRating,handleSearch}) => {
    return (
        <div className="header-container">
             <h1>Hello in our  Movie Application</h1>   
        <div className="search-container">      
         <input 
      
         type="text" 
         className="inp"
         placeholder="enter a movie to search"
         value={searchValue}
         onChange={handleSearch}
         />
         </div>
         <StarRating rate={searchRating} handleRating={handleRating} />
        </div>
    )
}

export default Filter
