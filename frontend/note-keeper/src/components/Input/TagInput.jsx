import React, { useState } from 'react';
import { MdAdd, MdClose } from 'react-icons/md';
import './TagInput.css';

const TagInput = ({ tags, setTag }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addNewTag = () => {
    if (inputValue.trim() !== '') {
      setTag([...tags, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addNewTag();
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTag(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="tag-input-container">
      {tags?.length > 0 && (
        <div className="tags-list">
          {tags.map((tag, index) => (
            <span key={index} className="tag-item">
              #{tag}
              <button
                className="remove-tag-btn"
                onClick={() => handleRemoveTag(tag)}
              >
                <MdClose />
              </button>
            </span>
          ))}
        </div>
      )}
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          className="input-field"
          placeholder="Add tags"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button className="add-tag-btn" onClick={addNewTag}>
          <MdAdd className="add-tag-icon" />
        </button>
      </div>
    </div>
  );
};

export default TagInput;
