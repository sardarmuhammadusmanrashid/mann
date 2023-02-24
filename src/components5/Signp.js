import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import './Signp.css';

import logo from './logo.jpg';
import logo2 from './logo_big.jpg';
import logo3 from './arrow.png';

export default function Signp(){

 
 
   
    
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
        if(first==""){
            
            
            setstatus1("firstname required");

        }
        else if(last==""){
            setstatus1("lastname required");
        }
        else if(address==""){
            setstatus1("address required");
        }
       
        else if(state==""){
            setstatus1("contact required");
        }
        else if(email==""){
            setstatus1("email required");
        }
        else if(passcode==""){
            setstatus1("passcode required");
        }
        else{
        try {
          
            let formField=new FormData()
            formField.append('first_name',first)
            formField.append('last_name',last)
            formField.append('address',address)
             
             formField.append('contact',state)
          
            formField.append('email',email)
            formField.append('password',passcode)
            
           
          //   formField.append('img',img)
          console.log(formField);
          console.log(email);
            
          await axios({
            url:'http://127.0.0.1:8000',
            method:'post',
            data:formField,
            
            
            
          }).then((response)=>{
        console.log(response.data)
        alert("insert");
        setfirst("");
        setemail("");
        setlast("");
        
        setstate("");
        setaddress("");
        setpasscode("");
        setstatus("sign up please login");
        setstatus1("");
    //    window.location.href=`/verfy/${response.data.id}`
  
          });
        
        
        
        } catch (error) {
          setstatus("");
          setstatus1(" invalid creditionals");
        }
    }
}
      
      

    return(
        <div className="main_bg">
        <div className="container-fluid px-5 pt-4">
            <div className="top-navigation d-flex justify-content-between align-items-center">
                <div className="logo">
                <img src={logo} className="w-100" alt="logo" />
                 
                </div>
                <nav className="d-flex align-items-center">
                    <ul className="d-flex">
                        <li><a href="/login">Login</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        
                    </ul>
                    <i className="fa fa-search"></i>
                </nav>
            </div><div className="row pharmacy-signup">
                    <div className="col-md-6">
                            <h1 className="text-uppercase mb-4">FROM PHARMACY <br/><span>TO DOORSTEP,</span></h1>
                            <h2 className="text-uppercase mb-4">WE'RE YOUR ONE-STOP <br/>
                                MEDICINE DELIVERY<br/><span>SOLUTION.</span></h2>
                    </div>
                    <div className="col-md-4 offset-1">
                        <div className="sign-in">
                            <button onClick={GgetUser} type="submit" className="w-100 btn-rounded btnlg mb-3 px-5 text-capitalize">pharmacy sign up</button>
                            {status &&<p className="alert alert-success">{status}</p>}
{status1 &&<p className="alert alert-warning">{status1}</p>}
                            <div className="mt-2">
                                <input  type="text" name="first" value={first} onChange={(e)=>setfirst(e.target.value)} className="form-control" required  placeholder="First Name"/>
                            </div>
                            <div className="mt-2">
                                <input className="form-control"  type="text" name="last" value={last} onChange={(e)=>setlast(e.target.value)} required  placeholder="Last Name"/>
                            </div>
                            
                            <div className="mt-2">
                                <input className="form-control"  type="text" name="address" value={address} onChange={(e)=>setaddress(e.target.value)} required  placeholder="Address"/>
                            </div>
                           
                            <div className="mt-2">
                                <input className="form-control"  type="number" name="state" value={state} onChange={(e)=>setstate(e.target.value)}  required placeholder="Contact"/>
                            </div>
                           
                            
                            <div className="mt-2">
                                <input className="form-control"  type="email" name="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Email"/>
                            </div>
                            <div className="mt-2">
                                <input className="form-control"  type="text" name="passcode" value={passcode} onChange={(e)=>setpasscode(e.target.value)} placeholder="Passcode"/>
                            </div>
                            <a href="/login"><img src={logo3}  className="py-3" alt="arrow" /></a>
                            
                        </div>
                    </div>
                </div>
                <p className="pharmacy-desc text-center">Welcome to PILLDROP medicine delivery service! We are dedicated of providing fast and convenient delivery to your customers prescribed medications. Our team of experienced professionals will ensure that your deliverables are processed quickly and deliver in a timely manner. We understand that managing your healthcare business can be challenging, and we are here to make it easier for you. Please don't hesitate to reach out to us if you have any questions or concerns. 
                    Thank you</p>
            </div></div>
    )
}