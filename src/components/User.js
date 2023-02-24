import { useEffect } from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function User(){

 const u=localStorage.getItem('id')
 
   const id=useParams()
    const[email,setemail]=useState("");
    const[name,setname]=useState("");
    const[error,seterror]=useState("");
    const[status,setstatus]=useState("");
    const[status1,setstatus1]=useState("");
    const[book,setbook]=useState("");
    const GgetUser=async()=> {
        try {
          
          
        
            let formField=new FormData()
            formField.append('users',u)
            formField.append('dusers',id.id)
            
            
           
          //   formField.append('img',img)
          
            
          await axios({
            url:'http://127.0.0.1:8000/bList',
            method:'post',
            data:formField,
            
            
            
          }).then((response)=>{
        console.log(response.data)
        alert("insert");
        
        setstatus("Appoinment booked");
        setstatus1("");
       window.location.href=`/verfy/${response.data.id}`
  
          });
        
        
        
        } catch (error) {
          setstatus("");
          setstatus1(" invalid creditionals");
        }
      }
    const loadProduct1=async()=>{
    
        try {
            const response1= await axios.get('http://127.0.0.1:8000/fddget/'+id.id);
          setemail(response1.data.email)
          
     
          console.log(response1.data.totalenroll);
         
          
        
        
      
       
        
        } catch (error) {
          console.error(error);
        }
        
        
       }
       const loadProduct=async()=>{
    
        try {
            const response1= await axios.get('http://127.0.0.1:8000/appBook/'+u+'/'+id.id);
          if(response1.data.bool==true){
            setbook("success")
          }
          
     
      
         
          
        
        
      
       
        
        } catch (error) {
          console.error(error);
        }
        
        
       }
      
    
    useEffect(()=>{
       
       
       loadProduct1();

       loadProduct();

     
    },[])
    
    

    return(
        <div className="contaner">
            <div className="row">
                <div className="col-3">


                    
                </div>
            <div className="col-5 mr-3 " >
           
            {status &&<p className="alert alert-success">{status}</p>}
{status1 &&<p className="alert alert-warning">{status1}</p>}

<div ><label>email</label>
<input type="text" name="email" value={email} onChange={(e)=>setemail(e.target.value)} className="form-control"/><br></br>
</div>

<div>
  {book!='success' && <button onClick={GgetUser} className="form-control btn btn-danger">booked</button>
 

    }
     {book==='success' && <button onClick={GgetUser} disabled className="form-control btn btn-danger">Already Booked</button>
 

}
</div>


</div></div>
        </div>
    )
}