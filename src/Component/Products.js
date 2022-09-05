import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link , useParams } from "react-router-dom";
import "../Style/Product.css";
import CatButton from "./CatButton";
import Navbar from "./Navbar";
// const initialState=0;



 function  Products() {

    const [data,setData] = useState([]);
    const[filter,setFilter]=useState(data);
    const [cart,setCart]=useState([]);

        useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then((response) =>{
            console.log(response.data);
            setData(response.data);
            setFilter(response.data);
        })

     },[])
     const handleClick =(product) =>{
         if (cart.indexOf(product)!==-1)
         return alert("already added");
          cart.push(product);
          console.log(cart);
     }
    //  const filterProduct=(catName)=>{
    //     const updatedList =data.filter((x)=>x.category===catName);
    //     setFilter(updatedList);
    //  }

    
    return(
        <>
        <Navbar/>
         {/* <p>{state} </p> */}
        {/* <button onClick={()=>setFilter(data)}>All</button>
        <button onClick={()=>filterProduct("men's clothing")} >Men's Clothing</button>
        <button onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
        <button onClick={()=>filterProduct("jewelery")}>Jewelery</button>
        <button onClick={()=>filterProduct("electronics")}>Electronics</button> */}
        {/* <div className="category_button">
            <button  className="catButton" onClick={()=>categoryElement("electronics")}>Electronics</button>
            <button  className="catButton" onClick={()=>categoryElement("jewelery")}>Jewelery</button>
            <button  className="catButton" onClick={()=>categoryElement("men's clothing")}>Men's Clothing</button>
            <button  className="catButton" onClick={()=>categoryElement("women's clothing")}>Women's Clothing</button>
        </div> */}
        <CatButton/>

    <div className="block">
               
            { filter && filter.length>0 &&         
                filter.map((product) => {
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
                                {/* <Link to={`${product.id}`}>
                                <button>Buy Now</button>
                                </Link> */}
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
export default Products;