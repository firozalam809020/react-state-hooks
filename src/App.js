import React,{useState} from "react";
// useState=> useState is a hook which is used to manage states of react.
// hooks are predefined funtion of react.
import "./style.css";

export default function App() {
  // conditional statement under return we will use ? : 
  // ? true => do something
  // : false => do something
  let[name,setName] = useState('monday')
  let[state,setstate] = useState(true)
  function changeName(){
    // how to more than one state change in a particular event.
    setName("tuesday")
    setstate(false)
  }
  
  return (
    <div>
        <button onClick={changeName}>Change name</button>
        <button onClick={()=>{setName('monday'),setstate(true)}}>reset</button>
        {/* to write inline event and manage state you have write in arrow         function. */}
        <div>{name}</div>
        {
          state
          ?<div style={{backgroundColor:"red"}}>when there is monday</div>
          :<div style={{backgroundColor:"yellow"}}>when there is tuesday</div>
        }
    </div>
  );
}
