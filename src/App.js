
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <Header />
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
      <Footer />
    </div>
  );
};

export default App;
