import { Routes, Route } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Header from './components/header';
import Books from './components/books';
import Categories from './components/categories';

function App() {
  return (
    <div className="main-cont">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
