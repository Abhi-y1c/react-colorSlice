import { useState } from "react";
import {useSelector,useDispatch} from "react-redux"
import { addtask } from "./todoSlice";
const App = () => {
const ans=useSelector((state)=>state.todo.task);
const [input,setInput]=useState('');
const dispatch=useDispatch();
const workAdd=()=>{
  dispatch(addtask(input))
}
let sn=0;
const myans=ans.map((key)=>{
  sn++;
  return(
    <tr>
      <td>{sn}</td>
      <td>{key.work}</td>
    </tr>
  )
});
console.log(ans)
  return (
    <div>
      <h1>helo</h1>
      Enter name:<input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}  />
      <button onClick={workAdd}>Click</button>
      <br/>
      {myans}
    </div>
  )
}

export default App;

