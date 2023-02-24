import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import log from './d.jpg';
export default function Start(){

 
 
   function move(){
    window.location.href='/index';
   }
   
   setTimeout(move,3000);
    return(
      <div className="contaner">
          <img src={log} alt="srry" />
        </div>
    )
}