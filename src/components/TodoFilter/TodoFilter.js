import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/todos/todos-selectors';
import './TodoFilter.module.scss';
import todosActions from 'redux/todos/todos-actions';

const TodoFilter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Фильтр по содержимому</p>
      <input
        type="text"
        value={value}
        onChange={e => dispatch(todosActions.changeFilter(e.target.value))}
      />
    </div>
  );
};

export default TodoFilter;
