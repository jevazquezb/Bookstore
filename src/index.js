import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const bookArray = [
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    id: 1,
  },
  {
    title: 'Dune',
    author: 'Frank Herbert',
    id: 2,
  },
  {
    title: 'Capital in the Twenty-First Century',
    author: 'Thomas Piketty',
    id: 3,
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App books={bookArray} />
    </Router>
  </React.StrictMode>,
);
