import React from "react";
import { useNavigate } from "react-router-dom";

function PreNextButton(){
    const navigate = useNavigate();

    const prenext=(clicktype)=>{
        if(clicktype==="previous"){
            navigate(-1);
        }
        else{
            navigate(+1);
        }
    }

    return(
        <>
        
        <button onClick={()=>prenext("previous")} className="prenext_button">Previous</button>
        <button onClick={()=>prenext("next")} className="prenext_button" >Next</button>


        </>
    );

}
export default PreNextButton;