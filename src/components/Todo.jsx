import React,{useRef, useState} from "react";

export default function Todo(){
    const [todos,setTodos]=useState([]);
    const inputRef=useRef(null);
    const handleClick=()=>{
        if(inputRef && inputRef.current){
            if(inputRef.current.value){
                setTodos([...todos,inputRef.current.value]);
                inputRef.current.value="";
            }
            else{
                alert("Input can not be empty")
            }
        }
    }
    return(
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={handleClick}>
                Add
            </button>
            <div>
                {todos && todos.map((todo)=>(
                    <p>{todo}</p>
                ))}
            </div>
        </div>
    )
}