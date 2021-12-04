import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import todosActions from 'redux/todos/todos-actions';
import './TodoEditor.scss';

export default function TodoEditor({ onSave }) {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const [errors, setErrors] = useState(false);

  const handleChange = e => setMessage(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    if (message === '') {
      setErrors(true);
      return;
    }

    dispatch(todosActions.addTodo(message));
    onSave();
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="TodoEditor">
      <h2 className="TodoEditorHeading">Describe your task:</h2>
      <textarea
        value={message}
        onChange={handleChange}
        className="TodoEditorTextArea"
      ></textarea>
      {errors && <p className="TodoEditorError">Please enter your text</p>}
      <button type="submit" className="TodoEditorButton">
        Save
      </button>
    </form>
  );
}
