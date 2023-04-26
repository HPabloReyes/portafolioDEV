import { motion } from "framer-motion";
import AnimatedText from "./animatedtext";

const animated1 = (
  <div className="container">
    <p className="item2">
      Hola ! Mi nombre es <b> Hugo Pablo Reyes González </b> desarrollador web
      Full Stack. <br></br>
      Tengo una sólida formación, que me ha permitido generar aplicaciones de
      manera independiente y también integrado a equipos ocupando metodologías
      ágiles (SCRUM). En general tengo experiencias de trabajo diversas que me
      han demostrado la gran adaptabilidad que tengo al momento de integrarme a
      un nuevo proyecto En todos mis proyectos integro conocimientos full stack,
      se manejar bases de datos SQL y noSQL , tambien tengo experiencia
      generando llamadas a apis extrenas a mis APPS y conmbinando su informacion
      con la de mis bases de datos aplicando en el proceso filtros combinados
      para ordenar buscar y renderizar la informacion de forma conveniente para
      el usuario en todo momento.
    </p>
    <img
      className="item_image"
      src="/certificado.png"
      alt="Certificado full stack"
    ></img>
  </div>
);

const animated2 = (
  <div>
    <img className="item_image" src="/dogs.png" alt="perros"></img>
    <p className="item2">
      Acontinuacion dejaré algunos enlaces para que puedas ver algunos de los
      proyectos en los que eh trabajado, si lo deseas tambien puedes ponerte en
      contacto conmigo a travez de mis redes sociales .
    </p>
  </div>
);

export default function About() {
  return (
    <div>
      {" "}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <AnimatedText text={animated1}></AnimatedText>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <AnimatedText text={animated2}></AnimatedText>
      </motion.div>
    </div>
  );
}
