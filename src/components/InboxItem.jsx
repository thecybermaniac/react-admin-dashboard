import React from "react";

const InboxItem = ({ icon, title, sum }) => {
  const Icon = icon;
  return (
    <div className="flex items-center justify-between bg-brand-100 p-3 rounded-lg w-full">
      <div className="flex items-center gap-2">
        <Icon className="size-5 text-brand-500" />
        <span className="text-sm text-brand-600">{title}</span>
      </div>
      <span className="text-sm text-brand-600">{sum}</span>
    </div>
  );
};

export default InboxItem;
