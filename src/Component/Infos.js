import React from 'react'
import { Link} from "react-router-dom";
import ReactPlayer from "react-player";
const Infos = ({movies,match}) => {
    const el = movies.find(movie=>movie.name===match.params.name)
    return (
        <div>
            <div >
            <h1 style={{color:'grey'}}>{el.name}</h1>
            <h1 style={{color:'grey'}}>{el.date} </h1>
            </div>


           <ReactPlayer
                url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
            
             />
     
           <div>
           <Link to="/"> Back Home</Link>
           </div>
        </div>
    )
}

export default Infos
