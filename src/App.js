import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './components/header';
import Books from './components/books';
import Categories from './components/categories';

function App({ books }) {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Books books={books} />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </>
  );
}

App.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
};

export default App;
