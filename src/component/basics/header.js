import React from 'react'

const Header = () => {
  return (
    <> <header>
    <div className="store-name text-center">
        <h2 className="color-white">FS</h2>
    </div>


{/* <i class="fa-solid fa-magnifying-glass"></i> */}

{<input type="text" placeholder="Search Your Product" className="search-bar inline-block">
 
</input> }

    

    <div className="account float-right inline-block icon-design">
        <i className="fa-solid fa-users-rectangle"></i>
    </div>

    <div className="add-to-cart float-right inline-block icon-design">
        <i className="fa-solid fa-cart-plus"></i>
    </div>


</header>
    </>
  )
}

export default Header