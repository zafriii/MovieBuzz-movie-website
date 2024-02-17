import React, {useState, useEffect} from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { API } from './Context'
import  './components/singlepage.css'

function Singlepage() {


const {id} = useParams();

const [loading, setLoading] = useState(true);
const [movie, setMovie] = useState('');
   

    const getMovies = async (url) => {

        try{
            const res = await fetch( url );
            const data = await res.json() ;
            console.log(data);

             if(data.Response === "True"){
                    setMovie(data) ;
                    setLoading(false) ;
                    setIsError({
                        show: false,
                        message :""
                    })
             }
             
           }

        catch(error){
            console.log("Error");
        }   
}

    useEffect(() => {

        let timer = setTimeout(() => {

            getMovies(`${API} &i=${id}`);

        },800);
        
        return () => clearTimeout(timer);
        
    }, [id])



    if(loading) 
    return <span className="loader"></span>; 


  return (

    <>
    
    <div className="movie-section">

          <div className="movie-card">

              <figure>

                  <img src={movie.Poster}/>

              </figure>

          <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className=""></p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>

          
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
          
        </div>


          </div>


    </div>
    
    
    </>
  )
}

export default Singlepage