import React from 'react'

const PublishArea = ({tasklist , setTasklist}) => {
  
  return (
    <div className='w-full grid grid-cols-3 gap-[20px] mt-[20px] p-5'>
        {tasklist.map((task,index) => {
          return(
            <div key={index} className='font-bold bg-gray-200 text-black flex flex-row justify-between items-center p-5 rounded-[6px]'>
              <p >{task}</p>
              <button 
                  className=' border-[1px] border-black rounded-[6px] p-[5px] cursor-pointer hover:bg-red-600'
                  onClick={()=>{
                     setTasklist((currentList) => currentList.filter((_, i) => i !== index));
                  }}
                >
                Delete
              </button>
            </div> 
          )
        })}
    </div>
  )
}

export default PublishArea