import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

import { useParams } from 'react-router-dom';
  
 
export default function Dverfy(){
    const[name,setname]=useState("");
    const[status,setstatus]=useState("");
    const[status1,setstatus1]=useState("");
let id=useParams();
    
const GgetUser=async()=> {
            


    try {
        const response1= await axios.get('http://127.0.0.1:8000/fdverify/'+id.id+'/'+name);
        setstatus("Succesfully verifications");
        setstatus1("");
       window.location.href='/dr'
     
      
    
    
  
   
    
    } catch (error) {
      setstatus("");
      setstatus1("Invalid creditionals");
    }
    
 }
    


  
    return(
        <div className="contaner">
            <div className="row">
                <div className="col-3">


                    
                </div>
            <div className="col-5 bg-dark p-5 m-5 text-light mr-3">
           <h1>Otp here</h1>

           <div ><label>Name</label>
<input type="text" name="name" value={name} onChange={(e)=>setname(e.target.value)} className="form-control"/><br></br>
</div>
<div>
<input type="submit" name="name" onClick={GgetUser} className="form-control btn btn-danger"/><br></br>
</div>



</div></div>
        </div>
    )
}