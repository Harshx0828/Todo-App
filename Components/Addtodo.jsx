import { useState } from "react";
function Addtodo({setlist,list,edit}){
 const[todoinput,settext]=useState('');
    
return(
    <>
    <input type="text"  value={todoinput} onChange={(e)=>settext(e.target.value)} />
    <button onClick={()=>{setlist([...list,{id:list.length+1 ,data:todoinput ,finished:false}]);settext('');}}>Add</button>
    </>
)
}
export default Addtodo;