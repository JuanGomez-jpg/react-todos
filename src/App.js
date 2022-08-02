import React, {useEffect, useReducer} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ListGroup} from 'reactstrap';
import axios from 'axios';
import Card from './elements/CardContainer';

const initialState = {
  loading: true,
  error: "",
  todos: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        loading: false,
        error: '',
        todos: action.payload
      }
      case 'SET_ERROR':
      return {
        loading: false,
        error: 'Some error, duh',
        todos: []
      }
    default:
    return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res =>{
        dispatch({type: 'SET_DATA', payload: res.data})
        console.log(res.data)
    })
    .catch(err => {
      dispatch({type: 'SET_ERROR'})
    })
  }, [])

  const listmarkup = (
    state.todos.map(todo => <Card key={todo.id} title={todo.title}  id = {todo.id} completed={todo.completed} />)
  );

  return (
    <div className="App">
      {state.loading ? 'Loading' : (state.error ? state.error : listmarkup)}
    </div>
  );
}

export default App;
