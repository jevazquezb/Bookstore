import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/books';

function Book({ book, removeBookHandler }) {
  const { title, author, id } = book;

  return (
    <li>
      <h3>{ title }</h3>
      <h3>{ author }</h3>
      <button
        type="button"
        onClick={() => removeBookHandler(id)}
      >
        Remove
      </button>
    </li>
  );
}

function BookList() {
  const dispatch = useDispatch();

  const removeBookHandler = (id) => {
    dispatch(removeBook(id));
  };

  const createList = () => {
    const books = useSelector((state) => state.books);
    const list = books.map((book) => (
      <Book
        removeBookHandler={removeBookHandler}
        book={book}
        key={book.id}
      />
    ));
    return list;
  };

  return (
    <div>
      <ul>
        { createList() }
      </ul>
    </div>
  );
}

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const addBookhandler = (e) => {
    e.preventDefault();
    dispatch(addBook(title, author));
    e.target.reset();
  };

  const resetForm = () => {
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={addBookhandler} onReset={resetForm}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book title"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
        <input
          type="submit"
          value="ADD BOOK"
          title="Click this or press enter to submit"
        />
      </form>
    </>
  );
}

function Books() {
  return (
    <>
      <BookList />
      <Form />
    </>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  removeBookHandler: PropTypes.func.isRequired,
};

export default Books;
