
import './App.css';
import { Tasks } from './Component/Tasks';
import {TaskForm} from './Component/TaskForm'
import { useState } from 'react';

function App() {
  const getlocalData=()=>{
    const localData=localStorage.getItem('taskData');
    if(localData){
      return JSON.parse(localData);
    }
    else{
      return [];
    }
  }
  const [mData,setData]=useState(getlocalData());
  const [tName,setTname]=useState();
    const [desc,setDesc]=useState();
    const [due,setDue]=useState(null);
    const [status,setStatus]=useState("pending");
    const [isUpdate,setUpdate] =useState(false);
  
  
  
  return (<>
      <Tasks mData={mData} 
      setData={setData}
      tName={tName}
      setTname={setTname}
      desc={desc}
      setDesc={setDesc}
      due={due}
      setDue={setDue}
      setStatus={setStatus}
      status={status}
      isUpdate={isUpdate}
      setUpdate={setUpdate}
      
    
      />
      <TaskForm mData={mData}
       setData={setData} 
       tName={tName}
       setTname={setTname}
       desc={desc}
       setDesc={setDesc}
       due={due}
       setDue={setDue}
       setStatus={setStatus}
      status={status}
      isUpdate={isUpdate}
      setUpdate={setUpdate}
      />
      </>
  );
}

export default App;
