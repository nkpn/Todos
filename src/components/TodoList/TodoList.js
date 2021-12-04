import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVisibleTodos } from 'redux/todos/todos-selector';
import todosActions from 'redux/todos/todos-actions';
import style from './TodoList.module.scss';
import Todo from 'components/Todo';

const TodoList = () => {
  const todos = useSelector(getVisibleTodos);
  const dispatch = useDispatch();
  const onDeleteTodo = id => dispatch(todosActions.deleteTodo(id));
  const onToggleCompleted = id => dispatch(todosActions.toggleCompleted(id));

  return (
    <>
      <ul className="TodoList">
        {todos.map(({ id, text, completed }) => (
          <li key={id}>
            <Todo
              text={text}
              completed={completed}
              onToggleCompleted={() => onToggleCompleted(id)}
              onDelete={() => onDeleteTodo(id)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
