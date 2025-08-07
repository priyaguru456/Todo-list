

import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <div style={styles.container}>
      {todos.length === 0 ? (
        <p>No todos yet. Add one!</p>
      ) : (
        todos.map((todo, index) => (
          <div key={index} style={styles.todo}>
            <h3>{todo.title}</h3>
            <p>{todo.desc}</p>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '1rem auto',
  },
  todo: {
    border: '1px solid #ccc',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '5px',
  },
};

export default TodoList;

