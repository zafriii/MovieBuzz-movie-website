import { useState } from "react";
import { createContext, useContext, useEffect } from "react";



export  const API = `https://www.omdbapi.com/?apikey=9f1809d2` ;

const AppContext = createContext();

const AppProvider = ({children}) => {

    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] =  useState({show: false , message:""});
    const [query, setQuery] = useState("titanic");

    const getMovies = async (url) => {

        try{
            const res = await fetch( url );
            const data = await res.json() ;
            console.log(data);

             if(data.Response === "True"){
                    setMovie(data.Search) ;
                    setLoading(false) ;
                    setIsError({
                        show: false,
                        message :""
                    })
             }
             else{

                setIsError({
                    show: true,
                    message : data.Error
                })

             }

           }

        catch(error){
            console.log("Error");
        }   
}

    useEffect(() => {

        let timer = setTimeout(() => {

            getMovies(`${API} &s=${query}`);

        },800);
        
        return () => clearTimeout(timer);
        
    }, [query])


    return <AppContext.Provider value={{loading, movie, isError, query, setQuery}}>{children}</AppContext.Provider>
}

const useGlobalContext = ( ) => {
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext}