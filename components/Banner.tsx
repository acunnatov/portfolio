// Banner.tsx
import Image from "next/image";
import ProfileImg from "../public/img/profileImg.jpg";
import { useLanguage } from "@/context/LanguageContext"; // Assuming you have a LanguageContext

const Banner = () => {
  type Translations = {
    [key: string]: {
      name: string;
      title: string;
      description: string;
    };
  };
  const { language } = useLanguage();
  const translations:Translations = {
    en: {
      name: "Abdulbosit Sunnatov",
      title: "Backend Developer",
      description:
        "I am a dedicated backend developer with a passion for building robust and scalable applications. With over 1 year of experience, I excel in Node.js and enjoy taking on new challenges to improve my skills.",
    },
    uz: {
      name: "Abdulbosit Sunnatov",
      title: "Backend Dasturchi",
      description:
        "Men backend dasturchisi, mustahkam va taraqqiyotli dasturlar yaratishga qiziqaman. Node.js da 1 yildan ortiq tajribaga ega bo'lib, bilimlarimni oshirish uchun yangi muammolar bilan shug'ullanishni yaxshi ko'raman.",
    },
    ru: {
      name: "Абдулбосит Суннатов",
      title: "Backend Разработчик",
      description:
        "Я преданный backend разработчик, увлеченный созданием надежных и масштабируемых приложений. С более чем 1 годом опыта, я превосходно владею Node.js и наслаждаюсь новыми вызовами, чтобы улучшить свои навыки.",
    },
  };

  const { name, title, description } = translations[language];

  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-44 h-44 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover"
          src={ProfileImg}
          alt="Profile Image"
        />
      </div>
      {/* Description */}
      <div className="w-3/4 flex flex-col items-center md:items-start gap-2">
        <h1 className="text-5xl font-bold text-white">{name}</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-yellow-300 to-purple-300 tracking-wide">
          {title}
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Banner;
