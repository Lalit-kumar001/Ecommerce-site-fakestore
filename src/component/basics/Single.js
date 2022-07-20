import React, { useEffect, useState } from 'react'
import "./style2.css"
import { useParams } from 'react-router-dom'

const Single = () => {

    const [mydata,setmydata]=useState([]);
    const [rating,setrating]=useState();
    useEffect(()=>{
      
        const fetchData = async () => {
  
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          const newData = await response.json();
          // console.log(newData)
        //   rating=(newData['rating']['rate']);
        setrating(newData['rating']['rate'])
          setmydata(newData);
          console.log(newData);
        };
    
        fetchData();
      },[]);
  
    const {id}=useParams();
  return (
   <>

   
<div className="left-div">
        <div className="product-title">
            <h2 class="text-center"id="title">{mydata.title}</h2>
        </div>
        <div className="product-image">
            <img src={mydata.image} alt=""></img>
        </div>
        <div className="buttons">
            <button> <span><i className="fa-solid fa-bag-shopping"></i></span> Buy Now</button>
            <button><span><i className="fa-solid fa-cart-shopping"></i></span> Add to Cart</button>

        </div>

    </div>

    <div className="right-div">
        <div className="content1">
            <h2 class="about-this">About This</h2>
            <div className="description">
                <h1 id="desc">{mydata.description}</h1>
            </div>

            <h2>Special Offer Take it Now</h2>
            <p className="money"><span><i className="fa-solid fa-indian-rupee-sign"></i></span><span id="price">{mydata.price}</span>
                <span className="off">80%
                    off</span></p>
            <div className="rating">
        {/* <h1>{mydata.rating.rate}</h1> */}

                <span id="rate"> {rating} </span><span className="fa fa-star"> </span>
            </div>

            <div className="policies">
                <p><span><i className="fa-solid fa-arrow-rotate-left"></i></span> 10 days Replacement</p>
                <p><span><i className="fa-solid fa-arrow-right-arrow-left"></i></span> 5 Days Return Policy</p>
            </div>
        </div>

        <div className="default-address">
            <h2>Default Address</h2>
            <input type="number" className="inputs" placeholder="Enter Your Pincode"></input>
            <input type="text" className="inputs" placeholder="Enter Your City" name="" id=""></input>
            <input type="text" className="inputs" placeholder="Enter Your Area" name="" id=""></input>
            <input type="email" className="inputs" name="" placeholder="Enter Your Email" id=""></input>
            <input type="number" className="inputs" placeholder="Enter Your Street Number"></input>
            <input type="number" className="inputs" placeholder="Enter Your Mobile Number"></input>

    
        </div>




    </div>

    <div className="contact text-center">
        <h1>Contact-us</h1>
        <div className="information">
            <div className="reach-us">
                <h2>Reach us</h2>
                <p> Flipkart Internet Private Limited,<br></br>

                    Buildings Alyssa, Begonia  <br></br>

                    Clove Embassy Tech Village, <br></br>

                    Outer Ring Road, Devarabeesanahalli Village,<br></br>

                Bengaluru, 560103, <br></br>

                Karnataka, India</p>
            </div>
            <div className="office-address">
                <h2>Register Office Address</h2>
                <p>Flipkart Internet Private Limited,<br></br>

                    Buildings Alyssa, Begonia  <br></br>

                    Clove Embassy Tech Village, <br></br>

                    Outer Ring Road, Devarabeesanahalli Village, <br></br>

                    Bengaluru, 560103, <br></br>

                    Karnataka, India <br></br>

                    CIN : U51109KA2012PTC066107 <br></br>

                    Telephone: 044-45614700</p>
            </div>

            <div className="social">
                <h2>social</h2>
                <ul>

                    <li> <span><i className="fab fa-facebook-f"></i></span><a href="">Facebook</a></li>
                    <li> <span><i className="fa-brands fa-twitter"></i></span><a href="">Twitter</a></li>
                    <li> <span><i className="fa-brands fa-instagram-square"></i></span><a href="">Instagram</a></li>
                </ul>
            </div>
        </div>

    </div>

    
   </>
  )
}

export default Single