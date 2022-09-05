import React, { useEffect, useState } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import "../Style/Product.css";
import Navbar from "./Navbar";
import PreNextButton from "./PreNextButton";


function Item(){
    const {id} = useParams();
    const [product,setProduct] = useState([]);

     useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((response) =>{
            console.log(response.data);
            setProduct(response.data);
        })

     },[])
return(
       <>
       <Navbar/>
       <hr/>
       <div className="item_style">
                <div className="item_pic">
                    <img src={product.image} alt={product.title} className="item_img"/>
                </div>
                <div className="item_detail">
                    <h4>Category : {product.category}</h4>
                    <h1>{product.title}</h1>
                    <p><b>Rating  {product.rating && product.rating.rate}</b></p>
                    <h3 className="price">Price : ${product.price}</h3>
                    <p>{product.description}</p>
                </div>
        </div>
        {/* <PreNextButton/> */}
        </>
    );
}
export default Item;