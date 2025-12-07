import React from 'react'

const card = (props) => {
  // if we write any variable or string name like raju its works as  props its jsut for professional use we use to write props 
  // console.log(props) "-->it gives both user and age props values"
  // console.log(props.user) "--> only gives props of user"
  // console.log(props.user, props.age) " same as single passing props"
  console.log(props)

  return (
     <div className="card">
      {/* <img src="https://images.unsplash.com/photo-1639542270103-0e94fc28be38?q=80&w=816&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
      <img src={props.img} alt="" />
      {/* <h1>{props.user},{props.age}</h1> */}
      <h1>{props.user}</h1>

      <p>{props.age}</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      <button>View Profile</button>
    </div>
  )
}

export default card