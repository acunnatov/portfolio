import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";
import { useLanguage } from "@/context/LanguageContext";

const Skills = () => {
  const { language } = useLanguage();
  const translations = {
    en: "Skills",
    uz: "Malakalar",
    ru: "Навыки",
  };

  const skillsTitle = translations[language];

  return (
    <div className="wrapper">
      <Title text={skillsTitle} icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap mt-4"> {/* Added mt-4 for margin top */}
      <SkillsInput
          title="HTML"
          link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        />
        <SkillsInput
          title="CSS"
          link="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />
        <SkillsInput
          title="Javascript"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        {/* <SkillsInput title="Reactjs" link="https://react.dev/" /> */}
        {/* <SkillsInput title="Nextjs" link="https://nextjs.org/" /> */}
        <SkillsInput title="Nodejs" link="https://nodejs.org/en" />
        <SkillsInput
          title="Typescript"
          link="https://www.typescriptlang.org/"
        />
        <SkillsInput title="Expressjs" link="https://expressjs.com/" />
        {/* <SkillsInput title="Redux Toolkit" link="" /> */}
        <SkillsInput title="MongoDB" link="https://www.mongodb.com/" />
    <SkillsInput
  title="PostgreSQL"
  link="https://www.postgresql.org/"
/>

        <SkillsInput
          title="Google Firebase"
          link="https://firebase.google.com/"
        />
        {/* <SkillsInput title="Tailwindcss" link="https://tailwindcss.com/" /> */}
        {/* <SkillsInput title="Sanity.io" link="https://www.sanity.io/" /> */}
      
        {/* <SkillsInput title="VS Code" link="https://code.visualstudio.com/" />
        <SkillsInput
          title="Atom"
          link="https://github.blog/2022-06-08-sunsetting-atom/"
        /> */}
        <SkillsInput title="Git" link="https://git-scm.com/" />
        <SkillsInput title="Github" link="https://github.com/" />
        <SkillsInput title="Trello" link="https://trello.com/en" />
        {/* <SkillsInput title="GitKraken" link="https://www.gitkraken.com/" /> */}
        {/* <SkillsInput title="UI Design" link="https://www.figma.com/" /> */}
        {/* <SkillsInput title="Figma" link="https://www.figma.com/" /> */}
        {/* <SkillsInput title="Canva" link="https://www.canva.com/" /> */}
        {/* <SkillsInput
          title="Adobe Illustrator"
          link="https://www.adobe.com/products/illustrator/free-trial-download.html"
        />
        <SkillsInput title="Brand & LogoDesign" link="https://dribbble.com/" />
        <SkillsInput title="Website Design" link="https://themeforest.net/" />
        <SkillsInput title="Vercel" link="https://vercel.com/" /> */}
        <SkillsInput title="netlify" link="https://www.netlify.com/" />
        <SkillsInput title="Heroku" link="https://www.heroku.com/" />
      </div>
    </div>
  );
};

export default Skills;
