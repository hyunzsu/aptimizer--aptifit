"use client";

import s from "./Input.module.css";

type TInput = {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: any;
};

const Input = ({ label, name, value, placeholder, onChange }: TInput) => {
  return (
    <div className={s.Input}>
      <label className={s.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={s.input}
        type="text"
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
