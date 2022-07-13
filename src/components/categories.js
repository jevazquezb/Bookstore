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
        type="button"
        onClick={categoriesHandler}
      >
        Check status
      </button>
      <p>{categories[0]}</p>
    </>
  );
}

export default Categories;
