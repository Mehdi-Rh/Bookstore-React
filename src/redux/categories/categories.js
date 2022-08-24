// Action types
const checkStatus = 'bookStore/categories/checkStatus';
const initialState = [];

export const checkStatusAction = () => ({
  type: checkStatus,
});

const checkStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case checkStatus:
      return 'Under construction';
    default:
      return state;
  }
};

export default checkStatusReducer;
