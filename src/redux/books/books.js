// Actions
const ADDED_BOOK = 'bookstore/books/ADDED_BOOK';
const REMOVED_BOOK = 'bookstore/books/REMOVED_BOOK';
const GOT_BOOKS = 'bookstore/books/GOT_BOOKS';

// Action creators
const addBook = (book) => ({
  type: ADDED_BOOK,
  ...book,
});

const removeBook = (id) => ({
  type: REMOVED_BOOK,
  item_id: id,
});

const getBooks = (bookList) => ({
  type: GOT_BOOKS,
  bookList,
});

// Set initial state
const initialState = [];

// Reducer
const booksReducer = (state = initialState, action) => {
  const {
    type, title, author, item_id: id, category, bookList,
  } = action;
  switch (type) {
    case ADDED_BOOK:
      return [
        ...state,
        {
          title,
          author,
          id,
          category,
        },
      ];
    case REMOVED_BOOK:
      return state.filter((book) => book.id !== id);
    case GOT_BOOKS:
      return bookList;
    default:
      return state;
  }
};

export {
  addBook,
  removeBook,
  getBooks,
  booksReducer as default,
};
