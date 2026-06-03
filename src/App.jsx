import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";

import chichen from "./assets/chichen.jpg";
import cristo from "./assets/cristo.jpg";
import machu from "./assets/machu.jpg";
import petra from "./assets/petra.jpg";
import coliseo from "./assets/coliseo.jpg";
import taj from "./assets/taj.jpg";
import muralla from "./assets/muralla.jpg";

function App() {

  const [contador, setContador] = useState(0);

  return (
    <>
      <Navbar />

      <Hero />
    
      <section className="contador">
        <h2>Maravillas a Explorar</h2>

        <p>{contador}</p>

        <button onClick={() => setContador(contador + 1)}>
          +
        </button>

        <button onClick={() => setContador(contador - 1)}>
          -
        </button>
      </section>

      <section className="maravillas">

        <h2>Las 7 Maravillas del Mundo</h2>

        <div className="cards">

          <Card
            nombre="Chichén Itzá"
            pais="México"
            imagen={chichen}
            descripcion="Antigua ciudad maya reconocida por la pirámide de Kukulkán."
          />

          <Card
            nombre="Cristo Redentor"
            pais="Brasil"
            imagen={cristo}
            descripcion="Monumento ubicado en Río de Janeiro que simboliza la paz."
          />

          <Card
            nombre="Machu Picchu"
            pais="Perú"
            imagen={machu}
            descripcion="Ciudadela inca construida en las montañas de los Andes."
          />

          <Card
            nombre="Petra"
            pais="Jordania"
            imagen={petra}
            descripcion="Ciudad histórica excavada en roca."
          />

          <Card
            nombre="Coliseo Romano"
            pais="Italia"
            imagen={coliseo}
            descripcion="Anfiteatro utilizado para espectáculos en la antigua Roma."
          />

          <Card
            nombre="Taj Mahal"
            pais="India"
            imagen={taj}  
            descripcion="Mausoleo construido como símbolo de amor."
          />

          <Card
            nombre="Gran Muralla China"
            pais="China"
            imagen={muralla}
            descripcion="Sistema de fortificaciones construido para proteger el territorio chino."
          />

        </div>

      </section>

      <Footer />
    </>
  );
}

export default App;