// Aboutme.tsx
import { SiInformatica } from "react-icons/si";
import Title from "./Title";
import { useLanguage } from "../context/LanguageContext"; // Assuming you have a LanguageContext
import translations from "../translations"; // Check the correct path to translations file

const Aboutme = () => {
  const { language } = useLanguage();

  // Ensure translations object is correctly imported and accessed
  const { heading, content } = translations[language]?.aboutme || {};

  return (
    <div className="wrapper">
      <Title text={heading} icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex gap-4 flex-wrap mt-4">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Aboutme;
