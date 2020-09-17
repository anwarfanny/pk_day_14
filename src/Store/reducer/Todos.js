import * as actionTypes from "../actions/actiontTypes";

const initialState = [];
let countId = 0;

const addTodo = (state, payload) => {
  return [
    ...state,
    {
      id: countId++,
      Day: payload.Day,
      Activies: payload.Activies,
    },
  ];
};

const deleteItem = (state, payload) => {
  const updateArray = state.filter((item) => item.id !== payload);
  return [...updateArray];
};

const Todos = (state = initialState, action) => {
  const { payload } = action;
  switch (action.Type) {
    case actionTypes.ADD_TODOS:
      return addTodo(state, payload);
    case actionTypes.DELETE_TODOS:
      return deleteItem(state, payload);
    case actionTypes.UPDATE_TODOS:
      return state, payload;
    default:
      return;
  }
};

export default Todos;
