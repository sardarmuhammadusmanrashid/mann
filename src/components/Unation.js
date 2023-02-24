import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

import './Unation.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    
  
  } from "react-router-dom";
import { useParams } from 'react-router-dom';
  
 
export default function Unation(){
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
       
       <nav  className="navbar navbar-expand-lg navbar bg-light">
  <Link className="navbar-brand text-danger logo">UNATION
  
</Link>
<div class="icon-input">
  <input class="form-control mt-1 dd" placeholder="         type here...?" type="text"/>
  <i class="fa fa-search search"></i>
</div>
     
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
   
  
    
  </button> */}

  <div className="collapse navbar-collapse " id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <i class="bi bi-bricks"></i>
      <li className="nav-item active">
     <Link className="nav-link text-dark" href="#">Home<span className="sr-only">(current)</span></Link>
      </li>
    
 
 
      <i class="bi bi-geo-alt-fill"></i>
      <li className="nav-item dropdown">
      <Link className="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          
          <Link className="dropdown-item" href="#">Another action</Link>
          <div className="dropdown-divider"></div>

          <Link className="nav-link dropdown-toggle text-dark" href="#">Something else here</Link>

          
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          
          <Link className="dropdown-item" href="#">Another action</Link>
          <div className="dropdown-divider"></div>
          
          
          
          </div>



        </div>
      </li>
      
    </ul>
    <form className="form-inline pl-4 my-2 my-lg-0">
     <button className=" my-2 my-sm-0" type="submit">
    	
        <Link to={`/login`} className="btn btn-success">Login</Link>
        	
         
    </button>&nbsp;&nbsp;&nbsp;
       
            {/* <Link to={`/signup`} className="btn btn-outline-primary">Signup</Link>
        	 */}
    </form>
  </div>
</nav>

	
	<section className="bg">
	<div className="row">
		<div className="col">
			<div className="gh">
			<h1 className="hj">wELCOME <br/>Mr MLN and Mrs umer i think your are good so be carefull</h1>
</div>
<button className="btnl">find</button>
		</div>
	</div>

</section>
<div className="container">
		<div className="row mt-5">

		<div className="col-5">
		<h1 className="big">Discover events</h1>
<p>Check out events hand-selected by locals.</p>
		</div>


	</div>
	<div className="row">
		<div className="col shd">
			
    <div className="bb">       
<img className="dd" src="https://s38939.pcdn.co/wp-content/themes/hello-theme-child-master/aws/img/home-city-01.webp"/>
<div className="dd"><h1>Tampa Bay</h1></div>

		</div>
</div>
<div class=".ibcoc-block-content">
    <img src="https://s38939.pcdn.co/wp-content/themes/hello-theme-child-master/aws/img/image-with-circles.png.webp"/>
				<div class="ibcoc-block-content-in ">
					<h2 className="dl">Promote your event</h2>
					<p>Build a customizable package to increase exposure to your upcoming event</p>
					<div class="btn-wrap flex">
						<a href="https://www.unation.com/promote" class="btn"><span>Promote event</span></a>
					</div>
				</div>
			</div>
<div className="col-3 offset-1 ty">
			
<div className="card" >
  <img className="card-img-top" src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/12/serious-doctor-hospital.jpg?quality=82&strip=1" alt="Card image cap"/>
  <div className="card-body tt">
    <p className="card-text tl">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="btnl btn-outline-danger" ><Link href="saan.html " className="text-danger"> find</Link></button>
  </div>
</div>

		</div>

		<div className="col-3 offset-1 ty">
			
<div className="card" >
  <img className="card-img-top" alt='ll' src="https://thevideoink.com/wp-content/uploads/2021/11/wysiwyg-uploads_1569586526901-doctor.jpg"  height="200px"/>
  <div className="card-body tt">
    <p className="card-text tl">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className="btnl btn-outline-danger"><Link href="maan.html"  className="text-danger"> find</Link></button>
  </div>
</div>

		</div>


	</div>
<div className="row mt-5">

		<div className="col-3 offset-2">
			<hr/>

		</div>
<div className="col-3">
			<h1>Our SERVICES</h1>

		</div>
<div className="col-3">
			<hr/>

		</div>
	</div>
	<div className="row">
		<div className="col">
			<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" 
			>
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://www.drkastureclinic.com/wp-content/uploads/2022/02/Child-Eye-Exam-Girl.jpg" height="200px" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" height="200px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHJq1Z8TjQdgCEJsUFe4BplihsfND4qrSx0W1pvvKAu4cieAhZn2nEL8e3hkToIpKYx2s&usqp=CAU" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" height="200px" src="https://www.ccteyes.com/wp-content/uploads/2014/03/SNC_9716_Lamb_Retouched_Web-2.jpg" alt="Third slide"/>
    </div>
  </div>
  <Link className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </Link>
  <Link className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </Link>
</div>
		</div>
	</div>
	<div className="row mt-5">

		<div className="col-3 offset-2">
			<hr/>

		</div>
<div className="col-3">
			<h1>Contacts</h1>

		</div>
<div className="col-3">
			<hr/>

		</div>
	</div>
	<div className="row">
		<div className="col">
			 
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><Link href="http://scanfcode.com/category/c-language/">C</Link></li>
              <li><Link href="http://scanfcode.com/category/front-end-development/">UI Design</Link></li>
              <li><Link href="http://scanfcode.com/category/back-end-development/">PHP</Link></li>
              <li><Link href="http://scanfcode.com/category/java-programming-language/">Java</Link></li>
              <li><Link href="http://scanfcode.com/category/android/">Android</Link></li>
              <li><Link href="http://scanfcode.com/category/templates/">Templates</Link></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><Link href="http://scanfcode.com/about/">About Us</Link></li>
              <li><Link href="http://scanfcode.com/contact/">Contact Us</Link></li>
              <li><Link href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</Link></li>
              <li><Link href="http://scanfcode.com/privacy-policy/">Privacy Policy</Link></li>
              <li><Link href="http://scanfcode.com/sitemap/">Sitemap</Link></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <Link>Scanfcode</Link>
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><Link className="facebook"><i className="fa fa-facebook"></i></Link></li>
              <li><Link className="twitter" ><i className="fa fa-twitter"></i></Link></li>
              <li><Link className="dribbble" ><i className="fa fa-dribbble"></i></Link></li>
              <li><Link className="linkedin" ><i className="fa fa-linkedin"></i></Link></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>

		</div>
	</div>
</div>
       </>
       
    )
}