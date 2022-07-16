import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBookAsync, removeBookAsync, getBookAsync } from '../redux/api/api';

function Book({ book, removeBookHandler }) {
  const {
    title, author, id, category,
  } = book;

  return (
    <li>
      <div className="info-name">
        <h3 className="category">{ category }</h3>
        <h3 className="title">{ title }</h3>
        <h3 className="auth">{ author }</h3>
        <button className="auth btn first-btn" type="button">Comments</button>
        <button
          className="auth btn"
          type="button"
          onClick={() => removeBookHandler(id)}
        >
          Remove
        </button>
        <button className="auth btn" type="button">Edit</button>
      </div>
      <div className="percentage">
        <div className="ring">
          <svg>
            <circle cx="50%" cy="50%" r="33" />
            <circle cx="50%" cy="50%" r="33" />
          </svg>
        </div>
        <div>
          <h3 className="amount">64%</h3>
          <h3 className="completed">Completed</h3>
        </div>
      </div>
      <div className="vl" />
      <div className="progress">
        <h3 className="cur-chapter">CURRENT CHAPTER</h3>
        <h3 className="chapter">Chapter 17</h3>
        <button className="update-btn" type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
}

function BookList() {
  const dispatch = useDispatch();

  useEffect(() => {
    const arr = [];
    dispatch(getBookAsync(arr));
  }, []);

  const removeBookHandler = (id) => {
    dispatch(removeBookAsync(id));
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
    <>
      <ul>
        { createList() }
      </ul>
      <div className="hl" />
    </>
  );
}

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const addBookhandler = (e) => {
    e.preventDefault();

    if (title !== '' && author !== '') {
      const book = {
        item_id: uuidv4(),
        title,
        author,
        category: 'Fiction',
      };
      dispatch(addBookAsync(book));
      e.target.reset();
    }
  };

  const resetForm = () => {
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form onSubmit={addBookhandler} onReset={resetForm}>
        <input
          className="title-input"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book title"
        />
        <input
          className="title-input author-input"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
        <input
          className="update-btn add-btn"
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
    category: PropTypes.string,
  }).isRequired,
  removeBookHandler: PropTypes.func.isRequired,
};

export default Books;
