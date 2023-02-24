import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  

} from "react-router-dom";
import { useParams } from 'react-router-dom';
import './Login.css';
export default function Profile(){

 
 
   
    const[email,setemail]=useState("");


    const[email1,setemail1]=useState("");

    const[name,setname]=useState("");
    const[pascode,setpascode]=useState("");
    const[pascode1,setpascode1]=useState([""]);
    const[products,setproducts]=useState([""]);
    const[status,setstatus]=useState("");
    const[status1,setstatus1]=useState("");
    const[error,seterror]=useState("");
    let id=localStorage.getItem('id');
    
    const GgetUser=async()=> {
                
    
    
      try {
        let d=document.getElementById("submit");
d.innerHTML="please wait...";
d.setAttribute("disabled","");
          const response1= await axios.get('http://127.0.0.1:8000/fdFilter/'+id.id+'/'+name);
          setstatus("Succesfully verified");
          setstatus1("");
        
          d.innerHTML="Activate"
          d.removeAttribute('disabled');
         window.location.href='/login'
       
        
      
      
    
     
      
      } catch (error) {
        setstatus("");
        setstatus1("Invalid creditionals");
        let d=document.getElementById("submit");
        d.innerHTML="Activate"
        d.removeAttribute('disabled');
      }
      
      
     }






     const GgetUser1=async()=> {
                
        try {
           
                      let formField=new FormData()
                    
                      formField.append('text',email1)
                      formField.append('img',pascode1)
                      formField.append('fname',id)
                     
                      
                    
                    
                      
                    await axios({
                      url:'http://127.0.0.1:8000/pdList',
                      method:'post',
                      data:formField,
                      
                      
                      
                    }).then((response)=>{
                     
                  alert("insert");
                 
                //   setstatus("post upload");
                //   setstatus1("");
            
                    });
                  
                  
                  
                  } catch (error) {
                   
                     
                    alert("sorry");
                  }
                }
                
                

     const loadProduct=async()=>{
 
        try {
            const response1= await axios.get('http://127.0.0.1:8000/fdget/'+id);
          setname(response1.data.username)
          setemail(response1.data.email)
          setpascode(response1.data.passcode)
          
          
         
          
        
        
      
       
        
        } catch (error) {
          console.error(error);
        }
        
        
       }
      
       const loadProduct11=async()=>{
 
        try {
            const response1= await axios.get('http://127.0.0.1:8000');
          
          setproducts(response1.data)
          
          
         
          
        
        
      
       
        
        } catch (error) {
          console.error(error);
        }
        
        
       }
      
      
    
    useEffect(()=>{
       
       loadProduct();
       loadProduct11();
      
     
    },[])
    
    
    return(
        <div className="contaner">
            <div className="row">
      
               
            <div className="col-5 m-3 " >
           




<div class="global-container mt-5">
	<div class="card login-form">
	<div class="card-body">
		<h3 class="card-title text-center">Profile</h3>
     
    <p class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holla!</strong>Welcome Back....
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</p>



{status && <p className="alert alert-success">{status}</p>}
{status1 && <p className="alert alert-danger">{status1}</p>}
		<div class="card-text">
			
			
			<form method="post">
			
            <div class="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input type="text" name='name1' value={name} onChange={(e)=>setname(e.target.value)}  class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email"name='name2' value={email} onChange={(e)=>setemail(e.target.value)}   class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                
                <input type="password"name='name3' value={pascode} onChange={(e)=>setpascode(e.target.value)}   class="form-control form-control-sm" id="exampleInputPassword1"/>
            </div>
            <button type="submit" id="submit" onClick={GgetUser} class="btn btn-primary btn-block">Update</button>
            
           
           
			</form>
		</div>
        <div>
        <form method="post" encType="multipart/form-data">
			
           
            <div class="form-group">
                <label for="exampleInputEmail1">Enter Text</label>
                <input type="text"name='name2' value={email1} onChange={(e)=>setemail1(e.target.value)}   class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                
                <input type="file"name='name3' src={pascode1} onChange={(e)=>setpascode1(e.target.files[0])}   class="form-control form-control-sm" id="exampleInputPassword1"/>
            </div>
            <button type="submit" id="submit" onClick={GgetUser1} class="btn btn-primary btn-block">Update</button>
            
           
           
			</form>
	</div>
</div>
</div>
</div>

</div>

<div className="col-4">
{
products.map((items,i)=>{
    return(
<div className="col-4">




<div class="card" >
  
  <div class="card-title">
  
  </div>
  <Link to={`/message1/${id}`}>
  <div class="card-body">
    <p class="card-text">{items.email}</p>
  </div></Link>
</div>


</div>

    )
})

}
</div>


</div>
        </div>
    )
}