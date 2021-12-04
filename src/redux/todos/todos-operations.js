import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

// const firstFetchTodos = () => async dispatch => {
//   dispatchEvent(firstFetchTodoRequest());
//   axios
//     .get('https://jsonplaceholder.typicode.com/todos/')
//     .then(response => dispatch(firstFetchTodoSuccess(response.data)))
//     .catch(error => dispatch(firstFetchTodoError(error)));
// };

// const fetchContact = () => async dispatch => {
//   dispatch(fetchTodosRequest());
//   try {
//     const response = await axios.get('/todos');
//     dispatch(fetchTodosSuccess(response.data));
//   } catch (error) {
//     dispatch(fetchTodosError);
//   }
// };

// const addTodo = newTodo => async dispatch => {
//   dispatch(addTodoRequest());
//   try {
//     const response = await axios.post('/todos', newTodo);
//     dispatch(addTodoSuccess(response.data));
//   } catch (error) {
//     dispatch(addTodoError(error));
//   }
// };

// const deleteTodo = id => async dispatch => {
//   dispatch(deleteTodoRequest());
//   try {
//     await axios.delete(`/todos/$id`);
//     dispatch(deleteTodoSuccess(id));
//   } catch (error) {
//     dispatch(deleteTodoError(error));
//   }
// };

// export default { fetchContact, firstFetchTodos, addTodo, deleteTodo };
