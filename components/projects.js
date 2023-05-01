import TarjetaProject from "./tarjetaproject";

const descipcionPerros =
  "Con esta aplicación consolide mis conocimientos Full Stack, genera información para alimentar su base de datos y la combina con información de una api externa, permite filtrar, ordenar y buscar con diferentes criterios";
const descripcionGYM =
  "Este proyecto surge como una propuesta para ayudar a un negocio local a cubrir algunas de sus necesidades, la idea principal era sentar las bases para construir en torno a él un sistema que permita la gestión de la información de 3 diferentes sucursales.";
const descripcion3DSeller =
  "Este proyecto fue desarrollado en equipo a lo largo de tres sprints algunas de sus caracteristicas son: sistema de favoritos, integración con paypal, confirmaciones por correo, autenticación entre otras más.";

export default function Projects() {
  return (
    <div className="container">
      <TarjetaProject
        tituloProyecto={"3D Seller"}
        imagenProyecto={"3dSeller.jpg"}
        linklProyecto={"https://3dseller.vercel.app/"}
        descripcionProyecto={descripcion3DSeller}
        linkRepo={"https://github.com/HPabloReyes/3DSeller"}
      />
      <TarjetaProject
        tituloProyecto={"Gym Admin"}
        imagenProyecto={
          "https://static.vecteezy.com/system/resources/thumbnails/000/539/318/small/hand_with_a_dumbbell.jpg"
        }
        linklProyecto={"https://rhino-gym-x2ar.vercel.app/"}
        descripcionProyecto={descripcionGYM}
        linkRepo={"https://github.com/HPabloReyes/RhinoGYM"}
      />
      <TarjetaProject
        descripcionProyecto={descipcionPerros}
        imagenProyecto={"pug2.jpg"}
        linklProyecto={"https://pi-dogs-main-gold.vercel.app/perros"}
        linkRepo={"https://github.com/HPabloReyes/PI-Dogs-main"}
        tituloProyecto={"Dogs APP"}
      />
    </div>
  );
}
