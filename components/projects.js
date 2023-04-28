import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function Projects() {
  return (
    <div className="container">
      {" "}
      <div className="prcontainer">
        <div className={styles.card}>
          <h2 className={inter.className}>
            3D Seller <span>-&gt;</span>
          </h2>
          <a
            href="https://3dseller.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="d3"
              src="3dSeller.jpg"
              alt="imagen proyecto 3DSeller"
              width={500}
            ></img>
          </a>
        </div>
        <div className="carta-desc">
          <img
            className="imagen2"
            src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
            alt="Imagen GitHub"
            width={50}
          ></img>
          <a
            href="https://github.com/HPabloReyes/3DSeller"
            target="_blanck"
            rel="noopener noreferrer"
          >
            <p className="centrado">Aquí hay código ♥ </p>
          </a>
        </div>
      </div>
      <div className="prcontainer">
        <div className={styles.card}>
          <h2 className={inter.className}>
            Gym admin <span>-&gt;</span>
          </h2>
          <a
            href="https://rhino-gym-x2ar.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="d3"
              src="https://static.vecteezy.com/system/resources/thumbnails/000/539/318/small/hand_with_a_dumbbell.jpg"
              alt="Imagen GYM"
              width={500}
            ></img>
          </a>
        </div>
        <div className="carta-desc">
          <img
            className="imagen2"
            src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
            alt="Imagen GitHub"
            width={50}
          ></img>
          <a
            href="https://github.com/HPabloReyes/RhinoGYM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="centrado">Aquí hay código ♥ </p>
          </a>
        </div>
      </div>
      <div className="prcontainer">
        <div className={styles.card}>
          <h2 className={inter.className}>
            Dogs app <span>-&gt;</span>
          </h2>
          <a
            href="https://pi-dogs-main-gold.vercel.app/perros"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="d3"
              src="pug2.jpg"
              alt="Imagen pug"
              width={500}
            ></img>
          </a>
        </div>
        <div className="carta-desc">
          <img
            className="imagen2"
            src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
            alt="Imagen GitHub"
            width={50}
          ></img>
          <a
            href="https://github.com/HPabloReyes/PI-Dogs-main"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="centrado">Aquí hay código ♥ </p>
          </a>
        </div>
      </div>
    </div>
  );
}
