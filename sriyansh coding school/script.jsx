// var h1 = document.createElement('h1');

// h1.innerHTML = "Hello from JS.";

// document.body.appendChild(h1);

// console.log(h1);

"-----------------------------"

"LIBRARY:-----------"
//                  - GSAP
//                  - REACT JS

"FRAMWORKS:------------------------"
//                   - NEXT JS 
//                   - ANGULAR JS

"----------------------------------------"
"-----------IMPORT AND EXPORTS-----------------"

// import a from './app.js'

// console.log(a);
// this above didnt work so let's see below

// import a from './app.js'
// console.log(a);

// import array from  './app.js'
// console.log(array);
// console.log(user)

// import {arr} from './app.js'
// console.log(arr);

// import a from './app.js'
// console.log(a)

"--------------------------------------"
// import naam from './app.js'
// console.log(naam);

"--------------------------------------"

// import naam from './app.js'
// import user2 from './test.js'

// import {age, skills} from './app.js'
// console.log(age, skills)  

// console.log(naam, user2)

"-------------------------------------------"

"-------------------------------------------"

"--------------Real DOM and Virtual DOM-------------------"

// Real DOM- Document Object Model
"---THE WHOLE DOM will be rerendered that is refreshed when we make changes in real DOM for changing a single element--"
"-----and this makes the performance slow----"
"--example like if we have 1000 elements in a webpage and we change only one element then the whole DOM will be refreshed--"

// Virtual DOM- is a lightweight copy of the real DOM that is kept in memory and synced with the real DOM by libraries such as ReactJS.
"---ONLY THE CHANGED ELEMENT is updated in the real DOM instead of refreshing the whole DOM--"
"-----and this makes the performance faster and efficient----"
"--example like if we have 1000 elements in a webpage and we change only one element then only that element will be updated--"



"-----------------------------JSX-> JavaScript XML (HTML + JS)------------------------"
"--JSX is a syntax extension for JavaScript that looks similar to HTML and is used in React to describe the UI structure--"
"--we can write HTML elements in JavaScript and place them in the DOM without using functions like createElement() or appendChild()--"
"---Babel is used to convert JSX code into regular JavaScript code that browsers can understand--"

// example ---> var h1 = <h1>hwllo world</h1>

"-----in js --"
// function abc(){
//     console.log('hello');
// }
// abc();

"---but in jsx--"
// function abc(){
//     console.log('hello');
// }
// <abc />

"----------------how to write functions in capital letters in jsx----"
// function Hero(){
//     console.log("hii")
// }
// <Hero/>


"--------------------folder structure of react js using [vite]-------------------"
"vite- is a bundler (that helps in making folders)"

"---Vite is basically a super-fast build tool and bundler that sets up your React project instantly. It creates the folder structure for you and handles things like dev server, hot reload, and bundling."

"Earlier, people used create-react-app (CRA) to make React projects. But the team behind it has officially stopped maintaining it, and they’ve suggested moving to frameworks like Next.js or Remix because React itself is only a library — it doesn’t include a full architecture or advanced tooling."

"For learning React basics though, using Vite is perfectly fine. It’s fast, lightweight, and very beginner-friendly.---"




"note- making folder with vite is in folder named code part begins here"


// npm create vite
// react
// js
"---------------------------------------------"


// App.jsx->
"-------------------rafce snippet for react functional component------------------"
"------App.jsx parent folder is main.jsx file which is in src folder which is in root folder------"

"---index.jsx is having the root div which is accesesed in main.jsx file and it has rendered the appcomponent from App.jsx file---"
"---so the flow is index.jsx -> main.jsx -> App.jsx---"
"---index.css is imported in main.jsx file for styling---"


"-- ------------------------------------------------------"
//   we can only return one thing so we wrap multiple things in a div
// so we use fragments instead of multiple div tags.



"-------NOTE:->--------------use only npm install vite instead of vite@latest because in latest version there aremany errors "

"ASSETS:-> images,fonts,svgs etc placed in the assets folder inside src folder"

"PUBLIC FOLDER:-> contains index.html file and other static files that are directly served without processing by Vite."

"NODE MODULES:-> contains all the project dependencies and packages installed via npm."

"------------------------eslint-------------------"
"ESLint is a tool that helps identify and fix problems in your JavaScript code to ensure it follows best practices and coding standards."
"----eslint.config.js = The NEW hotness----"
"----eslintrc.cjs = The OLD, classic setup-----"


"------------------gitignore------------------"
".gitignore is a special file used in Git version control systems to specify which files or directories should be ignored and not tracked by Git."

"-----------env-------------"
".env file is used to store environment variables for a project, allowing you to manage configuration settings separately from your codebase."

"---------------------------------------------------------------------------------------------------------------"
"package.json:-> contains metadata about the project, including dependencies, scripts, and other configurations."
"package-lock.json:-> is an automatically generated file that records the exact versions of dependencies installed in a Node.js project to ensure consistent installations across different environments."

"----------------------------------------------------------------------------------------------------------------"

"vite.config.js:-> is the configuration file for Vite, a build tool and development server for modern web projects. It allows you to customize various settings such as plugins, server options, build configurations, and more to tailor the development environment to your project's needs."

"-----------------------------------------------------------------------------------------------------------------"
"redme.md:-> is a markdown file commonly used in software projects to provide documentation, instructions, and information about the project. It is often the first file users see when they visit a project's repository."



// "----------------------------------------------------------------------------------------------------------------------"
"----------------------------------------------------------------------------------------------------------------------"

// 5. "---------------------------------------02-folder -> COMPONENTS---------------------------"


