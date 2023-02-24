import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import cj from './cj.png';
import logo from './logo.png';
import pic from './pic.png';
import './Lindex.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    
  
  } from "react-router-dom";
import { useParams } from 'react-router-dom';
  
 
export default function Lindex(){
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
      <header className="header">
        <nav>
        <img src={logo} id='logo' alt="Logo" width="140"/>
        <ul className="ul">
				<li className="li"><a>Home</a></li>
				<li className="li"><a>About</a></li>
				<li className="li"><a>Gallery</a></li>
			</ul>
             <div id="menuToggle">
 
    <input type="checkbox" />
    
  
    <span></span>
    <span></span>
    <span></span>
    
  
    <ul id="menu">
<li><Link to='/login'><a>Login</a></Link></li>
<li><Link to='/signup'><a>Signup</a></Link></li>

    </ul>
  </div>
        </nav>



        <div className="namt">
       
            <p>Hi THERE !</p>
            <h1>I AM USMAN ALI</h1>
            <h4>Creative Web&Android Developer</h4>
            <div><span><i class="bi bi-facebook"></i></span>&nbsp;&nbsp;<span><i class="bi bi-meta"></i></span>&nbsp;&nbsp;<span><i class="bi bi-whatsapp"></i></span></div>
        <button className="btn btn-outline-danger mt-4">Read more</button>
        </div>
        <div id="klt"><img src={pic} alt="Logo"  width="433px" /></div>
     
      </header>
<div className="container">
    <div className="row">
        <div className="col mt-5">
            <h1 className="text-center">SERVICES</h1>
        </div></div>
        <div className="row">
        <div  className="col mt-1">
            <p className="text-center">“Experience is the name everyone gives to their mistakes.” – ...<br></br>
            “Knowledge is power.” –</p>
        </div>
    </div>
    <div className="row">
    <div className="col-4 mt-5">

<div className="card p-5">
<img src={logo} alt="Logo" width="140"/>
    <div className="card-title mt-3">
        <h4>Skate For Beginners</h4>
    <div className="card-body mt-3">
        <p>The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value.</p>

    </div>

    </div>
</div>

    </div>
    <div className="col-4 mt-5">

<div className="card p-5">
<img src={cj} alt="Logo" height="35" width="140"/>
    <div className="card-title mt-3">
        <h4>Personal Services</h4>
    <div className="card-body mt-3">
        <p>The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value.</p>

    </div>

    </div>
</div>

    </div>
    <div className="col-4 mt-5">

<div className="card p-5">
<img src={pic} alt="Logo" height="35" width="100"/>
    <div className="card-title mt-3">
        <h4>Best Skater</h4>
    <div className="card-body mt-3">
        <p>The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value.</p>

    </div>

    </div>
</div>

    </div>


    </div>
</div>
<div className="container">
    <div className="row">
        <div className="col mt-5">
            <h1 className="text-center">ABOUT US</h1>
        </div></div>
        <div className="row">
        <div  className="col mt-1">
            <p className="text-center">“The greatest glory in living lies not in never falling, but in rising every time we fall.” – ...<br></br>
            “Knowledge is power.” –</p>
        </div>
    </div></div>
<footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="#">Scanfcode</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
      </>
       
    )
}