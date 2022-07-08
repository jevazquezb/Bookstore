import PropTypes from 'prop-types';

function Book({ book }) {
  const { title, author } = book;
  return (
    <li>
      <h3>{ title }</h3>
      <h3>{ author }</h3>
      <button type="button">Remove</button>
    </li>
  );
}

function BookList({ books }) {
  const createList = () => {
    const list = books.map((book) => (
      <Book book={book} key={book.id} />
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
  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" placeholder="Book title" />
        <input type="text" placeholder="Author" />
        <input type="submit" value="ADD BOOK" title="Click this or press enter to submit" />
      </form>
    </>
  );
}

function Books({ books }) {
  return (
    <>
      <BookList books={books} />
      <Form />
    </>
  );
}

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default Books;
