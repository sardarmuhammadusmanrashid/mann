import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import {createInstance} from "./web3_connection";

// import {addFunction, subFunction, mulFunction, divFunction} from './web3_connection'
 
export default function Calculator({account, contractInstance}){
  
 
   
    const[email,setemail]=useState("");
    const[name,setname]=useState("");
    const[name1,setname1]=useState("");
    const[error,seterror]=useState("");
    const[accountt,setaccountt]=useState("");
    const[account1,setaccount1]=useState("");
    const GgetUser=async()=> {
     
      const dp=parseInt(name);
      const dp1=parseInt(email);
      console.log(dp+dp1);
      setname1(dp+dp1);
        
       
       
        
         
      }
      const GgetUser1=async()=> {
        const dp=parseInt(name);
        const dp1=parseInt(email);
        console.log(dp+dp1);
        setname1(dp-dp1);
         
         
          
           
        }
        const loadProduct=async()=>{
 try{
            const {instance, accounts} = await  createInstance();
            setaccountt(instance);
            setaccount1(accounts);
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
                <div className="col-3">


                    
                </div>
            <div className="col-5 mr-3 " >
           


<div ><label>Enter number1</label>
<input type="text" name="email" value={email} onChange={(e)=>setemail(e.target.value)} className="form-control"/><br></br>
</div>
<div ><label>Enter number 2</label>
<input type="text" name="name" value={name} onChange={(e)=>setname(e.target.value)} className="form-control"/><br></br>
</div>
<div ><label>Enter number 2</label>
<input type="text" name="name" value={name1} onChange={(e)=>setname1(e.target.value)} className="form-control"/><br></br>
</div>
<div>
<input type="submit" name="name" onClick={GgetUser} value="Plus" className="form-control btn1 btn-danger"/><br></br>
</div>
<div>
<input type="submit" name="name1" onClick={GgetUser1} value="Minus" className="form-control btn1 btn-danger"/><br></br>
</div>

</div></div>
        </div>
    )
}