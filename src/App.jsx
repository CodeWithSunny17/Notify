import { useState } from "react";

import "./App.css";
import Notes from "/src/Notes.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Notes />
    </>
  );
}

export default App;
