import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Style/Product.css";
import LoginGoogle from "./GoogleLogin";


 function UserLogin(){
    const navigate = useNavigate();
    const [name,setName]=useState("");
    
    const [password,setPassword]=useState("");

    const  [newEntry,setNewEntry] = useState([]);

    const submitForm =(e) =>{
        e.preventDefault();
        axios
          .post('https://fakestoreapi.com/auth/login', {
            username: name ,  password : password 
          })
          .then((response) => {
            console.log(response);
            setNewEntry(response.data);
            if(response.data.token){
                navigate("/home");
                console.log()
            }else{
                alert("Username and Password is incorrect");
            }
            
          });
    }
    
    return(
            <>
            <br/>
            <br/>
            <hr/>
            <form onSubmit ={submitForm} className="login_page">
            <p>username(mor_2314) and  password(83r5^_)</p>
            <h2>ONLINE SHOPPING LOGIN PAGE</h2>
                <div>
                    <label htmlFor="name" >Userame : </label><br/>
                    <input type="text" placeholder="Enter username"  value={name} 
                        onChange={(e) => setName(e.target.value)}/>
                </div>
                <br/>
                
                <div>
                    <label htmlFor="password" >Password : </label><br/>
                    <input type="password" placeholder="Enter password" name="password" id="password" 
                        autoComplete="off" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <br/>
                {/* username=mor_2314 pass=83r5^_*/}
                <button type="submit" className="submit_btn">Submit</button>
                <br/>
                <p>OR</p>
                <LoginGoogle/>
                <br/>
                </form><br/><br/>
            

            </>
        );
 }
 export default UserLogin;