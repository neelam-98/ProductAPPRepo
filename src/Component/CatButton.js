import React from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";

 function CatButton(){
    const navigate = useNavigate();
    console.log(navigate ,"Hello");

    const categoryElement=(categoryType)=>{
        navigate(`/category/${categoryType}`);
        console.log(categoryElement,"specific category");
    }

    return(
        <>
         <h1 className="latest">Latest Products</h1>
        <hr/>
        <div className="category_button">
            <Link to="/Product"><button  className="catButton" >All</button></Link>
            <button  className="catButton" onClick={()=>categoryElement("electronics")}>Electronics</button>
            <button  className="catButton" onClick={()=>categoryElement("jewelery")}>Jewelery</button>
            <button  className="catButton" onClick={()=>categoryElement("men's clothing")}>Men's Clothing</button>
            <button  className="catButton" onClick={()=>categoryElement("women's clothing")}>Women's Clothing</button>
            <Link to="/sort"><button  className="catButton">Sort</button></Link>
        </div>

        </>
    );
 } export default CatButton;