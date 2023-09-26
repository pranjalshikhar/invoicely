export const ADD_ITEM = "ADD_ITEM";
export const addItem = (payload) => {
  return {
    type: ADD_ITEM,
    payload,
  };
};

export const EDIT_ITEM = "EDIT_ITEM";
export const editItem = (payload) => {
  return {
    type: EDIT_ITEM,
    payload,
  };
};

export const VIEW_ITEM = "VIEW_ITEM";
export const viewItem = (payload) => {
  return {
    type: VIEW_ITEM,
    payload,
  };
};

export const DELETE_ITEM = "DELETE_ITEM";
export const deleteItem = (payload) => {
  return {
    type: DELETE_ITEM,
    payload,
  };
};
