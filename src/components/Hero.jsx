import { useState } from "react";

function Hero() {
  const [mensaje, setMensaje] = useState(
    "Descubre algunos de los monumentos más impresionantes construidos por la humanidad."
  );

  const [color, setColor] = useState("#ffffff");

  function cambiarMensaje() {
    setMensaje(
      "Cada maravilla representa una parte importante de la historia y cultura mundial."
    );
  }

  function cambiarColor() {
    if (color === "#ffffff") {
      setColor("#f0f9ff");
    } else {
      setColor("#ffffff");
    }
  }

  return (
    <section className="hero" style={{ backgroundColor: color }}>
      <h1>LAS 7 MARAVILLAS DEL MUNDO</h1>

      <p>{mensaje}</p>

      <button onClick={cambiarMensaje}>
        Cambiar Mensaje
      </button>

      <button onClick={cambiarColor}>
        Cambiar Color
      </button>
    </section>
  );
}

export default Hero;