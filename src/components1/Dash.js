import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import './Dash.css';
import { Link } from "react-router-dom";
export default function Dash(){


 
    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[village,setvillage]=useState("");
    const[password,setpassword]=useState("");
    const[img,setimg]=useState([""]); 
    const[products,setproducts]=useState([""]); 
    const[productss,setproductss]=useState([""]); 
    const[address,setaddress]=useState(""); 
    const[status,setstatus]=useState(""); 
    const[status1,setstatus1]=useState(""); 
    const[token,settoken]=useState(""); 
    const id=localStorage.getItem('id');
    const GgetUser=async()=> {
      try {
        // console.log(name,email,img);
        // const toke=Math.floor(Math.random()*900000)
        // settoken(toke)
          let formField=new FormData()
          formField.append('pascode',name)
          formField.append('email',email)
          formField.append('village',village)
          formField.append('img',img)
          
          
         
        //   formField.append('img',img)
        
          
        await axios({
          url:'http://127.0.0.1:8000/',
          method:'post',
          data:formField,
          
          
          
        }).then((response)=>{
      console.log(response.data)
      alert("insert");
      setname("");
      setemail("");
      setimg("");
      setstatus("sign up please login");
      setstatus1("");
     window.location.href=`/verfy/${response.data.id}`

        });
      
      
      
      } catch (error) {
        setstatus("");
        setstatus1(" invalid creditionals");
      }
    }
    
    const loadProduct=async()=>{
 
        try {
            const response1= await axios.get('http://127.0.0.1:8000/fdget/'+id);
          setname(response1.data.pascode)
          setemail(response1.data.email)
          
          
         
          
        
        
      
       
        
        } catch (error) {
          console.error(error);
        }
        
        
       }
      
       const loadProduct1=async()=>{
    
        try {
            const response1= await axios.get('http://127.0.0.1:8000/bList');
          setproducts(response1.data)
          
     
          console.log(response1.data.totalenroll);
         
          
        
        
      
       
        
        } catch (error) {
          console.error(error);
        }
        
        
       }
       const loadProduct12=async()=>{
    
        try {
            const response1= await axios.get('http://127.0.0.1:8000/Mrfetch/'+id);
          setproductss(response1.data)
          
     
          console.log(response1.data.totalenroll);
         
          
        
        
      
       
        
        } catch (error) {
          console.error(error);
        }
        
        
       }
      
    
    useEffect(()=>{
       
      loadProduct1();
     
    },[])
    
    

    return(
        
        <div   className="contaner">
            <nav  className="navbar navbar-expand-lg navbar-light  bg-light">
  <a  className="navbar-brand" href="#">Navbar</a>
  <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span  className="navbar-toggler-icon"></span>
  </button>

  <div  className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul  className="navbar-nav mr-auto">
    
     
      
     {/* <a  className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div  className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a  className="dropdown-item" href="#">Action</a>
          <a  className="dropdown-item" href="#">Another action</a>
          <div  className="dropdown-divider"></div>
          <a  className="dropdown-item" href="#">Something else here</a> */}
        {/* </div> */}
    </ul>
   
  </div>
</nav>

	<div  className="container-fluid">
		<div  className="row ">

		<div  className="col-3  side" >


<div  className="humburger-items">
	
<input type="checkbox" name=""/>
<div  className="humberger-line">
	
	<span  className="line line1"></span>
	<span  className="line line2"></span>
	<span  className="line line3"></span>
</div>
<div  className=" menu-items bg-secondary bg-light" >
				<div  className="bg-primary text-light p-4 m-2">Home <i  className="bi  bi-messenger"></i></div>
			<div  className="bg-secondary text-light p-4 m-2">About <i  className="bi bi-messenger"></i>
				</div>
			<div  className="bg-secondary text-light p-4 m-2">Gallery <i  className="bi bi-messenger"></i>
				</div>
				<div  className="bg-secondary text-light p-4 m-2">Notification <i  className="bi  bi-messenger"></i>
				</div>
				<div  className="bg-secondary text-light p-4 m-2">Contacts <i  className="bi  bi-messenger"></i>
				</div></div>
				</div>
			</div>
	


		
<div  className="col-3 mt-4">
	<div  className="card" >
  <div  className="card-body bg-primary">
  <h3>{products.length}</h3>
  </div>
</div>
	
</div>
<div  className="mt-5 col-3">
	<div  className="card">
  <div  className="card-body">
  <div  className="card-body bg-primary">
  <h3>200rp</h3>
  </div>
</div>
	
</div>
<div  className="col-3">
	<div  className="card" >
  <div  className="card-body">
  <div  className="card-body bg-primary">
  <h3>200rp</h3>
  </div>
</div>
	
</div>



		</div>
	</div>


</div>


</div>
</div>
    )
}