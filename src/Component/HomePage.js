import React from "react";
import "../Style/Product.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function HomePage(){
    return(
        <>
        <Navbar/>
        <div className="home_block">
                <h1>NEW SEASON ARRIVAL</h1>
                <p>CHECK OUT ALL THE TRENDS</p>
                <img src="https://th.bing.com/th/id/OIP.wZKdNJLC9kq2W0OAjAcgQwHaE8?w=269&h=180&c=7&r=0&o=5&pid=1.7"/>
                <p>Click on Products link to view all latest collection</p>
        </div>
        </>

    );
}
export default HomePage;