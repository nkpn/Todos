import React from 'react';
import IconButton from '../../components/IconButton/IconButton';
import { ReactComponent as AddIcon } from '../../components/icons/trash.svg';

const Todo = ({ text, completed, onToggleCompleted, onDelete }) => (
  <>
    <input
      type="checkbox"
      checked={completed}
      onChange={onToggleCompleted}
      className="TodoCheckbox"
    />
    <p className="Todo__Text">{text}</p>
    <IconButton onClick={onDelete} aria-label="Удалить">
      <AddIcon width="25" height="25" />
    </IconButton>
  </>
);

export default Todo;
