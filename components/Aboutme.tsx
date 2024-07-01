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
  const translations = {
    en: {
      aboutme: {
        heading: "About Me",
        content: "I am a web developer with 1+ years of experience in Node.js. I have a strong foundation in back-end development and am skilled in creating and maintaining server-side applications. I have experience working on a variety of projects, including building and maintaining REST APIs, and implementing responsive design principles. I am also proficient in using tools such as Webpack, npm, and Git for development and deployment. In addition to my technical skills, I am a strong communicator and team player. I am able to work effectively with cross-functional teams and am comfortable taking on new challenges and learning new technologies as needed.\n\nI am always looking to improve my skills and stay up-to-date with the latest best practices in web development. I am excited to continue growing as a developer and making meaningful contributions to projects and teams.",
      },
      contact: {
        heading: "Contact Me",
        description: "Feel free to reach out to me for any inquiries or opportunities.",
        button: "Send Message",
      },
    },
    uz: {
      aboutme: {
        heading: "Men haqimda",
        content: "Men Node.js da 1+ yillik tajriba bilan web dasturchiman. Backend dasturlarini yaratish va ularni qo'llab-quvvatlash,yangilashni bilaman. REST API lar yaratish va moslashish prinsiplarini amalga oshirishda tajribaga egaman. Webpack, npm va Git kabi vositalardan foydalanishni bilaman. Texnikaviy bilimlarimni rivojlantirishni, yangi texnologiyalarni o'rganishni va yangi muammolarni qabul qilishga tayyorman.\n\nMen jamoat bilan yaxshi aloqada bo'lishni va komanda ishonchida bo'lishni xohlayman. Men turli xil ta'lim va ish bo'yicha yangiliklarga ochiqman.",
      },
      contact: {
        heading: "Menga murojaat qiling",
        description: "Savol yoki taklif bo'yicha bog'laning.",
        button: "Xabar yuboring",
      },
    },
    ru: {
      aboutme: {
        heading: "Обо мне",
        content: "Я веб-разработчик с более чем 1 годом опыта в Node.js. У меня крепкие знания в разработке back-end и умения создавать и поддерживать серверные приложения. У меня опыт работы над различными проектами, включая создание и поддержку REST API и внедрение принципов отзывчивого дизайна. Я также владею инструментами, такими как Webpack, npm и Git для разработки и развертывания приложений. Кроме того, я отлично общаюсь и командный игрок. Я умею эффективно работать с межфункциональными командами и комфортно беру на себя новые вызовы и изучаю новые технологии по мере необходимости.\n\nЯ всегда стремлюсь совершенствовать свои навыки и быть в курсе последних лучших практик в веб-разработке. Я с нетерпением жду возможности развиваться как разработчик и вносить значимый вклад в проекты и команды.",
      },
      contact: {
        heading: "Свяжитесь со мной",
        description: "Не стесняйтесь обращаться ко мне по любым вопросам или предложениям.",
        button: "Отправить сообщение",
      },
    },
  };

  

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
