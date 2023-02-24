import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
export default function Admindash(){

    const[next,setnext]=useState(); 
    const[previous,setprevious]=useState();
  
 
    const[name,setname]=useState("");
    const[email,setemail]=useState("");
    const[password,setpassword]=useState("");
    const[img,setimg]=useState([""]); 
    const[products,setproducts]=useState([""]); 
    const[address,setaddress]=useState(""); 
    const[status,setstatus]=useState(""); 
    const[status1,setstatus1]=useState(""); 
    const[token,settoken]=useState(""); 
    const id=localStorage.getItem('id');
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
          url:'http://127.0.0.1:8000/',
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
    
    const loadProduct=async()=>{
 
        try {
            const response1= await axios.get('http://127.0.0.1:8000/fddget/'+id);
          setname(response1.data.pascode)
          setemail(response1.data.email)
          
          
         
          
        
        
      
       
        
        } catch (error) {
          console.error(error);
        }
        
        
       }
      
       const loadProduct1=async()=>{
    
        try {
            const response1= await axios.get('http://127.0.0.1:8000/fddList');
            setnext(response1.data.next);
            setprevious(response1.data.previous)
            setproducts(response1.data.results)
          
     
          console.log(response1.data.totalenroll);
         
          
        
        
      
       
        
        } catch (error) {
          console.error(error);
        }
        
        
       }
       const paginationhandler=(url)=>{
        try{

            axios.get(url).then((response1)=>{
                setnext(response1.data.next);
                setprevious(response1.data.previous)
                setproducts(response1.data.results)
            })
        }
        catch(error){

        }
       }

      
    
    useEffect(()=>{
       
       loadProduct();
       loadProduct1();
     
    },[])
    
    

    return(
        <div className="contaner">
            <div className="row">
                
            <div className="col-3 bg-dark p-5 m-5 text-light mr-3">
           <h1>Your Profile</h1>
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
<input type="submit" value="update"  onClick={GgetUser} className="form-control btn btn-danger"/><br></br>
</div>


</div>

<h1>Booked appoinment</h1>
{status &&<p className="alert alert-success">{status}</p>}
{status1 &&<p className="alert alert-warning">{status1}</p>}



{
products.map((items,i)=>{
    return(
<div className="col-4">




<div class="card" >
  <img class="card-img-top" src="" alt="Card image cap"/>
  <div class="card-title">
    <p class="card-text">{items.token}</p>
  </div>
  <div class="card-body">
    <p class="card-text">{items.email}</p>
  </div>
</div>


</div>

    )
})

}



</div>
<nav aria-label="Page navigation example">
  <ul class="pagination">
    {previous &&
    <li class="page-item"><button class="page-link" onClick={()=>paginationhandler(previous)} >Previous</button></li>
}
    
    {next &&
    <li class="page-item"><button class="page-link" onClick={()=>paginationhandler(next)} >next</button></li>
}
  </ul>
</nav>
        </div>
    )
}