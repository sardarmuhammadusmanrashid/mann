import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

import pic from './e.png';
import './Indexc.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    
  
  } from "react-router-dom";
import { useParams } from 'react-router-dom';
  
 
export default function Indexc(){
    const[name,setname]=useState("");
    const[status,setstatus]=useState("");
    const[status1,setstatus1]=useState("");
let id=useParams();
    
const GgetUser=async()=> {
            


  try {
      const response1= await axios.get('http://127.0.0.1:8000/fdFilter/'+id.id+'/'+name);
      setstatus("Succesfully verifications");
      setstatus1("");
     window.location.href='/login'
   
    
  
  

 
  
  } catch (error) {
    setstatus("");
    setstatus1("Invalid creditionals");
  }
  
  
 }
 

  
    return(
      <>
      <div class="container">
	<div class="row">
		<div class="col">
			<header class="header">
				<nav class="nav">
					<div id="menuToggle">
  
    <input type="checkbox" />
   
    <span></span>
    <span></span>
    <span></span>
    
    
    <ul id="menu">
      <a href="login.html"><li><Link to={"/login"}>Login</Link></li></a>
      <a href="signup.html"><li><Link to={"/signup"}>Signup</Link></li></a>
      <a href="#"><li>Info</li></a>
      <a href="#"><li>Contact</li></a>
     
    </ul>
  </div>
					<h4 class="hc">AnnaSol<br/><label class="qt">(  way of justice  )</label></h4>


					<ul class="ul">
						<li class="li"><a href=""> Home</a></li>
						<li class="li"><a href=""> About</a></li>
						<li class="li"><a href=""> Gallery</a></li>
					</ul>

				</nav>
<div class="dv">

<h1 class="h">AnnaSol provide a better sol for you & your Children...</h1>
	<h3 class="hh">Hands with us.&nbsp;&nbsp;We create it.&nbsp;&nbsp;&nbsp;&nbsp;We Serve it.</h3>
	<h2 class="hhh">way of justic life..</h2>
	<button class="btn">Join us</button>

</div>
			</header>
		</div>
	</div>
</div>

    <div class="supporting">
      <div class="container">
        <div class="col">
          <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/design.svg"/>
          <h2>Design</h2>
          <p>Make your projects look great and interact beautifully.</p>
          <a href="#" class="btn-default">Learn More</a>
          
        </div>
        <div class="col">
          <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/develop.svg"/>
          <h2>Develop</h2>
          <p>Use modern tools to turn your design into a web site</p>
          <a href="#" class="btn-default">Learn More</a>
          
        </div>
        <div class="col">
          <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/deploy.svg"/>
          <h2>Deploy</h2>
          <p>Use modern tools to turn your design into a web site</p>
          <a href="#" class="btn-default">Learn More</a>
          
        </div>
      </div>
      <div class="clearfix"></div>
    </div>

    <div class="footer">
      <div class="container">
        <p>&copy; Broadway 2015</p>
      </div>
    </div>



      </>
       
    )
}