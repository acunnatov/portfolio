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
      content: "Learn more about who I am and what I do.",
    },
    contact: {
      heading: "Contact",
      description: "Reach out to me for inquiries or collaborations.",
      button: "Contact Me",
    },
  },
  uz: {
    aboutme: {
      heading: "Men Haqimda",
      content: "Men haqimda ko'proq ma'lumot oling.",
    },
    contact: {
      heading: "Bog'lanish",
      description: "Savollaringiz yoki hamkorliklar uchun menga murojaat qiling.",
      button: "Menga Murojaat Qiling",
    },
  },
  ru: {
    aboutme: {
      heading: "Обо мне",
      content: "Узнайте больше обо мне и моей деятельности.",
    },
    contact: {
      heading: "Контакт",
      description: "Свяжитесь со мной для вопросов или сотрудничества.",
      button: "Свяжитесь со мной",
    },
  },  
} 

export default translations;
