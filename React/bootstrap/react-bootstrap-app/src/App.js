import React from 'react';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container>
      <h1>Hello, Bootstrap!</h1>
      <Button variant="primary">Click me</Button>
      <Button variant="danger">Click me</Button>
      <Button variant="warning">Click me</Button>
      <Button variant="secondary">Click me</Button>
    </Container>
  );
}

export default App;