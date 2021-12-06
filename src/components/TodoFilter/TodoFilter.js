import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/todos/todos-selector';
import './TodoFilter.scss';
import todosActions from 'redux/todos/todos-actions';

const TodoFilter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className="TodoFilter">
      <input
        className="TodoFilterInput"
        type="text"
        placeholder="Search"
        value={value}
        onChange={e => dispatch(todosActions.changeFilter(e.target.value))}
      />
    </div>
  );
};

export default TodoFilter;
