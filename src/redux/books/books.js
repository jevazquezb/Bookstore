import { v4 as uuidv4 } from 'uuid';

// Actions
const ADDED_BOOK = 'bookstore/books/ADDED_BOOK';
const REMOVED_BOOK = 'bookstore/books/REMOVED_BOOK';

// Action creators
const addBook = (title, author) => ({
  type: ADDED_BOOK,
  title,
  author,
  id: uuidv4,
});

const removeBook = (id) => ({
  type: REMOVED_BOOK,
  id,
});

// Set initial state
const initialState = [
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

// Reducer
const booksReducer = (state = initialState, action) => {
  const {
    type, title, author, id,
  } = action;
  switch (type) {
    case ADDED_BOOK:
      return [
        ...state,
        {
          title,
          author,
          id,
        },
      ];
    case REMOVED_BOOK:
      return state.filter((book) => book.id !== id);
    default:
      return state;
  }
};

export { addBook, removeBook, booksReducer as default };
