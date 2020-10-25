import React from "react";
import ReactDOM from "react-dom";
import DisplayDetails from "./DisplayDetails";
import DisplayStandard from "./DisplayStandard";
import DisplayDt from './DisplayDt';

function App(){

const myClick = () =>
{
  alert('Hi friends')
}
  return(<div>
    <DisplayDt />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById("root"));


