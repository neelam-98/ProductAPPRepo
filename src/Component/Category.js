import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link , useParams } from "react-router-dom";
import CatButton from "./CatButton";
import Navbar from "./Navbar";
import PreNextButton from "./PreNextButton";


function Category(){
    const {category} = useParams();
    console.log("Category",category);

    const [data,setData] = useState([]);

     useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${category}`)
        .then((response) =>{
            console.log(response.data);
            setData(response.data);

        })

     },[category])

    
    return(
            <>
            <Navbar/>
            <CatButton/>
            <div className="block">

            { data && data.length>0 &&         
                data.map((product) => {
                    console.log(product);

            return(
                <div className="grid">
                        <div class="card" >
                            <Link to={`${product.id}`}>
                                <img src={product?.image} alt={product?.title}/>
                            </Link>
                            <p><b>{product?.category}</b></p>
                            <div className="card-body">
                                <p><b>${product?.price}</b></p>
                                <Link to={`${product?.id}`}>
                                <button>Buy Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
            </div>
            {/* <PreNextButton/> */}
            </>
    );
}
export default Category;