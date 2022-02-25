import React from 'react'
import PopularPosts from './PopularPosts'

const RightPosts = (props) => {
  return (
    <> 
    <div className="section2">
    <form action="#" className="search2">
      <input
        type="text"
        id="sec_search"
        placeholder="Type keyword and hit enter"/>
      <span className=" searchicon fa fa-search"></span>
    </form>

   {/* <div className="img-bio"></div> */}
   <img className="img-bio" src={props.img} alt="" />
    <div className="bio">
    
      <h2 className="name">{props.name}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
        dolorem nemo magnam asperiores consequuntur aspernatur!
      </p>
      <button className="readbio">Read my Bio</button>
      <div className="so-btn">
        <a href="#!" className="btn">
          <span className="s fab fa-twitter"></span>
        </a>
        <a href="#!" className="btn">
          <span className="s fab fa-facebook"></span>
        </a>
        <a href="#!" className="btn">
          <span className="s fab fa-instagram"></span>
        </a>
        <a href="#!" className="btn">
          <span className="s fab fa-youtube"></span>
        </a>
      </div>
    </div>
    <PopularPosts/>
  </div>
  </>
  )
}

export default RightPosts