import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id="right"className="h-full w-2/3 p-4 flex rounded-4xl flex-nowrap overflow-x-auto gap-10 ">
      {props.users.map(function (elem, idx) {
        console.log(elem)
        return <RightCard key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag} color={elem.color}/>
      })}

    </div>
  )
}

export default RightContent