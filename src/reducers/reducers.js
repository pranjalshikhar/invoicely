import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, VIEW_ITEM } from "./actions";

const initialState = {
  addItem: [],
  editItem: [],
  viewItem: [],
  deleteItem: [],
};

const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        addItem: action.payload,
      };
    case EDIT_ITEM:
      return {
        ...state,
        editItem: action.payload,
      };
    case VIEW_ITEM:
      return {
        ...state,
        viewItem: action.payload,
      };
    case DELETE_ITEM:
      return {
        ...state,
        deleteItem: action.payload,
      };
    default:
      return state;
  }
};

export default invoiceReducer;
