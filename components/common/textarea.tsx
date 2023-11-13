import React from "react";

export default function TextArea({
  label,
  name,
  placeholder,
  parentClass,
  req,
  cols,
  rows,
  onChange,
}: {
  label?: string;
  name?: string;
  placeholder?: string;
  parentClass?: string;
  req?: boolean;
  cols?: number;
  rows?: number;
  onChange?: any;
}) {
  return (
    <div className={`${parentClass}`}>
      <label htmlFor={name} className="block text-gray text-label mb-2">
        {label}
        {req && <span className="text-primary ms-1">*</span>}
      </label>
      <div className="mt-2">
        <textarea
          name={name}
          id={name}
          onChange={onChange}
          className="w-full focus-visible:outline-none resize-none text-black border border-outline p-2 rounded-xl"
          placeholder={placeholder || "Type here"}
          cols={cols || 10}
          rows={rows || 10}
        ></textarea>
      </div>
    </div>
  );
}
