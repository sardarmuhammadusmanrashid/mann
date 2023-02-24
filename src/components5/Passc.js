import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import './Signp.css';

import logo from './logo.jpg';
import logo2 from './logo_big.jpg';
import logo3 from './arrow.png';


export default function Passc(){

 
 
   
    const[error,seterror]=useState(""); 
    const[status,setstatus]=useState(""); 
    const[status1,setstatus1]=useState(""); 
    const[email,setemail]=useState("");
    
    const GgetUser=async()=> {
       
        if(email==""){
            setstatus1("email required");
        }
       
        else{
        try {
          
            let formField=new FormData()
            formField.append('email',email)
            
            
          await axios({
            url:'http://127.0.0.1:8000/resetpasscode',
            method:'post',
            data:formField,
            
            
            
          }).then((response)=>{
        console.log(response.data);
        if(response.data.bool==true){
            setstatus("passcode sent to your email");
          setstatus1("");
        }
        else{
            setstatus("");
          setstatus1(" invalid email");
        }
        
  
          });
        
        
        
        } catch (error) {
          setstatus("");
          setstatus1(" invalid creditionals");
        }
    }
}
      
      

      

    return(
      <div class="main_bg">
      <div class="container-fluid px-5 pt-4">
          <div class="top-navigation d-flex justify-content-between align-items-center">
              <div class="logo">
                  <img class="w-100" src={logo} alt="logo"/>
              </div>
              <nav class="d-flex align-items-center">
                  <ul class="d-flex">
                      {/* <li><a href="#">Home</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Contact</a></li> */}
                  </ul>
                  <i class="fa fa-search"></i>
              </nav>
          </div>
          <div class="row auth-wrapper">
              <div class="col-md-6">
                  <div class="welcome">
                      <h1 class="text-uppercase mb-4">welcome</h1>
                     
                         
                  </div>
              </div>
              <div class="col-md-3 offset-1">
                  <div class="sign-in">
                  <button onClick={GgetUser} id="submit" className="w-100 btn-rounded btnlg mb-3 px-5 text-capitalize">reset passcode</button>
                  {status &&<p className="alert alert-success">{status}</p>}
{status1 &&<p className="alert alert-warning">{status1}</p>}
                         
                      <div class="mt-3">
                          <input type={email} required value={email} onChange={(e)=>setemail(e.target.value)} class="form-control input-rounded" placeholder="Email"/>
                      </div>
                     
                   
                    
                      <h3 class="mt-5">
                          <a href="/login"><span> Back</span></a>
                      </h3>
                  </div>
              </div>
          </div>
      </div>
  </div>
    )
}