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
    <div className="wrapper p-4">
        <div className="mb-4 h-3"></div> {/* Spacer element */}
      <h2 className="text-3xl font-bold mb-4">{heading}</h2>
        <div className="mb-4 h-5"></div> {/* Spacer element */}
      <p className="text-lg mb-6">{description}</p>
      <div className="flex items-center space-x-8 mb-6">
    
        <a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-white hover:text-gray-200"
        >
          <FaGithub size={36} className="mr-2" /> {/* Adjust size as needed */}
          <span className="text-xl font-semibold">GitHub</span>
        </a>
        <a
          href={`https://linkedin.com/in/${linkedinUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-white hover:text-gray-200"
        >
          <FaLinkedin size={36} className="mr-2" /> {/* Adjust size as needed */}
          <span className="text-xl font-semibold">LinkedIn</span>
        </a>
        <a
          href={`https://t.me/${telegramUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-white hover:text-gray-200"
        >
          <FaTelegram size={36} className="mr-2" /> {/* Adjust size as needed */}
          <span className="text-xl font-semibold">Telegram</span>
        </a>
      </div>
      <div className="mb-4 h-37"></div> {/* Spacer element */}
    </div>
  );
};

export default Contact;
