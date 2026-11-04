import { useState } from "react";
import Todo from "./Todo";
import Addtodo from "./Addtodo";
import '../src/index.css'
function Todolist(){
const [edit,setedit]=useState(null);
const [edittext, setedittext] = useState('');
const [del,setdel]=useState([]);
const dummylist=[
]
const[list,setlist]=useState(dummylist);     
const sortedlist = [...list].sort((a, b) => {
  return a.finished - b.finished;
});
//{* [...list].sort(a,b)=>{return a.}   *}
const listdata = sortedlist.map((e) => {
if(del.find((element)=>element==e.id)){
  console.log('deleted element found');
}
 else  if(e.id!=edit)
  return(<>
    <li><input
  type="checkbox"
  checked={e.finished}
  onChange={() => {
    setlist(
      list.map((todo) =>
        todo.id === e.id
          ? { ...todo, finished: !todo.finished}
          : todo
      )
    );
  }}
/>
       {e.data}
   <button onClick={() => {
  setedit(e.id);
  setedittext(e.data);
}}>
  Edit
</button>
<button onClick={()=>{setdel([...del,e.id])}}>Delete</button></li>
    </>)
else{
  return(
    <>
     <li>
    <input
  type="text"
  value={edittext}
  onChange={(event) => setedittext(event.target.value)}
/>
    <button onClick={() => {
  setlist(
    list.map((todo) =>
      todo.id === e.id
        ? { ...todo, data: edittext }
        : todo
    )
  );
  setedit(null);
}}>
  Save
</button></li>
    </>
  )
}
});
return(
<>
<Addtodo setlist={setlist} list={list}/>
<Todo tododata={listdata} edit={edit}/>

</>
)}
export default Todolist;