import React, { useState, useEffect } from 'react';
import TagInput from '../../components/Input/TagInput';
import { MdClose } from 'react-icons/md';
import './AddEditNotes.css';
import axiosInstance from '../../utils/axiosInstance';

const AddEditNotes = ({ noteData = {}, type, getAllNotes, onClose,showToastMessage }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    if (type === 'edit' && noteData) {
      setTitle(noteData.title || '');
      setContent(noteData.content || '');
      setTags(noteData.tags || []);
    }
  }, [type, noteData]);

  const addNewNote = async () => {
    try {
      const response = await axiosInstance.post('/add-note', {
        title,
        content,
        tags,
      });
      if (response.data && response.data.note) {
        showToastMessage("Note Added Successfully")
        getAllNotes();
        onClose();
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  const editNote = async () => {
    const noteId =noteData._id
    try {
      const response = await axiosInstance.put(`/edit-note/${noteData._id}`, {
        title,
        content,
        tags,
      });
      if (response.data && response.data.note) {
        showToastMessage("NoteUpdated Successfully")
        getAllNotes();
        onClose();
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  const handleAddOrEditNote = () => {
    if (!title.trim()) {
      setError('Please enter the title');
      return;
    }
    if (!content.trim()) {
      setError('Please enter the content');
      return;
    }

    setError(null); 

    if (type === 'edit') {
      editNote();
    } else {
      addNewNote();
    }
  };

  return (
    <div className="add-edit-notes-container">
      <button className="close-btn" onClick={onClose}>
        <MdClose className="close-icon" />
      </button>

      <div className="input-container">
        <label className="input-label">TITLE</label>
        <input
          type="text"
          className="input-field"
          placeholder="Type Title ..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="input-container">
        <label className="input-label">CONTENT</label>
        <textarea
          className="textarea-field"
          placeholder="Content"
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className="tags-container">
        <label className="input-label">TAGS</label>
        <TagInput tags={tags} setTag={setTags} />
      </div>

      {error && <p className="error-message">{error}</p>}

      <button className="submit-btn" onClick={handleAddOrEditNote}>
        {type === 'edit' ? 'UPDATE' : 'ADD'}
      </button>
    </div>
  );
};

export default AddEditNotes;
