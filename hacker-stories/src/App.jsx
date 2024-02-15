import * as React from 'react' 

const title = 'React App'; //using a primitive
const welcome ={greeting:"Hey you", title: "React"} //use of js object instead of primitive

function getTitle(titl){
  return titl;
}

function App() {
  return (<div>
     {/* one way to get into html n js */}
    <h1>
      Hello {title} //JSX combination of js and html
    </h1>

    <label htmlFor="search">Search:</label>
    <input type="text" id="search" />
    {/* Another way to get js into HTML by objects */}
  <h2>
    {welcome.greeting} {welcome.title}
  </h2>

  {/* use of a functional approach */}
  <h3>Hello {getTitle('Billy is the Title')}</h3>
   
  </div>)
}

export default App
