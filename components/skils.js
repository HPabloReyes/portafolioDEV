import {
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiCss3,
  SiHtml5,
  SiReact,
  SiJavascript,
  SiNextdotjs,
  SiTypescript,
  SiSequelize,
  SiGit,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    <motion.p whileHover={{ scale: 1.2 }}>
      JavaScript <SiJavascript style={{ fill: "#F7DF1E" }} />
      &nbsp;
    </motion.p>,
    <motion.p whileHover={{ scale: 1.2 }}>
      React <SiReact style={{ fill: "#61DAFB" }} />
      &nbsp;
    </motion.p>,
    <motion.p whileHover={{ scale: 1.2 }}>
      Redux <SiRedux style={{ fill: "#764ABC" }} />
      &nbsp;
    </motion.p>,
    <motion.p whileHover={{ scale: 1.2 }}>
      Node <SiNodedotjs style={{ fill: "#3C873A" }} />
      &nbsp;
    </motion.p>,
    <motion.p whileHover={{ scale: 1.2 }}>
      {" "}
      Express <SiExpress style={{ fill: "#000000" }} />
      &nbsp;
    </motion.p>,
    <motion.p whileHover={{ scale: 1.2 }}>
      PostgreSQL <SiPostgresql style={{ fill: "#336791" }} />
      &nbsp;
    </motion.p>,
    <motion.p whileHover={{ scale: 1.2 }}>
      {" "}
      MongoDB <SiMongodb style={{ fill: "#3FA037" }} />
      &nbsp;
    </motion.p>,
    <motion.p whileHover={{ scale: 1.2 }}>
      CSS <SiCss3 style={{ fill: "#1572B6" }} />
      &nbsp;
    </motion.p>,
    <motion.p whileHover={{ scale: 1.2 }}>
      HTML <SiHtml5 style={{ fill: "#E85800" }} />
      &nbsp;
    </motion.p>,
    <motion.p whileHover={{ scale: 1.2 }}>
      Next <SiNextdotjs style={{ fill: "#336791" }} />
      &nbsp;
    </motion.p>,
    <motion.p whileHover={{ scale: 1.2 }}>
      {" "}
      TypeScript <SiTypescript style={{ fill: "#007ACC" }} />
      &nbsp;
    </motion.p>,
    <motion.p whileHover={{ scale: 1.2 }}>
      Sequelize <SiSequelize style={{ fill: "#52B0E7" }} />
      &nbsp;
    </motion.p>,
    <motion.p whileHover={{ scale: 1.2 }}>
      Git <SiGit style={{ fill: "#F05032" }} />
      &nbsp;
    </motion.p>,
  ];

  return <div className="skills-container">{skills}</div>;
}
