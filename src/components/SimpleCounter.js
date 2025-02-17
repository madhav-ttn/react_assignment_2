import React,{useRef, useState} from "react"
export default function SimpleCounter(){
    const [counterNumber,setCounterNumber]=useState(0);
    const timer=useRef(null);
    const handleClick=(eventType)=>{
        if(eventType == "start"){
             timer.current=setInterval(()=>{
                 setCounterNumber((prev)=>prev+1);
             },1000)
        }
        else if(eventType == "pause"){
            if(timer && timer.current)clearInterval(timer.current);
        }
        else if(eventType == "reset") {
            if(timer && timer.current)
                {
                    clearInterval(timer.current);
                    setCounterNumber(0);
                }    
        }
    }
    return(
       <div>
           <p>{counterNumber}</p>
          <button onClick={()=>handleClick("start")}>Start</button>
          <button onClick={()=>handleClick("pause")}>Pause</button>
          <button onClick={()=>handleClick("reset")}>Reset</button>
       </div>
    )
}