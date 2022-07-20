import React from 'react'
import "./style.css"





const Nav = ({uniquelist,update}) => {

  return (
<>

<nav>
<div onClick={(event)=>{
              var list=document.querySelector('.list');
              if (list.classList.contains('flex')){
                list.classList.add('animate-navbar');
                list.classList.remove('flex');
              }
              else{
              list.classList.add('flex');
             list.classList.remove('animate-navbar');
              }
            }} className="hamburger text-center">
            <i className="fa-solid fa-burger font-size" ></i>
        </div>
    <ul className='flex list navigation'>
{
  uniquelist.map((name)=>{
    // console.log(name);
    return(
 
    <li key= {name} className='nav-button'> <a onClick={()=>update(name)} className="border-effect font-size nav-content">  {name} </a>
  
  </li>
   
    
     )
   
  })
}
</ul>
{/* </div> */}
</nav>
</>
  )
}

export default Nav