


import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) return;
    addTodo({ title, desc });
    setTitle('');
    setDesc('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Enter Todo Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input}
      />
      <textarea
        placeholder="Enter Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        style={styles.textarea}
      ></textarea>
      <button type="submit" style={styles.button}>Add Todo</button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    maxWidth: '400px',
    margin: '1rem auto',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
  },
  textarea: {
    padding: '0.5rem',
    fontSize: '1rem',
    resize: 'vertical',
  },
  button: {
    padding: '0.7rem',
    fontSize: '1rem',
    backgroundColor: '#61dafb',
    border: 'none',
    cursor: 'pointer',
  }
};

export default TodoForm;
