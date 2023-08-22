import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import VideosState from './Context/VideosState';
import GalleryState from './Context/GalleryState';



import './App.css'
import Feedbacks from './Components/Feedbacks'
import Videos from './Components/Videos'
import Gallery from './Components/Gallery'
import Login from './Components/Login'
import NavBar from './Components/NavBar'
import Join from './Components/Join';
import Dashboard from './Components/Dashboard';



function App() {


  return (
    <>
      <GalleryState>
        <VideosState>
          <BrowserRouter>
            <NavBar />

            <Routes>
            <Route exact path='/' element={<Dashboard/>} />

                  
              <Route exact path='/videos' element={<Videos />} />
              <Route exact path='/gallery' element={<Gallery />} />
              <Route exact path='/feedbacks' element={<Feedbacks />} />
              <Route exact path='/joinings' element={<Join />} />

              <Route exact path='/login' element={<Login />} />




            </Routes>


          </BrowserRouter>

        </VideosState>
      </GalleryState>
    </>
  )
}

export default App
