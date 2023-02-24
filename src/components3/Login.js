import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
export default function Login(){

 
 
   
    const[email,setemail]=useState("");
    const[name,setname]=useState("");
    const[error,seterror]=useState("");
    const GgetUser=async()=> {
      try {
          let formField=new FormData()
          formField.append('email',email);
          formField.append('name',name);
        
          
        await axios({
          url:'http://127.0.0.1:8000/dLogins',
          method:'post',
          data:formField,
          
          
          
        }).then((response)=>{
      console.log(response.data)
      alert('success')
      
      if(response.data.bool==true){
        localStorage.setItem('user',true)
        localStorage.setItem('id',response.data.id)
        
      }
     
        
      const db=localStorage.getItem('id')
      alert(db)
      setemail("");
      setname("");
     
      
        });
    
      
  
      
      } catch (error) {
       
        seterror("invalid creditionals")
        
      }
    }
    
  const dl=localStorage.getItem('user')
if(dl==='true'){
  window.location.href='/profile';
}
    return(
      <div className="contaner">
            <div className="row">
                <div className="col-3">


                    
                </div>
            <div className="col-5 mr-3 " >
           
{error && <p className="alert alert-danger">{error}</p>}

<div ><label>email</label>
<input type="text" name="email" value={email} onChange={(e)=>setemail(e.target.value)} className="form-control"/><br></br>
</div>
<div ><label>passsword</label>
<input type="text" name="name" value={name} onChange={(e)=>setname(e.target.value)} className="form-control"/><br></br>
</div>

<div>
<input type="submit" name="name" onClick={GgetUser} className="form-control btn btn-danger"/><br></br>
</div>


</div></div>
        </div>
    )
}