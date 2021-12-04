import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './todos-actions';

const items = createReducer([], {
  [actions.addTodo]: (state, { payload }) => [...state, payload],
  [actions.deleteTodo]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [actions.toggleCompleted]: (state, { payload }) =>
    state.map(todo =>
      todo.id === payload ? { ...todo, completed: !todo.completed } : todo,
    ),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

// import {
//   fetchTodosRequest,
//   fetchTodosSuccess,
//   fetchTodosError,
//   addTodoRequest,
//   addTodoSuccess,
//   addTodoError,
//   deleteTodoRequest,
//   deleteTodoSuccess,
//   deleteTodoError,
//   toggleCompletedRequest,
//   toggleCompletedSuccess,
//   toggleCompletedError,
//   changeTodoRequest,
//   changeTodoSuccess,
//   changeTodoError,
//   changeFilter,
//   firstFetchTodoSuccess,
//   firstFetchTodoRequest,
//   firstFetchTodoError,
// } from './todos-actions';

// const items = createReducer([], {
//   [fetchTodosSuccess]: (_, { payload }) => payload,
//   [firstFetchTodoSuccess]: (_, { payload }) => payload,
//   [addTodoSuccess]: (state, { payload }) => [...state, payload],
//   [deleteTodoSuccess]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
//   [toggleCompletedSuccess]: (state, { payload }) =>
//     state.map(todo => (todo.id === payload.id ? payload : todo)),
//   [changeTodoSuccess]: (state, { payload }) => [...state, payload],
// });

// const loading = createReducer(false, {
//   [fetchTodosRequest]: () => true,
//   [fetchTodosSuccess]: () => false,
//   [fetchTodosError]: () => false,
//   [addTodoRequest]: () => true,
//   [addTodoSuccess]: () => false,
//   [addTodoError]: () => false,
//   [deleteTodoRequest]: () => true,
//   [deleteTodoSuccess]: () => false,
//   [deleteTodoError]: () => false,
//   [toggleCompletedRequest]: () => true,
//   [toggleCompletedSuccess]: () => false,
//   [toggleCompletedError]: () => false,
//   [changeTodoError]: () => false,
//   [changeTodoRequest]: () => true,
// });

// const filter = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// });

// const error = createReducer(null, {});

// export default combineReducers({
//   items,
//   filter,
//   loading,
//   error,
// });
