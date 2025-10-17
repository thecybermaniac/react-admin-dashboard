import React from "react";

const InboxItem = ({ icon, title, sum, active, label }) => {
  const Icon = icon
  const LabelIcon = label?.icon;

  return (
    <div
      className={`flex items-center justify-between p-2.5 rounded-lg w-full hover:bg-brand-200 group ${
        active && "bg-brand-200"
      }`}
    >
      <div className="flex items-center gap-3">
        {!label ? (
          <Icon
            className={`size-5 group-hover:text-brand-500 ${
              active ? "text-brand-500" : "text-gray-500"
            }`}
          />
        ) : (
          <LabelIcon
            className={`${label.color} rotate-[135deg] size-3.5`}
          />
        )}
        <span
          className={`text-sm group-hover:text-brand-600 ${
            active ? "text-brand-600" : "text-gray-700"
          }`}
        >
          {title}
        </span>
      </div>
      <span
        className={`text-sm group-hover:text-brand-600 ${
          active ? "text-brand-600" : "text-gray-700"
        }`}
      >
        {sum}
      </span>
    </div>
  );
};

export default InboxItem;
