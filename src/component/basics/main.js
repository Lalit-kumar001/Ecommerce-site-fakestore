import React, { useEffect } from 'react'
import "./style.css"
import menu from './api' 
import Card from './card'
import Nav from './nav'
import Header from './header'
import Images from './images'
import Contact from './contact'
var uniquelist=["men's clothing","jewelery","electronics","women's clothing","All"];


// const dothis=(menu)=>{
//   console.log("hbhjbhjbj");
//  uniquelist=[...new Set(menu.map((elem)=>{
//   console.log(elem.category);
//     return elem.category;

// })),"All"];
// console.log(uniquelist);
// }

const Restaurant = () => {
  console.log("1");

    const [MenuData,setMenuData]=React.useState([]);
    const [storedata,setstoredata]=React.useState([]);
    const [Uniquelist,setuniquelist]=React.useState([]);
    // const [uniquelist,setUniquelist]=React.useState([]);
    
       
    
   

    useEffect(() => {
      console.log("useeffect");
      const fetchData = async () => {
        console.log("fetch");
        const response = await fetch(`https://fakestoreapi.com/products`);
        const newData = await response.json();
        console.log(newData);
        setMenuData(newData);
        setstoredata(newData);
      } ;
        
      
      
      
      fetchData();
        // dothis(storedata);
        setuniquelist(uniquelist);
     
    },[]);

  
   
   
     const filter=(category)=>{
      console.log(category);
      // console.log("call me third")
      if(category==="All"){
        setMenuData(storedata);
      }
      else{
        const updatelist=storedata.filter((elem)=>{
            return elem.category===category;
          });
          console.log(updatelist)
      setMenuData(updatelist);
        console.log(MenuData);
      }
    };


    const filter2=(id)=>{
      const updatelist2=storedata.filter((elem)=>{
        return elem.id===id
      });
      setMenuData(updatelist2);
    }

  return (
    <>

    <Header/>
    <Nav uniquelist={Uniquelist} update={filter}/>
    <Images/>
   
    <Card data={MenuData} filterid={filter2} />
    <Contact/>

    
    </>
    
  )
}


export default Restaurant