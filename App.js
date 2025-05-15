const parent= React.createElement("div", {id:"parent"}, 
    [React.createElement("div", {id:"child"}, 
    React.createElement("h1", {id:"heading"}, "Hello World from React H1 tag!!!")
  ),
React.createElement("div", {id:"child2"},
    [React.createElement("h1", {id:"heading1"}, "Hello World from React H1 tag!!!"),
        React.createElement("h2", {id:"heading2"}, "Hello World from React H2 tag!!!")
    ] 
    
  )]
  
);

//const heading = React.createElement("h1", {id:"heading"}, "Hello World from React App.js!!!");
  const root = ReactDOM.createRoot(document.getElementById("root"));
  //root.render(heading);
  root.render(parent);