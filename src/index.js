import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "Javascript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and Github",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar name="Nwaiwu Chinedu" photoName="Images/myPort.jpeg" />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}
// <div className="skill-list">
//   <skill skill="HTML+CSS" emoji="💪" color="blue" />
//   <Skill skill="JavaScript" emoji="💪" color="orangered" />
//   <Skill skill="Web Design" emoji="💪" color="yellow" />
//   <Skill skill="Git and GitHub" emoji="👍" color="orange" />
//   <Skill skill="React" emoji="💪" color="green" />
//   <Skill skill="Svelte" emoji="👦" color="pink" />
// </div>

function Avatar(props) {
  return <img className="avatar" src={props.photoName} alt={props.name} />;
}

function Intro() {
  return (
    <div>
      <h1>Nwaiwu Chinedu</h1>
      <p>
        "Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach"
      </p>
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👦"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
