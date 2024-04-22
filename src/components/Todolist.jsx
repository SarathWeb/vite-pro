import { useState } from "react";
import "./TodoList.css"

let idvalue = 0;

export default function Todolist(){

  const [add,setIsadd] = useState('');

  const [arr,setIsarr] = useState([
    
  ])


  function taskedit(id){

    let edit =  prompt('Edit the value','');
    
 if(edit){

      setIsarr((prev)=>prev.map((val)=>{
        if(val.id == id){
          console.log(val,"val");
            return {...val,name:edit}
        }else{
         return val;
        }
    }))
    }

  }

  


  function taskdelete(id){

    setIsarr((prev)=>{
      return prev.filter(x=>x.id != id)
    })
    
  }
  

  function taskadd(add){

  
    if(add != ''){

      setIsarr([...arr,{id:idvalue++ , name:add}])
    }
 
   
    setIsadd('')

  }


  return (
    <>
    <div className="todoapp">
      <input type="text" placeholder="add item..." onChange={(e)=>setIsadd(e.target.value)} value={add} />
      <button onClick={()=>taskadd(add)}>Add</button>
    </div>
   
    { arr.length != 0 &&
  arr.map((value,index)=>{

     return(
      <div className="addvalue" key={index}> {value.name}
      <div className="subvalue"><button onClick={()=>taskdelete(value.id)}>Delete</button>
      <button onClick={()=>taskedit(value.id)}>Edit</button></div>
      </div>
     ) 

  })}

    </>
  );
};
