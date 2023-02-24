import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './Login.css';
export default function Message1(){

 
 
   
    const[email,setemail]=useState("");


    const[email1,setemail1]=useState("");

    const[name,setname]=useState("");
    const[pascode,setpascode]=useState("");
    const[pascode1,setpascode1]=useState([""]);
    const[products,setproducts]=useState([""]);
    const[products1,setproducts1]=useState([""]);
    const[status,setstatus]=useState("");
    const[status1,setstatus1]=useState("");
    const[error,seterror]=useState("");
    let id=localStorage.getItem('id');
    let uid=useParams();
    const GgetUser=async()=> {
      try {

          let formField=new FormData()
          formField.append('sender',id)
          formField.append('reciver',uid.id)
          formField.append('msg',pascode)
         
          
         console.log(formField);
        //   formField.append('img',img)
        
          
        await axios({
          url:'http://127.0.0.1:8000/mdList',
          method:'post',
          data:formField,
          
          
          
        }).then((response)=>{
        
      alert("send");
      setpascode("");
      
      setstatus("message send");
      setstatus1("");
      window.location.href=`/message/${uid.id}`
 

        });
      
      
      
      } catch (error) {
        
        setstatus("");
        setstatus1(" invalid creditionals");
      }
    }
    
                

     const loadProduct=async()=>{
 
        try {
            const response1= await axios.get('http://127.0.0.1:8000/Mrfetch/'+id+'/'+uid.id);
          
          setproducts1(response1.data)
          
          
         
          
        
        
      
       
        
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
  
     
    },[])
    
    
    return(
        <div className="contaner">
            <div className="row">
      
               
            {status && <p className="alert alert-success">{status}</p>}
{status1 && <p className="alert alert-danger">{status1}</p>}    
           






<div className="col-4">

{
products.map((items,i)=>{
    return(


<div class="card" >
  
  <div class="card-title">
  
  </div>
  <Link to={`/message1/${items.id}`}>
  <div class="card-body">
    <p class="card-text">{items.username}</p>
  </div></Link>
</div>

)
})

}

</div>
<div class="col-7 ">

<div class="row">




<div class="col-7 m-2">
{
products1.map((items,i)=>{
    return(
<p class="alert alert-success m-3" id="ttt">{items.msg} <span ></span></p>

    )
  })
    }

</div>


<div class="col-8 offset-2 ">
<div></div>
<p class="alert alert-danger pt-2 m-3" id="ttt">kanomano <span ></span></p>



</div>




</div>

<form method="post">

<textarea cols="20" name="text" rows="3" value={pascode} onChange={(e)=>setpascode(e.target.value)} class="form-control"></textarea>


<button type="submit" id="submit" onClick={GgetUser} class="btn btn-primary btn-block">Send message</button>
            
</form>
</div>





</div>


</div>
      
    )
}