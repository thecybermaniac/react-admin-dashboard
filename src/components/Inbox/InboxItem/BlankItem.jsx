import React from "react";

const BlankItem = ({ icon, title, sum }) => {
  const Icon = icon;
  return (
    <div className="flex items-center justify-between p-2.5 rounded-lg w-full hover:bg-brand-200 group">
      <div className="flex items-center gap-3">
        <Icon className="size-3.5 text-brand-500 fill-brand-500 rotate-135" />
        <span className="text-sm text-gray-700 group-hover:text-brand-600">{title}</span>
      </div>
      <span className="text-sm text-gray-700 group-hover:text-brand-600">{sum}</span>
    </div>
  );
};

export default BlankItem;