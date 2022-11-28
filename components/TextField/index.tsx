import React from 'react';

interface Props {
  value: string;
  onChange: () => void;
  placeholder?: string;
}

const TextField: React.FC<Props> = ({ value, onChange, placeholder = '' }) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default TextField;
