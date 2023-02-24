import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import './Signp.css';

import logo from './logo.jpg';
import logo2 from './logo_big.jpg';
import logo3 from './arrow.png';

export default function Userl(){

 
 
   
    
    const[first,setfirst]=useState("");
    
    const[last,setlast]=useState([""]); 
    const[address,setaddress]=useState(""); 
   
    const[city,setcity]=useState(""); 
    const[state,setstate]=useState(""); 
    const[phone,setphone]=useState(""); 
    const[email,setemail]=useState("");
    const[passcode,setpasscode]=useState("");
    const[error,seterror]=useState(""); 
    const[status,setstatus]=useState(""); 
    const[status1,setstatus1]=useState(""); 
    const GgetUser=async()=> {
        let d=document.getElementById("submit");
        d.innerHTML="please wait...";
        d.setAttribute("disabled","");
        if(email==""){
            setstatus1("email required");
        }
        else if(passcode==""){
            setstatus1("password required");
        }
        else{
        try {
          
            let formField=new FormData()
            
            formField.append('email',email)
            formField.append('passcode',passcode)
            
            console.log(formField)
            console.log(email,passcode)
        await axios({
            url:'http://127.0.0.1:8000/dLogins',
            method:'post',
            data:formField,
            
            
            
          }).then((response)=>{
        console.log(response.data)
        let d=document.getElementById("submit");
        d.innerHTML="SIGN IN"
        d.removeAttribute('disabled');
       
        if(response.data.bool==true){
          localStorage.setItem('user',true)
          localStorage.setItem('id',response.data.id)
          alert('succesfully login')
          setstatus("Succesfully login");
            setstatus1("");
          
        }
       else if(response.data.bool==false){
          
           
            setstatus("");
            setstatus1("invalid creditionals");
            
          }
       
          
        const db=localStorage.getItem('id')
        alert(db);
        setemail("");
        setpasscode("");
       
        
          });
      
        
    
        
        } catch (error) {
          console.error(error);
          setstatus("");
          let d=document.getElementById("submit");
          d.innerHTML="SIGN IN"
          d.removeAttribute('disabled');
          setstatus1("invalid creditionals");
          
        }
      }
      
    const dl=localStorage.getItem('user')
  if(dl==='true'){
    window.location.href='/pf';
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
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <i class="fa fa-search"></i>
                </nav>
            </div>
            <div class="row auth-wrapper">
                <div class="col-md-6">
                    <div class="welcome">
                        <h1 class="text-uppercase mb-4">welcome</h1>
                        <p>Welcome to PILLDROP medicine delivery service! We are dedicated of providing fast and convenient delivery to your customers prescribed medications. Our team of experienced professionals will ensure that your deliverables are processed quickly and deliver in a timely manner. We understand that managing your healthcare business can be challenging, and we are here to make it easier for you. Please don't hesitate to reach out to us if you have any questions or concerns. 
                            Thank you for choosing our service.</p>
                            <a href="#" class="btn-rounded btnsm mt-5 px-4 py-3">Shop Now</a>
                    </div>
                </div>
                <div class="col-md-3 offset-1">
                    <div class="sign-in">
                    <button onClick={GgetUser} id="submit" className="w-100 btn-rounded btnlg mb-3 px-5 text-capitalize">SIGN IN</button>
                    {status &&<p className="alert alert-success">{status}</p>}
{status1 &&<p className="alert alert-warning">{status1}</p>}
                           
                        <div class="mt-3">
                            <input type={email} required value={email} onChange={(e)=>setemail(e.target.value)} class="form-control input-rounded" placeholder="Email"/>
                        </div>
                        <div class="mt-3">
                            <input  required value={passcode} onChange={(e)=>setpasscode(e.target.value)} class="form-control input-rounded" placeholder="Password"/>
                        </div>
                        <div class="form-check d-flex align-items-center gap-2 mt-3">
                            <input class="form-check-input" type="checkbox" id="flexCheckDefault"/>
                            <label for="flexCheckDefault">
                              Remember Me
                            </label>
                        </div>
                        <div class="d-flex justify-content-end">
                            <a href="/forgot" class="d-flex align-self-end">Forgot Password?</a>
                        </div>
                        <h3 class="mt-5">
                            <a href="/">New to us ?<span> Sign Up</span></a>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}