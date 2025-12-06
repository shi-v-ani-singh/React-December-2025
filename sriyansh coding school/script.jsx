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