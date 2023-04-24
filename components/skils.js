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

export default function Skills() {
  const skills = [
    <p>
      JavaScript <SiJavascript style={{ fill: "#F7DF1E" }} />
      &nbsp;
    </p>,
    <p>
      React <SiReact style={{ fill: "#61DAFB" }} />
      &nbsp;
    </p>,
    <p>
      Redux <SiRedux style={{ fill: "#764ABC" }} />
      &nbsp;
    </p>,
    <p>
      Node <SiNodedotjs style={{ fill: "#3C873A" }} />
      &nbsp;
    </p>,
    <p>
      {" "}
      Express <SiExpress style={{ fill: "#000000" }} />
      &nbsp;
    </p>,
    <p>
      PostgreSQL <SiPostgresql style={{ fill: "#336791" }} />
      &nbsp;
    </p>,
    <p>
      {" "}
      MongoDB <SiMongodb style={{ fill: "#3FA037" }} />
      &nbsp;
    </p>,
    <p>
      CSS <SiCss3 style={{ fill: "#1572B6" }} />
      &nbsp;
    </p>,
    <p>
      HTML <SiHtml5 style={{ fill: "#E85800" }} />
      &nbsp;
    </p>,
    <p>
      Next <SiNextdotjs style={{ fill: "#336791" }} />
      &nbsp;
    </p>,
    <p>
      {" "}
      TypeScript <SiTypescript style={{ fill: "#007ACC" }} />
      &nbsp;
    </p>,
    <p>
      Sequelize <SiSequelize style={{ fill: "#52B0E7" }} />
      &nbsp;
    </p>,
    <p>
      Git <SiGit style={{ fill: "#F05032" }} />
      &nbsp;
    </p>,
  ];

  return (
    <div className="">
      <div className="skills-container">{skills}</div>
    </div>
  );
}
