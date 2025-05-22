import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => React element -JS Object => HTMLElement(Render)
const heading = React.createElement("h1",{"id":"heading"},"H1 Tag from react");

const root = ReactDOM.createRoot(document.getElementById("root"));

//JSX: HTML or XML like syntax
//JSX => Transpile code from reaching to JS =>Is done by Parcel package Babel
//JSX=> Babel transpile it to react.createElement => React element - JS Object => HTMLElement(Render)
const jsxHeading= <h1 id="heading">H1 Tag from JSX</h1>;

const HeadingComponent = () => {
  return (
  <div id="container">
    <Title/>
    {jsxHeading}
    {Title()}
    <Title> </Title>
    <h1 className="heading">Hellow world from Functional Component!!!</h1>

  </div>
  )
}

const Title=() => <h1 id="heading">H1 Tag from Title</h1>;


//root.render(jsxHeading)
root.render(<HeadingComponent />)