

import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>My To-Do List</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
  }
};

export default Header;

