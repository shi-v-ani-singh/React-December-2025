
const App = () => {

  const pageScrolling =(elem)=>{
    if (elem >0){
        console.log("page is scrolling at positive speed")
      }
      else{
        console.log("page is scrolling at minus speed")
      }
  }
  return (
    <div onWheel={(elem)=>{
      pageScrolling(elem.deltaY)
      
    }}>
      <div className="h-screen w-full bg-red-700"></div>
      <div className="h-screen w-full bg-blue-500"></div>
      <div className="h-screen w-full bg-orange-700"></div>
    </div>
  )
}

export default App