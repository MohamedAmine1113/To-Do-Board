import React , {useState} from 'react'

const InputArea = ( {tasklist , setTasklist}) => {

    const [inputText, setInputText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputText.trim() === "") {
            return alert('Enter a task');
        }
        // Add the new task to the tasklist
        setTasklist([...tasklist, inputText]);
        // Clear the input field
        setInputText("");
    }
    
  return (
    <div>
        <h1 className='text-[30px] font-bold text-center mb-[20px]'>To-Do-Board</h1>
        <form className='flex flex-col items-center justify-center gap-[20px]' >
            <input 
                className='h-10 w-80 border-[1px] border-black rounded-[6px] p-[5px] '
                type="text" 
                placeholder="Add a new task" 
                value={inputText} 
                onChange={(e) => setInputText(e.target.value)} 
            />
            <button 
                type="submit" 
                onClick={handleSubmit}
                className='h-10 w-50 bg-black text-white hover:bg-white hover:text-black border-[1px] border-black rounded-[6px]  cursor-pointer'
            >Add Task</button>
        </form>
    </div>
  )
}

export default InputArea