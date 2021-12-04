import React from 'react';

const Todo = ({ text, completed, onToggleCompleted, onDelete }) => (
  <>
    <input type="checkbox" checked={completed} onChange={onToggleCompleted} />
    <p>{text}</p>
    <button type="button" onClick={onDelete}>
      Удалить
    </button>
  </>
);

export default Todo;