"components are reusable pieces of code that represent a part of the user interface in a React application. They help in breaking down the UI into smaller, manageable, and reusable pieces, making it easier to build and maintain complex applications."
"Each component is a JavaScript function or class that returns a React element, which describes what should be rendered on the screen. Components can accept inputs called 'props' and manage their own state to create dynamic and interactive UIs.---"


// " --------------> print variables in jsx using {} curly braces "

"------------------Multiple Components in React-------------------"

// "---------------03-props -> props dealing -----------------"

"Props (short for properties) are a way to pass data from a parent component to a child component in React. They allow you to customize and configure components by providing them with specific values or information."

// ----- passing props from parent to child component ----- or use props for changing data or passng data

// always parent to child data transfer is possible not vice versa

//  APP -> CARD -> IMGAGE  DATA flow for passing props
// whole data will be concentrated/kept  in app.jsx then we'll pass it to its childrens/ can be multiple childrens

"------------------in js-------------"
// function abc(a){
//     console.log('hello',a);
// }
// abc(10)

"-------------in jsx------------"
"in cards.jsx"
function card(a) {
  return
  <div className="card">
    <img src="https://images.unsplash.com/photo-1639542270103-0e94fc28be38?q=80&w=816&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <h1>Shivani Singh</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
    <button>View Profile</button>
  </div>

}

"in app.jsx"
// card() as card(a)


// -------------------------------- 04-cards-project ----------------

// made a card component 

// <---------------------how to pass props as an array--------------->
// import User from './components/User'


// const arr = [10,20,30,40]

// const App = () => {
//   return (
//     <div className="parent">
//       {/* <Card /> */}
//       <User name='Shivani' />
//       <User name={arr[2]}/>
//       <User name='Sarthak' />
//       <User name='Harsh' />
//     </div>
//   )
// }

// export default App

"-------so there is a problem instead of passing like this we will use array method map() to pass props dynamically--------"

"------------------------------------------------arr.map() method--------------------------------------"


// const arr = [10,20,30,40]

// const App = () => {
//   return (
//     <div className="parent">
//       {/* <Card /> */}
//       {arr.map(function(){
//         return 'hello'
//       })}
//     </div>
//   )
// }

//------------ output->>hellohellohellohello

"--------------------------------------"
// const arr = [10,20,30,40]

// const App = () => {
//   return (
//     <div className="parent">
//       {/* <Card /> */}
//       {arr.map(function(ele){
//         return ele
//       })}
//     </div>
//   )
// }

// output-> 10203040
"---------------------------"
// const arr = [10,20,30,40]

// const App = () => {
//   return (
//     <div className="parent">
//       {/* <Card /> */}
//       {arr.map(function(ele){
//         return <h1>{ele*2}</h1>
//       })}
//     </div>
//   )
// }

// output -> 20406080

"----------map() is basically for writing/showing"

"---------- forEach() is basically for itration"
"-------------------------Array of objects------------------------------"
// const arr = [{user:'shivani'},{user:'sakshi'}];
// arr.forEach(function (elm) {
//   console.log(elm.user)
// })

// output-> shivani
//       -> sakshi

"-------------------------error key props missing -----------"
'----------------error: Each child in a list should have a unique "key" prop.'


// React recognizes all cards as same in "04-cards-project" so we have to pass a hey to recognize them as unique.
"-------------KEY IS BASICALLY A ID---"
// const App = () => {
//   return (
//     <div className="parent">
//       {jobs.map(function (elem, idx) {
//         console.log(idx);

//         return <Card key={idx} brandLogo={elem.brandLogo} company={elem.company} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
//       }
//       )}

//     </div>
//   )
// }

"--------------but this is preffered ->--"
// return <div key={idx}>
//           <Card brandLogo={elem.brandLogo} company={elem.company} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
   
//         </div>

"-------------------------------------------------------------------------------------------------------------"

"----------------------------------------  05-css  ----------------------"
// instead of writing all css code in index.css or in a seprate folder in src as styles and writing seprate css like btn.css and header.css, we prefer to write seprate css 
// ------>BEcz if i accidently given same class to both the components then the same style will apply on both the components but we want different style while using same classname 


// const App = () => {
//   return (
//     <div>
//       <Button />
//       <Header />
//     </div>
//   )
// }
// const Button = () => {
//   return (
//     <div>
//         <button className="btn">This is button.</button>
//     </div>
//   )
// }
// const Header = () => {
//   return (

//     <div className='header'>
//         <p>sheriyansh</p>
//         <button className='btn'>Login</button>
//     </div>
//   )
// }
// .header{
//     background-color: lightseagreen;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 10px 20px;
//     margin: 5px;
// }
// .btn{
//     background-color: red;
//     width: fit-content;
//     padding: 10px 20px;
//     border-radius: 5px;
//     margin: 5px;
// }

"------> the btn style is applied on heaer and buttton both files so thats why we use modules."

"----------------module css ----------"

// create seprate folder in componets folder like for btn create btn folder and contain button.jsx and button.module.css same as for othe components 


"-----------------------------------------------------------"

"----------------------- tailwind.css ----------------------"

//  https://tailwindcss.com/docs/installation/using-vite

"----------------interminal--------------"
// npm create vite@latest my-project
// cd my-project

"----------in terminal--------"
// npm install tailwindcss @tailwindcss/vite

"---------write in vite.config.js--------"
// import tailwindcss from '@tailwindcss/vite'
"-------in vite.config.js -----"
//  plugins: [
//     tailwindcss(),
//   ],
"---------------in index.css-----------"
// @import "tailwindcss";

"------------------------------------------------------------------------------"

"---------------------Feature-based vs Atomic Design folder structures---------------"
// If your app is feature-driven (Dashboard / Profile / Cart) → go Feature-Based.
// If your app is component-driven (lots of reusable UI) → go Atomic Design.

// Many companies actually mix both when things grow.
