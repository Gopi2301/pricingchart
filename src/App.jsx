import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { Planlist } from "./Planlist";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Planlist />
    </div>
  );
}

export default App;
