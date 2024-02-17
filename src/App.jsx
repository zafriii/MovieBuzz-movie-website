import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Singlepage from './Singlepage'
import Moviepage from './Moviepage'

function App() {
  
  



  return (
    <>
      
      <BrowserRouter>

              

                    <Routes>                

                        <Route path='/' element={<Moviepage/>}/>
                        <Route path='singlemovie/:id' element={<Singlepage/>}/>
                      
                                                              
                    </Routes>    

                              

     </BrowserRouter>


    </>
  )
}

export default App
