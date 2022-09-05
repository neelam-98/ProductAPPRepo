import React from "react";
import { Link } from "react-router-dom";


function Navbar()
{
    return(
        <>
        <header>
        <div  className="navbar">
            <div className="festival_block">
            <h1 className="festival">FESTIVAL COLLECTION</h1>
            <img src="https://cdn.iconscout.com/icon/premium/png-64-thumb/shopping-677-239325.png" className="festival_icon"/>
            </div>
            <div className="navbar_link">
                <Link to="/home"><p>HOME</p></Link>
                <div className="product">
                    <Link to="/product">
                        <p>PRODUCTS</p>
                    </Link>  
                </div> 
                <div className="cart_block">
                    <Link to="/cart"><img src="https://cdn.icon-icons.com/icons2/2387/PNG/128/shopping_cart_market_ecommerce_icon_144576.png"
                    alt="cart" className="cart"/></Link>
                    <span className="cart_text">1</span>
                </div>
            </div>
            <div className="login">
                <Link to="/">
                    <p>LOGIN</p>
                    </Link>
            </div>
        </div>
    </header>
        </>

    );
}
export default Navbar;