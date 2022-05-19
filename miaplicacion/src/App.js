import React from "react"
import Estados from "./components/Estados";
import Eventos from "./components/Eventos";
import Micomponente from "./components/Micomponente";
import Variables from "./components/Variables";

function App() {
  return (
    <div className="App">
      <h1>HOLA Mundo desde React</h1>
      <Micomponente/>
      <Variables/>
      <Eventos/>
      <Estados/>
    </div>
  );
}

export default App;
