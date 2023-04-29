import { motion } from "framer-motion";
import AnimatedText from "./animatedtext";
import {
  RiEmpathizeLine,
  RiMailSendFill,
  RiComputerFill,
} from "react-icons/ri";
import { MdOutlineScience } from "react-icons/md";
import { GiEcology } from "react-icons/gi";
import { BsPersonWorkspace } from "react-icons/bs";

const animated1 = (
  <div className="">
    <h1 className="titulo">Sobre Mí </h1>
    <div className="container">
      <p className="item2">
        Hola! Mi nombre es: <b> Hugo Pablo Reyes González. </b> Full Stack
        Developer. <br></br>
        Soy una persona curiosa, en la programación encontré un mundo inagotable
        de posibilidades, retos y satisfacciones y aunque mi carrera es
        relativamente corta estoy bastante orgulloso de lo que he conseguido y
        el tiempo en que lo logré, todos los días aprendo algo y estoy listo
        para afrontar el siguiente desafío!.<br></br>
        <RiComputerFill />
      </p>
      <img className="item_image" src="/yop.jpg" alt="imagen de hugo"></img>
      <div className="item2">
        <div className="aptitud-container">
          <div className="">
            <RiEmpathizeLine style={{ fill: "#30475E" }} size={35} />
            <p>Empatia</p>
          </div>
          <div>
            <MdOutlineScience style={{ fill: "#30475E" }} size={35} />
            <p>Curiosidad</p>
          </div>
          <div>
            <RiMailSendFill style={{ fill: "#30475E" }} size={35} />
            <p>Comunicacion</p>
          </div>
          <div>
            <GiEcology style={{ fill: "#30475E" }} size={35} />
            <p>Colaboración</p>
          </div>
          <div>
            <BsPersonWorkspace style={{ fill: "#30475E" }} size={35} />
            <p>Dedicación</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const animated2 = (
  <div className="">
    <p className="item2">
      A continuación dejaré algunos enlaces para que puedas ver algunos de los
      proyectos en los que he trabajado, si lo deseas también puedes ponerte en
      contacto conmigo a través de mis redes sociales.
    </p>
  </div>
);

export default function About() {
  return (
    <div>
      {" "}
      <motion.div className="container">
        <AnimatedText text={animated1}></AnimatedText>
      </motion.div>
      <motion.div className="container">
        <AnimatedText text={animated2}></AnimatedText>
      </motion.div>
    </div>
  );
}
