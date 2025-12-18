
const RightCardContent = (props) => {
  return (
       <div className="absolute p-8 flex flex-col justify-between top-0 left-0 h-full w-full">

                <h2 className="bg-white rounded-full h-12 w-12 flex justify-center items-center text-xl font-semibold">{props.id+1}</h2>
                <div>
                    <p className="text-lg text-shadow-2xs leading-relaxed mb-14 text-white">{props.intro}</p>

                    <div className="flex justify-between">
                        <button style={{backgroundColor:props.color}} className="text-white font-medium px-8 py-2 rounded-full">{props.tag}</button>
                        <button  className="bg-blue-600 text-white font-medium px-4 py-3 rounded-full"><i className="ri-arrow-right-up-line"></i></button>
                    </div>
                </div>

            </div>
  )
}

export default RightCardContent