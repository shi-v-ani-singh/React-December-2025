import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users=[
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, fugiat voluptatibus. Minima culpa ex laudantium.',
      tag: 'Satisfied'
    },

    {
      img:'https://images.unsplash.com/photo-1736899900499-180c0df86b1f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, fugiat voluptatibus. Minima culpa ex laudantium.',
      tag:'Underserverd'
    },  
    
    {
      img:'https://images.unsplash.com/photo-1631304670146-86de055b4e66?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, fugiat voluptatibus. Minima culpa ex laudantium.',
      tag:'Underbanked'
    },

    {
      img:'https://images.unsplash.com/photo-1611940358470-9e9f6ded7842?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, fugiat voluptatibus. Minima culpa ex laudantium.',
      tag:'Underserverd'
    },

    {
      img:'https://plus.unsplash.com/premium_photo-1661583687357-f047d7f7b399?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, fugiat voluptatibus. Minima culpa ex laudantium.',
      tag:'Satisfied'
    }

  ]

  return (
    <div>
      <Section1 users={users} />      
      <Section2 />

    </div>
  )
}

export default App