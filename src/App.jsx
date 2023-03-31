import { useState } from "react";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos a mi Ecommerce"} />
    </div>
  );
}

export default App;
