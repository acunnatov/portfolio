// components/Title.tsx
"use client"; // Add this at the top

import React from "react";

interface TitleProps {
  text: string;
  icon: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ text, icon }) => (
  <div className="title">
    <div className="flex items-center gap-2">
      <span className="text-2xl">{icon}</span>
      <h2 className="text-3xl font-bold">{text}</h2>
    </div>
    <hr className="border-t-2 border-indigo-700 mt-2 w-20" />
  </div>
);

export default Title;
