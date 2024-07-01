// translations.ts
export const translations = {
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
} as const;

export default translations;
