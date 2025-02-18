import React,{useState} from "react"
export default function IncDecCounter(){
    const [counterNumber,setCounterNumber]=useState(0);
    const handleClick=(eventType)=>{
        if(eventType == "increment"){
            setCounterNumber((prev)=>prev+1); 
        }
        else if(eventType == "decrement"){
            if(counterNumber>0){
                setCounterNumber((prev)=>prev-1);
            }
            else{
                alert("Counter can not be less than 0")
            }
        }
    }
    return(
       <div>
           <p>{counterNumber}</p>
          <button onClick={()=>handleClick("increment")}>Increment</button>
          <button onClick={()=>handleClick("decrement")}>Decrement</button>
       </div>
    )
}