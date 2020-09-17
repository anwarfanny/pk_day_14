import * as actionTypes from "./actiontTypes";

export const AddTodos = (value) => {
  return { type: actionTypes.ADD_TODOS, playload: values };
};

export const DeleteTodos = (id) => {
  return {
    type: actionTypes.DELETE_TODOS,
    playload: id,
  };
};

export const UpdateTodos = (id) => {
  return {
    type: actionTypes.UPDATE_TODOS,
    playload: id,
  };
};
