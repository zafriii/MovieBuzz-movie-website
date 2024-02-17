import React from 'react'
import { useGlobalContext } from '../Context'
import { NavLink } from 'react-router-dom';
import './movie.css'

function Movies() {

const {movie, loading} = useGlobalContext();

    if(loading) 
    return <span className="loader"></span>; 


return (

  <>


    <div className="mvi-container">

        {

              movie.map((curElem) => {

                const { imdbID, Title, Poster } = curElem;
                const mviName = Title.substring (0,15);

                  return <NavLink to = {`/singlemovie/${imdbID}`} key={imdbID}>

                   
                                    <div className="box">
                                        <div className="box-img">
                                        <img src={Poster}></img>
                                        </div>

                                        <div className="content">
                                        {/* <h2>{mviName.length > 13 ? `${mviName}...` : mviName}</h2> */}
                                         <h2>{Title}</h2>
                                        </div>

                                        <div className="button">
                                          <li><p className="b1" href="#">Watch Now</p></li>
                                          <li><p className="b2" href="#">Download</p></li>  
                                        </div>
                                    </div>




                  </NavLink>


              })

          
        }     

    </div>


  </>
)

       
   
}

export default Movies
