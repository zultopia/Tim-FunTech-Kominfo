// src/components/FormInput.tsx
import React from 'react';

interface FormInputProps {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<FormInputProps> = ({ label, name, onChange }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type="text" name={name} onChange={onChange} placeholder={`Masukkan ${label.toLowerCase()}`} />
    </div>
  );
};

export default FormInput;