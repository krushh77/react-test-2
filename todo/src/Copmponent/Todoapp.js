import React from 'react'
import { useState } from 'react'


const Todoapp = () => {

const [activity, setactivity] = useState("");
const [todolist, settodolist] = useState([]);

function addingtodo (){
    settodolist((todolist)=>{
        const updated = [...todolist,activity];

        setactivity=("")

        return updated
    })
}

function todochange (i){
    const updateddata = todolist.filter((Eleme,id)=>{
        return i!=id;
    })

    settodolist(updateddata);


}


  return (
    <>
    <h1>Todo list</h1>
    <input typeof='text' placeholder='todo list' value={activity}  onChange={(e)=>setactivity(e.target.value)}/>
    <button onClick={addingtodo}>Add</button>
    <h1>todolist</h1>
    {todolist!=[] && todolist.map((data,i)=>{
      return(
        <p key={i}>
        <div>{data}</div>
        <button onClick={()=>todochange(i)}>remove</button>
        </p>
      )
     
    })}
   



    
    </>
  )
}

export default Todoapp