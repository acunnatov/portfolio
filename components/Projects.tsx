import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import telegramClone from "../public/img/projects/telegramClone.png";
import toDoList from "../public/img/projects/toDoList.png";
import WeatherCheck from "../public/img/projects/WeatherCheck.png";
import BoomShoop from "../public/img/projects/BoomShoop.png";
import passwordGenerator from "../public/img/projects/passwordGenerator.png";
import GroceryStore from "../public/img/projects/GroceryStore.png";
import Image from "next/image";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/context/LanguageContext";

const Projects = () => {
  const { language } = useLanguage();
  const translations = {
    en: "Projects",
    uz: "Loyihalar",
    ru: "Проекты",
  };

  const projectsTitle = translations[language];

  return (
    <div className="wrapper flex gap-4 flex-wrap mt-4">
      <Title text={projectsTitle} icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={telegramClone.src}
          title="Telegram Clone"
          link="https://telegram-clone-chat-80c264d5b212.herokuapp.com/login"
        />
        <ProjectCard
          img={toDoList.src}
          title="To Do List"
          link="https://acunnatov.github.io/To-Do-List/"
        />
        <ProjectCard
          img={WeatherCheck.src}
          title="Weather Check"
          link="https://acunnatov.github.io/Weather-Check/"
        />
        <ProjectCard
          img={GroceryStore.src}
          title="Grocery Store"
          link="https://node-api-example-967e769110a4.herokuapp.com/"
        />
        <ProjectCard
          img={BoomShoop.src}
          title="Boom Shoop"
          link="https://github.com/acunnatov/Boom-Shop"
        />
        <ProjectCard
          img={passwordGenerator.src}
          title="password Generator"
          link="https://acunnatov.github.io/Password-Generator/"
        />
      </div>
    </div>
  );
};

export default Projects;
