import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function TarjetaProject({
  imagenProyecto,
  linklProyecto,
  linkRepo,
  descripcionProyecto,
  tituloProyecto,
}) {
  return (
    <div className="prcontainer">
      <div className={styles.card}>
        <div className="contenedor-p">
          <div className="titleproject">
            <h2 className={inter.className}>
              {tituloProyecto} <span>-&gt;</span>
            </h2>
          </div>
          <div className="projectposition">
            <a href={linklProyecto} target="_blank" rel="noopener noreferrer">
              <img
                className="d3"
                src={imagenProyecto}
                alt="Imagen_de_proyecto"
                width={500}
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div className="carta-desc">
        <img
          className="imagen2"
          src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
          alt="Imagen GitHub"
          width={50}
        ></img>
        <a href={linkRepo} target="_blank" rel="noopener noreferrer">
          <p className="centrado">{descripcionProyecto}</p>
        </a>
      </div>
    </div>
  );
}
