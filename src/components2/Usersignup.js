import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
export default function Usersignup(){


 
    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[img,setimg]=useState([""]); 
    const[address,setaddress]=useState(""); 
    const[status,setstatus]=useState(""); 
    const[status1,setstatus1]=useState(""); 
    const[token,settoken]=useState(""); 
    const GgetUser=async()=> {
      try {
        console.log(name,email,img);
        const toke=Math.floor(Math.random()*900000)
        settoken(toke)
          let formField=new FormData()
          formField.append('pascode',name)
          formField.append('email',email)
          formField.append('token',toke)
          
         
        //   formField.append('img',img)
        
          
        await axios({
          url:'http://127.0.0.1:8000/fddList',
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
    
    

    return(
        <div className="contaner">
            <div className="row">
                <div className="col-3">


                    
                </div>
            <div className="col-5 bg-dark p-5 m-5 text-light mr-3">
           <h1>Signup here</h1>
{status &&<p className="alert alert-success">{status}</p>}
{status1 &&<p className="alert alert-warning">{status1}</p>}
<div ><label>Name</label>
<input type="text" name="name" value={name} onChange={(e)=>setname(e.target.value)} className="form-control"/><br></br>
</div>
<div ><label>email</label>
<input type="text" name="email" value={email} onChange={(e)=>setemail(e.target.value)} className="form-control"/><br></br>
</div>

{/* <div ><label>img</label>
<input type="file" name="img" src={img} onChange={(e)=>setimg(e.target.files[0])} className="form-control"/><br></br>
</div> */}

<div>
<input type="submit" name="name" onClick={GgetUser} className="form-control btn btn-danger"/><br></br>
</div>


</div></div>
        </div>
    )
}