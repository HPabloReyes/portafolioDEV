import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function Projects() {
  return (
    <div className={styles.grid}>
      {" "}
      <a
        href="https://3dseller.vercel.app/"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          3D Seller <span>-&gt;</span>
        </h2>
        <img
          className="d3"
          src="3dSeller.jpg"
          alt="imagen proyecto 3DSeller"
          width={500}
        ></img>
      </a>
      <a
        href="https://rhino-gym-x2ar.vercel.app/"
        target="_blank"
        className={styles.card}
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          Gym admin <span>-&gt;</span>
        </h2>
        <img
          className="d3"
          src="https://static.vecteezy.com/system/resources/thumbnails/000/539/318/small/hand_with_a_dumbbell.jpg"
          alt="Imagen GYM"
          width={500}
        ></img>
      </a>
      <a
        href="https://pi-dogs-main-gold.vercel.app/perros"
        target="_blank"
        className={styles.card}
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          Dogs app <span>-&gt;</span>
        </h2>
        <img className="d3" src="pug2.jpg" alt="Imagen pug" width={500}></img>
      </a>
    </div>
  );
}
