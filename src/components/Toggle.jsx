import React,{useState} from "react";

export default function Toggle(){
    const [isLoginState,setisLoginState]=useState(false); // 
    const handleClick=()=>{
        setisLoginState((prev)=>!prev);
    }
    return(
        <div>
            <button onClick={(handleClick)}>{isLoginState?"Login":"Logout"}</button>
        </div>
    )
}