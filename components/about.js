import AnimatedText from "./animatedtext";
import { RiEmpathizeLine, RiMailSendFill } from "react-icons/ri";
import { MdOutlineScience } from "react-icons/md";
import { GiEcology } from "react-icons/gi";
import { BsPersonWorkspace } from "react-icons/bs";
import { AiTwotoneStar } from "react-icons/ai";
import FlipCard from "./flipCard";

const frontFlip0 = (
  <div className="starcontainer">
    <AiTwotoneStar fill={"#ffee00"} size={25} />
    <h2> Experiencia </h2>
  </div>
);

const backflip0 = (
  <div>
    <p>
      Como egresado de HENRY estoy familiarizado con prácticas del mundo laboral
      como lo son:
    </p>
    <ul className="">
      <li>Pairprogramin</li>
      <li>Equipos de Desarrollo</li>
      <li>(SCRUM)</li>
    </ul>
  </div>
);

const frontFlip1 = (
  <div className="starcontainer">
    <AiTwotoneStar fill={"#ffee00"} size={25} />
    <h2>Adaptabilidad</h2>
  </div>
);

const backFlip1 = (
  <p className="">
    Durante mi formación no fueron pocas las veces en las que me vi frente al
    monitor intentando trabajar con conceptos/tecnologías/frameworks que me
    resultaban desconocidos por completo, con lo cual descubrí que estoy
    capacitado para resolver los problemas para hacer mi trabajo funcional.
  </p>
);

const frontFlip2 = (
  <div className="starcontainer">
    <AiTwotoneStar fill={"#ffee00"} size={25} />
    <h2>Comunicacion</h2>
  </div>
);

const backFlip2 = (
  <p>
    Mantener el contacto con mis compañeros es una parte que disfruto del
    trabajo, para mi una de las formas más eficientes de aprender se encuentra
    detrás de cada interacción con tu equipo ya que nada está escrito en piedra
    me gusta poder adaptar mi codigo si es necesario para encajar con las
    necesidades del proyecto y el equipo en el que me encuentre.
  </p>
);

const animated1 = (
  <div className="">
    <h1 className="titulo">Sobre Mí </h1>
    <div className="container">
      <p className="item2">
        Hola! Mi nombre es: <b> Hugo Pablo Reyes González. </b> Full Stack
        Developer. <br></br>
        Estudie ing. en Energias Renovables pero trabaje en ventas durate años y
        es algo que nunca saldrá de mi. En la programación encontré un mundo
        inagotable de posibilidades, retos y satisfacciones y aunque mi carrera
        es relativamente corta estoy bastante orgulloso de lo que he conseguido,
        todos los días aprendo algo y estoy listo para afrontar el siguiente
        desafío!.
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
  <div>
    <h1 className="titulo">Propuesta de valor</h1>
    <FlipCard frontCard={frontFlip0} backCard={backflip0}></FlipCard>
    <FlipCard frontCard={frontFlip1} backCard={backFlip1}></FlipCard>
    <FlipCard frontCard={frontFlip2} backCard={backFlip2}></FlipCard>
  </div>
);

const animated3 = (
  <div className="">
    <h1 className="titulo">Proyectos</h1>
    <p className="item2">
      A continuación dejaré enlaces para algunos de los proyectos en los que he
      trabajado, si deseas mas informacion sobre cualquiera de ellos o si
      necesitas ponerte en contacto conmigo puedes hacerlo a través de mis redes
      sociales.
    </p>
  </div>
);

export default function About() {
  return (
    <div>
      <AnimatedText text={animated1}></AnimatedText>
      <AnimatedText text={animated2}></AnimatedText>
      <AnimatedText text={animated3}></AnimatedText>
    </div>
  );
}
