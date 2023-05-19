import SectionHeader from "../../components/common/sectionHeader";
import ProjectCard from "./projectCard";
import ProjectCardAlternate from "./projectCardAlternate";
import bugtrackerImage from "../../images/bugtracker.png";
const Work = () => {
  const projects = [
    {
      number: 1,
      name: "Bugtracker",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      img: bugtrackerImage,
      skills: ["React", "Django", "Heroku", "Django REST framework"],
    },
  ];
  return (
    <div className="  max-w-[800px] text-textLight">
      <SectionHeader number={"2"} text={"Some things I've built"} />
      <ProjectCard
        number={projects[0].number}
        name={projects[0].name}
        description={projects[0].description}
        skills={projects[0].skills}
        img={projects[0].img}
      />
      <ProjectCardAlternate
        number={projects[0].number}
        name={projects[0].name}
        description={projects[0].description}
        skills={projects[0].skills}
        img={projects[0].img}
      />
    </div>
  );
};

export default Work;
