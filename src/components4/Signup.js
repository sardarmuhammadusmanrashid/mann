import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

export default function Signup(){


 
    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[pascode,setpascode]=useState("");
    const[password,setpassword]=useState("");
    const[img,setimg]=useState([""]); 
    const[address,setaddress]=useState(""); 
    const[status,setstatus]=useState(""); 
    const[status1,setstatus1]=useState(""); 
    const[error,seterror]=useState(""); 
    const[token,settoken]=useState(""); 
    const GgetUser=async()=> {
      try {
let d=document.getElementById("submit");
d.innerHTML="please wait...";
d.setAttribute("disabled","");
       
        const toke=Math.floor(Math.random()*900000)
        settoken(toke)
          let formField=new FormData()
          formField.append('username',name)
          formField.append('email',email)
          formField.append('passcode',pascode)
          // formField.append('token',toke)
          console.log(name,email,pascode);
         console.log(formField);
        //   formField.append('img',img)
        
          
        await axios({
          url:'http://localhost:5000/',
          method:'post',
          data:formField,
          
          
          
        }).then((response)=>{
          let d=document.getElementById("submit");
          d.innerHTML="Sign Up"
          d.removeAttribute('disabled');
      
      // alert("insert");
      setname("");
      setemail("");
      setimg("");
      setstatus("sign up please login");
      setstatus1("");
    //  window.location.href=`/verfy/${response.data.id}`

        });
      
      
      
      } catch (error) {
         let d=document.getElementById("submit");
          d.innerHTML="Sign Up"
          d.removeAttribute('disabled');
        setstatus("");
        setstatus1(" invalid creditionals");
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
    <h3 class="card-title text-center">Login AnnaSol</h3>
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
                <a href="#" >Forgot password?</a>
                <input type="password"name='name3' value={pascode} onChange={(e)=>setpascode(e.target.value)}   class="form-control form-control-sm" id="exampleInputPassword1"/>
            </div>
            <button type="submit" id="submit" onClick={GgetUser} class="btn1 btn-primary btn-block">Sign up</button>
            
            <div class="sign-up">
                 have an account? <a href="/login">Login</a>
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