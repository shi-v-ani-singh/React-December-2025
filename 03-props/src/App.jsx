import React from 'react'
import Card from './components/Cards'

const App = () => {
  return (
    <div className="parent">
      <Card user="Shivani Singh" age={25} img="https://images.unsplash.com/photo-1702149001693-67ca09997ecc?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Aman Kumar" age={20} img="https://images.unsplash.com/photo-1556848527-f7c548b972b2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>

  )
}

export default App