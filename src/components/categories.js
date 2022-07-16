import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const categoriesHandler = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <button
        className="update-btn add-btn cat-btn"
        type="button"
        onClick={categoriesHandler}
      >
        CHECK STATUS
      </button>
      <p className="cat-p">{categories[0]}</p>
    </>
  );
}

export default Categories;
