import { useState } from 'react'
import { X } from 'lucide-react';
const App = () => {

  // State management
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [task, setTask] = useState([])

  // Form handling
  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, detail });
    setTask(copyTask);
    console.log(task)

    setTitle('');
    setDetail('');
  }

    // Delete Note
    const deleteNote=(idx)=>{
      const copyTask= [...task];
      copyTask.splice(idx,1)
      setTask(copyTask)
    }

  return (
    <div className="h-screen lg:flex bg-black text-white">

      <form
        onSubmit={submitHandler}
        className='flex gap-4 flex-col lg:w-1/2 items-start p-10'>

        <h1 className="font-bold text-3xl">Add Notes</h1>

        {/* Title */}

        <input

          type="text"
          className='px-5 w-full py-2 font-medium outline-none border-2 rounded'
          placeholder='Enter Notes Heading'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}

        />

        {/* Detail */}

        <textarea

          type="text"
          className='px-5 w-full py-2 font-medium outline-none h-32 border-2 rounded'
          placeholder='Enter Details'
          value={detail}
          onChange={(e) => {
            setDetail(e.target.value);
          }}

        ></textarea>

        {/* Add notes */}

        <button className='px-5 w-full py-2 active:scale-95 font-medium outline-none border-2 rounded bg-white text-black'>Add Note</button>
      </form>

      {/* Recent Notes */}

      <div className="p-10 lg:w-1/2  lg:border-l">
        <h1 className="font-bold text-3xl">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto">
          {task.map(function (elem, idx) {
            return <div key={idx} className="flex flex-col justify-between items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">

              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='font-medium text-sm leading-tight mt-2'>{elem.detail}</p>
              </div>
              <button 
              onClick={()=>{
                deleteNote(idx)
              }} 
              className='w-full cursor-pointer active:scale-95 bg-red-600 py-1 text-white text-xs rounded font-bold'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App