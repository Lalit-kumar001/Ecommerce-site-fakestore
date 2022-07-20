import React from 'react'
import  "./style.css"
import { NavLink } from 'react-router-dom'

const Card = ({data,filterid}) => {
  return (
   <>
       <div className='text-center'>
    <h2>Product Details</h2>
  </div> 
  <div className='card-container'>
   {
    
    data.map((current)=>{
        return( 
        


    <div className="product single-card">
                <div className="product-img-box border-">
                    <div className="product-img">
                        <img class="img" src={current.image} alt=""></img>
                    </div>

                </div>
             
                <div className="content text-center">
                    {/* <p id="title-overflow">{current.title}</p> */}
                    <span id="title-overflow">{current.title} </span>
                    <div className='rating-container'>
                    <div className="rating">
                <span >{current.rating.rate}</span><span id="rate" className="fa fa-star"> </span>
                    </div>
                    </div>
                    
    
                    <p><span><i className="fa-solid fa-indian-rupee-sign"></i></span>{current.price}</p>

                    
                    <h3>Deal is for Limited Time</h3>
                    <NavLink className="buy-now" to={`products/${current.id}`}>Buy Now</NavLink>
                </div>
                


            </div>


 
      
        )
    })
   }
   </div>
         
  </>
  )
}

export default Card