import { useState } from 'react';

const InlineEditor = ({ className, value, setValue }) => {
  const [editingValue, setEditingValue] = useState(value);
  
  const onChange = (event) => setEditingValue(event.target.value);
  
  const onKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }
  }
  
  const onBlur = (event) => {
    if (event.target.value.trim() === "") {
      setEditingValue(value);
    } else {
      setValue(event.target.value)
    }
  }

  return (
    <input
      className={className}
      type="text"
      aria-label="Field name"
      value={editingValue || value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    />
  );
};

export default InlineEditor;