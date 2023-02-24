import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  

} from "react-router-dom";
import './App.css';
// import Indexc from './components4/Indexc';
// import Signup from './components4/Signup';
// import Signup from './components3/Signup';
// import Login from './components4/Login';
// import Profile from './components4/Profile';
// import Start from './components4/Start';
// import Calculator from './components4/Calculator';
// import Verfy from './components3/Verfy';
// import Message1 from './components3/Message1';
// import Home from './components2/Home';
// import Usersignup from './components2/Usersignup';
// import Verfy from './components2/Verfy';
// import Admindash from './components2/Admindash';
// import Userlogin from './components2/Userlogin';
// import Login from './components1/login';
// import Dash from './components1/Dash';
// import Edit from './components1/Edit';
// import Delete from './components1/Delete';
// import Unation from './components/Unation';
// import Signup from './components/Signup';
// import Appoint from './components/Appoint';
// import Index from './components/Index';
// import Login from './components/Login';
// import Dverfy from './components/Dverfy';
// import Verfy from './components/Verfy';
// import Dr from './components/Dr';
// import Ssignup from './components/Ssignup';
// import Doctor from './components/Doctor';
// import User from './components/User';
// import Hos from './components1/Hos';
import Userl from './components5/Userl';
import Signp from './components5/Signp';
import Passc from './components5/Passc';
import ship from './components5/Shipping';
import Profile from './components5/Profile';
import Shipping from './components5/Shipping';
function App() {
  return (
    <BrowserRouter> 


 
 
    <Routes>
    <Route path="/" element={<Signp />}/>
    <Route path="/pf" element={<Profile />}/>
    <Route path="/login" element={<Userl />}/>
    <Route path="/forgot" element={<Passc/>}/>
    <Route path="/ship" element={<Shipping/>}/>
    {/* <Route path="/index" element={<Indexc />} />
    <Route path="/start" element={<Start />} />
    <Route path="/cal" element={<Calculator />} />
     <Route path="/signup" element={<Signup/>} />
    <Route path="/" element={<Login/>} />
    <Route path="/profile" element={<Profile/>} /> */}
    {/* <Route path="/verfy/:id" element={<Verfy/>} /> */}
    {/* <Route path="/message1/:id" element={<Message1/>} /> */} 

    {/* <Route path="/profile" element={<Profile/>} /> */}
    
    {/* <Route path="/signup" element={<Usersignup />} />
    <Route path="/verfy/:id" element={<Verfy/>} />
    <Route path="/admindash" element={<Admindash/>} />
    <Route path="/login" element={<Userlogin/>} /> */}

    {/* <Route path="/" element={<Hos />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/delete/:id" element={<Delete />} />
    <Route path="/d" element={<Dash />} />
    <Route path="/edit/:id" element={<Edit />} /> */}
    {/* <Route path="/signup" element={<Signup />} />
    <Route path="/user/:id" element={<User />} />
    <Route path="/doctor" element={<Doctor />} />
    <Route path="/index" element={<Index />} />
    <Route path="/dverfy/:id" element={<Dverfy />} />
    <Route path="/login" element={<Login />} />
    <Route path="/appoint" element={<Appoint/>} />
     <Route path="/dr" element={<Dr />} />
    <Route path="/ssignup" element={<Ssignup/>} />
    <Route path="/verfy/:id" element={<Verfy />} /> */}
    </Routes>
 
 
 
 </BrowserRouter>
  );
}

export default App;
