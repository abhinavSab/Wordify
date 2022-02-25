import React from 'react'
import img from "./../../assets/r.jpg"


const Post = () => {
  return (
    <>
    <div className="flex">
    <div className="img">
            <img className='post-imgs' src={img} alt="" />
        </div>
        <div className="head">
            <h3>How to Find the Video Games of your Youth</h3>
            <p>March 15, 2018</p>
        </div>
    </div>
        
    </>
  )
}

export default Post