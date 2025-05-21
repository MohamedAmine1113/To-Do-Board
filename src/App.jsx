import React, {useState} from 'react';
import InputArea from './Components/InputArea';
import PublishArea from './Components/PublishArea';
function App() {

   const [tasklist, setTasklist] = useState([]);
   console.log(tasklist);

  return (
    <div className='flex flex-col items-center justify-start h-screen mt-10'>
      <InputArea tasklist = {tasklist} setTasklist={setTasklist}/>
      <PublishArea tasklist = {tasklist} setTasklist={setTasklist}/>
    </div>
  )
}

export default App
