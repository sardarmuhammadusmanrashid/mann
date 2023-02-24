import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import './Shipping.css';


import logo from './logo.jpg';
import logo2 from './logo_big.jpg';
import logo3 from './arrow.png';

export default function Shipping(){

 
 
   
    
    const[first,setfirst]=useState("");
    const[products1,setproducts1]=useState([""]);
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
    
    const loadProduct=async()=>{
    
        try {
            const response1= await axios.get('http://127.0.0.1:8000/order/');
         
            setproducts1(response1.data)
         
          
        
        
      
       
        
        } catch (error) {
          console.error(error);
        }
        
        
       }
      
    
    useEffect(()=>{
       
       
      

       loadProduct();

     
    },[])
    
     
      

    return(
        <div class="main_bg shipping-wrapper">
        <div class="container-fluid px-3 px-sm-5 pt-4">
            <div class="top-navigation gap-3 gap-sm-0 d-flex flex-column flex-sm-row justify-content-between align-items-center">
                <div class="logo">
                    <img class="w-100" src={logo} alt="logo" />
                </div>
                
                <nav class="d-flex align-items-center">
                    <ul class="d-flex">
                        <li><a href="#">Notifications</a></li>
                        <li><a href="#">Important</a>
                            <div class="imp">
                                <div class="imp-row">
                                    <p>Client Name</p>
                                    <span>Delivery Status</span>
                                    <span>Day Date</span>
                                </div>
                                <div class="imp-row">
                                    <p>Client Name</p>
                                    <span>Delivery Status</span>
                                    <span>Day Date</span>
                                </div>
                                <div class="imp-row">
                                    <p>Client Name</p>
                                    <span>Delivery Status</span>
                                    <span>Day Date</span>
                                </div>
                                </div>
                        </li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
                </div>
                <div class="row">
                <div class="col-12 col-sm-10 col-lg-8 col-xl-7">
                    <div class="d-flex justify-content-center gap-3 mb-3">
                        <button class="btn-rounded btnsm px-5 btnShadow"><i class="fa fa-plus"></i>
                            New</button>
                        <div class="input-file">
                            <input type="file" id="file" />
                            <label class="btn-rounded btnsm px-5 btnShadow" for="file">Upload</label>
                        </div>
                    </div>

                    <div class="d-flex shipping-header flex-wrap gap-2">

                        <p>Ready to pick up</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <ul class="nav nav-tabs">
    <li  class="active"><a data-toggle="tab" href="#menu1"><p>In transit</p></a></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <li><a data-toggle="tab" href="#menu2"> <p>Delivered</p></a></li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <li><a data-toggle="tab" href="#menu3"><p>Cancelled-5</p></a></li>
  </ul>

                    
                    </div>
                    <div class="search-by my-3">
                        <p>Search By: ID Number , Name , Address , Rx , Phone</p>
                    </div>
 <div class="tab-content">
   
     
    <div id="menu1" class="tab-pane  fade in active">
      <h3>In transit</h3>
      {
products1.map((items,i)=>{

    return(
    
 <div class="shipping-card mb-3">
                        <p>Ready to Pick <span class="ms-4">ETA 8:00 To 12:00</span></p>
                        <h6 class="my-2">Customer XYZ</h6>
                        
                        <div class="shipping-details d-flex flex-wrap justify-content-between">
                            <div class="d-flex flex-column align-items-center">
                                <p>ID</p>
                                <p>{items.id}</p>
                            </div>
                            <div class="d-flex flex-column align-items-center">
                                <p>Attempts</p>
                                <p>3</p>
                            </div>
                            <div class="d-flex flex-column align-items-center">
                                <p>Forms</p>
                                <p>Delivery Slip</p>
                            </div>
                            <div class="d-flex flex-column align-items-center">
                                <p>Created</p>
                                <p>{items.date}</p>
                            </div>
                            <div class="d-flex flex-column align-items-center">
                                <p>Delivery Date</p>
                                <p>01/10/2023</p>
                            </div>
                        </div>
                    
     </div>
      
      )
    }
    
    )}
</div>
    <div id="menu2" class="tab-pane fade">
      <h3>Delivered</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
    </div>
    <div id="menu3" class="tab-pane fade">
      <h3>Canceled 3</h3>
      <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
    </div>
 
</div></div>
                
                
                </div></div></div>
    )
}