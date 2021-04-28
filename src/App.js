import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import Routes from './components/Routes'


export default function App() {

    return(
      <BrowserRouter>
        <Header/>
        <Routes/>
        <Footer/>
      </BrowserRouter>
    )
  
}