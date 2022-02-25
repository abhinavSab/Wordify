import React from 'react'
import { useSelector } from "react-redux";
import "./rectangle.css"

const Rectangle = () => {
    const ans = useSelector((state) => state.posts);
  return (
    <>
     {ans.map((obj) => (
              <div className="post_box-rectangle" key={obj.id}>
                <div className="img-rectangle">
                 <div className="img-post-rectangle"></div>
                </div>
                <h2>{obj.user_id}</h2>
                <h3>{obj.title}</h3>
                <p>{obj.body}</p>
                
              </div>
            ))}
      
    </>
  )
}

export default Rectangle