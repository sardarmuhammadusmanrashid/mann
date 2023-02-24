import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

export default function Profile(){


 
    const[name,setname]=useState("");
    const[name11,setname11]=useState([""]);
    const[email,setemail]=useState("");
    const[pascode,setpascode]=useState("");
    const[password,setpassword]=useState("");
    const[img,setimg]=useState([""]); 
    const[address,setaddress]=useState(""); 
    const[status,setstatus]=useState(""); 
    const[status1,setstatus1]=useState(""); 
    const[error,seterror]=useState(""); 
    const[token,settoken]=useState(""); 
    const id=localStorage.getItem('id');
    const GgetUser=async()=> {
      try {
let d=document.getElementById("submit");
d.innerHTML="please wait...";
d.setAttribute("disabled","");
        console.log(name,email,img);
        const toke=Math.floor(Math.random()*900000)
        settoken(toke)
          let formField=new FormData()
          formField.append('sal',name)
          formField.append('fname',id)
       
          
         console.log(formField);
        //   formField.append('img',img)
        
          
        await axios({
          url:'http://127.0.0.1:8000/fdList1',
          method:'post',
          data:formField,
          
          
          
        }).then((response)=>{
          let d=document.getElementById("submit");
          d.innerHTML="Sign Up"
          d.removeAttribute('disabled');
      console.log(response.data)
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
    const loadProduct=async()=>{
 
        try {
            const response1= await axios.get('http://127.0.0.1:8000/fdget/'+id);
          setname(response1.data.fname)
          setemail(response1.data.fpass)
          setpascode(response1.data.passcode)
          
          
         
          
        
        
      
       
        
        } catch (error) {
          console.error(error);
        }
        
        
       }
       const loadProduct11=async()=>{
 
        try {
            const response1= await axios.get('http://127.0.0.1:8000/Notificationfetch/'+id);
          setname11(response1.data);
          console.log(response1.data);
         
          
          
         
          
        
        
      
       
        
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
            <div className="col-3 mt-5">


                
            </div>
        <div className="col-5 mr-3 " >
       



<div class="global-container mt-5">
<div class="card login-form">
<div class="card-body">
    <h3 class="card-title text-center">Profile</h3>
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
                <input type="text"name='name2' value={email} onChange={(e)=>setemail(e.target.value)}   class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp"/>
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
{
name11.map((items,i)=>{
    return(

<div class="card" >

  <div class="card-title">
    <p class="card-text">{items.sal}</p>
  </div>
  <div class="card-body">
    <p class="card-text">{items.fname}</p>
  </div>
</div>



   )
  })
  
  }

</div></div>
    </div>
    )
}