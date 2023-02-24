import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import './Signp.css';

import logo from './logo.jpg';
import logo2 from './logo_big.jpg';
import logo3 from './arrow.png';
export default function Profile(){


 
   
    const[email,setemail]=useState("");
   
    const[status,setstatus]=useState(""); 
    const[status1,setstatus1]=useState(""); 
  
    const[last,setlast]=useState(""); 
    const[first,setfirst]=useState(""); 
    const[address,setaddress]=useState(""); 
   
    const[city,setcity]=useState(""); 
    const[state,setstate]=useState(""); 
    const[phone,setphone]=useState(""); 
    const[passcode,setpasscode]=useState(""); 



    const id=localStorage.getItem('id');
    const GgetUser=async()=> {
      try {
let d=document.getElementById("submit");
d.innerHTML="please wait...";
d.setAttribute("disabled","");
     
          let formField=new FormData()
         
           
            formField.append('old',email)
            formField.append('new',passcode)
       
          
         console.log(formField);
        //   formField.append('img',img)
        
          
        await axios({
          url:`http://127.0.0.1:8000/updatepasscode/${id}`,
          method:'post',
          data:formField,
          
          
          
        }).then((response)=>{
          if(response.data.bool==true){
            let d=document.getElementById("submit");
            d.innerHTML="Update password"
            d.removeAttribute('disabled');
            alert('password updated')
            setstatus(" updated password");
            setstatus1("");
            localStorage.clear();
            window.location.href=`/login`
           
            
          }
        
      
          else if(response.data.bool==false){
          
            let d=document.getElementById("submit");
            d.innerHTML="Update password"
            d.removeAttribute('disabled');
            setstatus("");
            setstatus1("not updated");
            
          }
          else if(response.data.bool=="password not match"){
            let d=document.getElementById("submit");
            d.innerHTML="Update password"
            d.removeAttribute('disabled');
            setstatus("");
            setstatus1("password not matched");
          }
      
      
     


        });
      
      
      
      } catch (error) {
         let d=document.getElementById("submit");
          d.innerHTML="Update password"
          d.removeAttribute('disabled');
        setstatus("");
        setstatus1(" invalid creditionals");
       
      }
    }
    const loadProduct=async()=>{
 
        try {
            const response1= await axios.get('http://127.0.0.1:8000/pillfetch/'+id);
          setfirst(response1.data.first_name)
          setlast(response1.data.last_name)
          setaddress(response1.data.address)
          
          setstate(response1.data.contact)
        
          setemail(response1.data.email)
          setpasscode(response1.data.password)
          
          
         
          
        
        
      
       
        
        } catch (error) {
          console.error(error);
        }
        
        
       }
       function Get(){
        localStorage.clear();
        window.location.href="/login"

       }
    
       useEffect(()=>{
       
        
        
       
      },[])
    return(
      <div class="main_bg">
      <div class="container-fluid px-5 pt-4">
          <div class="top-navigation d-flex justify-content-between align-items-center">
              <div class="logo">
                  {/* <img class="w-100" src={logo} alt="logo"/> */}
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
                      <p  onClick={Get} className="text-danger ml-5 p-3" style={{cursor:'pointer'}}>Logout</p> 
                      
                  </div>
              </div>
              <div class="col-md-3 offset-1">
                  <div class="sign-in">
                  <button onClick={GgetUser} id="submit" className="w-100 btn-rounded btnlg mb-3 px-5 text-capitalize">Update password</button>
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
                     
                  </div>
              </div>
          </div>
      </div>
  </div>
    )
}