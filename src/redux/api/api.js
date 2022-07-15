import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addBook,
  removeBook,
  getBooks,
} from '../books/books';

// URL
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const urlId = 'M2hOtcFod5w9UERIfdgv';
const fetchUrl = `${baseUrl}/apps/${urlId}/books`;

// Actions
const ASYNC_ADDED_BOOK = 'bookstore/api/ASYNC_ADDED_BOOK';
const ASYNC_REMOVED_BOOK = 'bookstore/api/ASYNC_REMOVED_BOOK';
const ASYNC_GET_BOOKS = 'bookstore/api/ASYNC_GET_BOOKS';

// Action creators
const addBookAsync = createAsyncThunk(
  ASYNC_ADDED_BOOK,
  async (book, { dispatch }) => {
    await fetch(fetchUrl, {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    dispatch(addBook(book));
  },
);

const removeBookAsync = createAsyncThunk(
  ASYNC_REMOVED_BOOK,
  async (id, { dispatch }) => {
    const delUrl = `${fetchUrl}/${id}`;
    await fetch(delUrl, {
      method: 'DELETE',
      body: JSON.stringify({ item_id: id }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    dispatch(removeBook(id));
  },
);

const getBookAsync = createAsyncThunk(
  ASYNC_GET_BOOKS,
  async (arr, { dispatch }) => {
    const response = await fetch(fetchUrl);
    const output = await response.json();
    const keys = Object.keys(output);
    const bookList = arr;

    keys.forEach((key) => {
      const book = output[key][0];
      book.id = key;
      bookList.push(book);
    });
    dispatch(getBooks(bookList));
  },
);

export { addBookAsync, removeBookAsync, getBookAsync };
