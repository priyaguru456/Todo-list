


import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2025 My ToDo App</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    marginTop: '2rem',
  }
};

export default Footer;
