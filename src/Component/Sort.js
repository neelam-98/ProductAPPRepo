import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link } from "react-router-dom";
import "../Style/Product.css";
import CatButton from "./CatButton";
import Navbar from "./Navbar";



 function  Sort() {

    const [data,setData] = useState([]);
    const [cart,setCart]=useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products?sort=desc")
        .then((response) =>{
            console.log(response.data);
            setData(response.data);
        })

     },[])

     const handleClick =(product) =>{
         if (cart.indexOf(product)!==-1)
         return alert("already added");
          cart.push(product);
          console.log(cart);
     }
    
    
    return(
        <>
        <Navbar/>
        <CatButton/> 
        <h3 className="sort_line">Products are sorted in descending order id</h3>
        <div className="block">
            { data && data.length>0 &&         
                data.map((product) => {
                    console.log(product);

                return(
                    <div className="grid">
                            <div class="card" >
                                <Link to={`${product.id}`}>
                                    <img src={product.image} alt={product.title}/>
                                </Link>
                                <p><b>{product.category}</b></p>
                                <div className="card-body">
                                    <p><b>${product.price}</b></p>
                                    
                                </div>
                            <button onClick={() => handleClick(product)} handleClick={handleClick}>Add to Cart</button> 
                            </div>
                    </div>
                        )
                    })
            }
        </div>
            </>
    );
}
export default Sort;