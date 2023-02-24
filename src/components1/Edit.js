import { useEffect } from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function Edit(){

 const u=localStorage.getItem('id')
 
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
    const idd=useParams();
    const GgetUser=async()=> {
        try {
          
          
            let formField=new FormData()
            formField.append('pascode',name)
            formField.append('email',email)
            formField.append('village',village)
            formField.append('img',img)
            
            
           
          
          
            
          await axios({
            url:'http://127.0.0.1:8000/fdget/'+idd.id,
            method:'put',
            data:formField,
            
            
            
          }).then((response)=>{
        console.log(response.data)
        
        alert("updated")
        setstatus("Update successfully");
        setstatus1("");
       window.location.href=`/dash`
  
          });
        
        
        
        } catch (error) {
          setstatus("");
          setstatus1(" invalid creditionals");
        }
      }
    const loadProduct1=async()=>{
    
        try {
            const response1= await axios.get('http://127.0.0.1:8000/fddget/'+idd.id);
          setemail(response1.data.email)
          
     
          console.log(response1.data.totalenroll);
         
          
        
        
      
       
        
        } catch (error) {
          console.error(error);
        }
        
        
       }
       const loadProduct=async()=>{
    
        try {
            const response1= await axios.get('http://127.0.0.1:8000/fdget/'+idd.id);
         setname(response1.data.name);
         setemail(response1.data.email);
         setvillage(response1.data.village);
         setimg(response1.data.img);
     
      
         
          
        
        
      
       
        
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
               
               
                
                <div className="col-4 bg-dark p-5  text-light mt-5 ml-5 mr-3 p-2">
               <h1>Update Employee</h1>
    {status &&<p className="alert alert-success">{status}</p>}
    {status1 &&<p className="alert alert-warning">{status1}</p>}
    <div ><label>Name</label>
    <input type="text" name="name" value={name} onChange={(e)=>setname(e.target.value)} className="form-control"/><br></br>
    </div>
    <div ><label>email</label>
    <input type="text" name="email" value={email} onChange={(e)=>setemail(e.target.value)} className="form-control"/><br></br>
    </div>
    <div ><label>village</label>
    <input type="date" name="village" value={village} onChange={(e)=>setvillage(e.target.value)} className="form-control"/><br></br>
    </div>
    <div ><label>img</label>
    <img src="{img}" height="40" />
    <input type="file" name="img" src={img} onChange={(e)=>setimg(e.target.files[0])} className="form-control"/><br></br>
    </div>
    
    <div>
    <input type="submit" value="update"  onClick={GgetUser} className="form-control btn btn-danger"/><br></br>
    </div>
    
    
    </div>
    



</div>
        </div>
    )
}