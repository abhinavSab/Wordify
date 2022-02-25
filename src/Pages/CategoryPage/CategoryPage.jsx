import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/header'
import Categorypost from "./Categorypost"

const CategoryPage = () => {
  return (
    <>
    
    <Categorypost title="Category: Food" name="Craig David" img={process.env.PUBLIC_URL + `/Imgs/bioimg.jpg`}/>
    
    </>
  )
}

export default CategoryPage
