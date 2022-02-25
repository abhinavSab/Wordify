import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from "./actions/posts"
import "./App.css"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import HomePage from "./Pages/HomePage/HomePage"
import CategoryPage from './Pages/CategoryPage/CategoryPage'
import About from './Pages/AboutPage/About'
import Contacts from './Pages/Contacts/Contacts'
import Header from './components/Header/header'
import Footer from './components/Footer/Footer'


const App = () => {
  const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(getPosts())
        
  
    },[dispatch])
  return (
    
 <Router>
 <Header/>
   <Routes>
     <Route path="/" element={<HomePage/>}/>
     <Route path="/category" element={<CategoryPage/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/contact" element={<Contacts/>}/>
   </Routes>
   <Footer/>
 </Router>
  )
}

export default App