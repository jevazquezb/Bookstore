// Actions
const CHECKED_STATUS = 'bookstore/categories/CHECKED_STATUS';

// Action creators
const checkStatus = () => ({
type: CHECKED_STATUS,
});

// Set initial state
const initialState = [];

// Reducer
const categoriesReducer = (state = initialState, action) => {
const {type} = action;
switch (type) {
  case CHECKED_STATUS:
    return [
      ...state,
      'Under construction',
    ];
  default:
    return state;
}
}

export { checkStatus, categoriesReducer as default };