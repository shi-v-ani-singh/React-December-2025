"------------use rafce (react arrow function export component) snippet for react functional component-------------"
import React from 'react'

const App = () => {
    return (
        // <div id="dad">
        //     <h1 id='child1'>Hello world</h1>
        //     <p  id='child2'>This is my first React App!</p>
        // </div>
        // <div id = "chacha">
        // </div>
        //   we can only return one thing so we wrap multiple things in a div

        // -----------------FRAGMENTS {empty tags to contain thigs)----------
        <>
            <div id="dad">
                <h1 id='child1'>Hello world</h1>
                <p id='child2'>This is my first React App!</p>
            </div>
            <div id="chacha">
            </div>

        </>

    )
}

export default App

"-------------- or --------------------"
// function App(){
//   return <h1>hello</h1>
// }
// export default App;