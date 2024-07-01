import { SiInformatica } from "react-icons/si";
import Title from "./Title";
import { useLanguage } from "../context/LanguageContext"; // Assuming you have a LanguageContext

const Aboutme = () => {
  const { language } = useLanguage();
  type Translations = {
    [key: string]: {
      aboutme: {
        heading: string;
        content: string;
      };
      contact: {
        heading: string;
        description: string;
        button: string;
      };
    };
  };
  const translations :Translations = {
    
    en: {
      aboutme: {
        heading: "About Me",
        content: "This is content in English.",
      },
      contact: {
        heading: "Contact",
        description: "This is contact description in English.",
        button: "Contact Me",
      },
    },
    uz: {
      aboutme: {
        heading: "Men Haqimda",
        content: "Bu O'zbek tilida mazmun.",
      },
      contact: {
        heading: "Bog'lanish",
        description: "Bu bog'lanish ma'lumotlari O'zbek tilida.",
        button: "Menga Murojaat Qiling",
      },
    },
    ru: {
      aboutme: {
        heading: "Обо мне",
        content: "Это содержание на русском.",
      },
      contact: {
        heading: "Контакт",
        description: "Это контактная информация на русском.",
        button: "Свяжитесь со мной",
      },
    },
  } 

  // Ensure translations object is correctly imported and accessed
  const { heading, content } = translations[language as keyof typeof translations]?.aboutme || {};

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
