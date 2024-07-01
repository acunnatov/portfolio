import { useLanguage } from "@/context/LanguageContext";
import translations from "../translations";
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'; // Replace with actual icon imports

const Contact = () => {
  
  const { language } = useLanguage();
  const { heading, description, button } = translations[language]?.contact || {};

  // Replace with actual usernames or data from your context/state
  const githubUsername = "acunnatov";
  const linkedinUsername = "abdulbosit-sunnatov-904420263/";
  const telegramUsername = "positive_prog";

  return (
    <div className="wrapper">
      <h2 className="text-3xl font-bold mb-4">{heading}</h2>
      <p className="text-lg">{description}</p>
      <div className="flex items-center mt-4">
        <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 mr-4">
          <FaGithub size={24} /> {/* Adjust size as needed */}
        </a>
        <a href={`https://linkedin.com/in/${linkedinUsername}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 mr-4">
          <FaLinkedin size={24} /> {/* Adjust size as needed */}
        </a>
        <a href={`https://t.me/${telegramUsername}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
          <FaTelegram size={24} /> {/* Adjust size as needed */}
        </a>
      </div>
    </div>
  );
};

export default Contact;
