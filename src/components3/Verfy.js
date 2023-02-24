import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Login.css';
export default function Verfy(){

 
 
   
    const[email,setemail]=useState("");
    const[name,setname]=useState("");
    const[status,setstatus]=useState("");
    const[status1,setstatus1]=useState("");
    const[error,seterror]=useState("");
    let id=useParams();
    
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
        
    return(
        <div className="contaner">
            <div className="row">
      
                <div className="col-3 mt-5">
         
                    
                </div>
            <div className="col-5 mr-3 " >
           




<div class="global-container mt-5">
	<div class="card login-form">
	<div class="card-body">
		<h3 class="card-title text-center">Verification AnnaSol</h3>
     
    <p class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holla!</strong>Please Check Your Mail Box
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</p>



{status && <p className="alert alert-success">{status}</p>}
{status1 && <p className="alert alert-danger">{status1}</p>}
		<div class="card-text">
			
			
			<form method="post">
			
				<div class="form-group">
					<label for="exampleInputEmail1">Enter Code</label>
                    
					<input type="text"  name="name" value={name} onChange={(e)=>setname(e.target.value)} class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp"/>
				</div>
			
				<button type="submit"id='submit' onClick={GgetUser} class="btn btn-primary btn-block">Activate</button>
				
				<div class="sign-up">
					Don't have an account? <a href="/signup">Create One</a>
				</div>
			</form>
		</div>
	</div>
</div>
</div>

</div></div>
        </div>
    )
}