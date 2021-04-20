import React from "react";

// conventional props
function Heading({title}: {title: string}) {
  return (
    <h1>{title}</h1>
  )
}

function App() {
  return <div>
    <Heading title={2}/>
  </div>
}

export default App;
