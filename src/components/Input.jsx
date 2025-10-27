import React from "react";

const Input = ({ label, name, value, type, placeholder, onchange }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray-500">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onchange={onchange}
        placeholder={placeholder}
        className="border-2 border-gray-300 p-2 rounded-md placeholder:text-sm"
      />
    </div>
  );
};

export default Input;
