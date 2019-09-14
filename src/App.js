import React from 'react';
import logo from './logo.svg';
import './App.css';

import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';

import Album from './Album';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <Container>
      <Album></Album>
    </Container>
  );
}

export default App;
