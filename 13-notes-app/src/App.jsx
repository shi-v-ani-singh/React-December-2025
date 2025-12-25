import { useState } from 'react'
const App = () => {

  // Form handling
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(detail);
    setTitle('');
    setDetail('');
  }

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')

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
          onChange={(e)=>{
            setTitle(e.target.value);
          }}

        />

        {/* Detail */}

        <textarea

          type="text"
          className='px-5 w-full py-2 font-medium outline-none h-32 border-2 rounded'
          placeholder='Enter Details'
          value={detail}
          onChange={(e)=>{
            setDetail(e.target.value);
          }}

        ></textarea>

        {/* Add notes */}

        <button className='px-5 w-full py-2 font-medium outline-none border-2 rounded bg-white text-black'>Add Note</button>
      </form>

      {/* Recent Notes */}

      <div className="p-10 lg:w-1/2 bg-amber-700 lg:border-l">
        <h1 className="font-bold text-3xl">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">
          <div className="bg-white h-52 rounded-2xl w-40"></div>
          <div className="bg-white h-52 rounded-2xl w-40"></div>
          <div className="bg-white h-52 rounded-2xl w-40"></div>
        </div>
      </div>
    </div>
  )
}

export default App