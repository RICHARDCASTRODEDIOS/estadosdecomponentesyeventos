import { useState } from "react";
import Header from "./componentes/Header";
import Input from "./componentes/Input";
import Boton from "./componentes/Boton";


function App() {
  const [visible, setVisible] = useState(true)
  return (
    <div className="container">
      <div className="App">
      <Header titulo="Estados de los Componentes y Eventos"/>
      <Input setVisible={setVisible}/>
      <Boton visible={visible}/>
    </div>
    </div>
  );
}

export default App;
