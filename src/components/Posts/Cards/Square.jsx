import React from 'react'
import { useSelector } from "react-redux";
import "./../Cards.css"

const Square = () => {
    const ans = useSelector((state) => state.posts);
  return (
    <>
     {ans.map((obj) => (
              <div className="post_box" key={obj.id}>
                <div className="img">
                 <div className="img-post"></div>
                </div>
                <h2>{obj.user_id}</h2>
                <h3>{obj.title}</h3>
                <p>{obj.body}</p>
                
              </div>
            ))}
      
    </>
  )
}

export default Square
