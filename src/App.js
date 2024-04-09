import React from 'react'
import { useState } from 'react';
import {useDispatch,useSelector} from "react-redux"
import { colorChange } from './colorSlice';

const App = () => {
  const dispatch=useDispatch("");
  const [color,setColor]=useState("");
  const myclr= useSelector((state)=>(state.mycolor.bgcolor));

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Wellcome ColorChange slice</h1>
      <center>
      <input type='text' placeholder='enter color name' value={color} onChange={(e)=>{setColor(e.target.value)}}/>
      <button onClick={()=>{dispatch(colorChange(color))}}>Change</button>
      <div style={{width:"500px",height:"400px" , backgroundColor:myclr}}>

      </div>
      </center>
    </div>
  )
}

export default App;

