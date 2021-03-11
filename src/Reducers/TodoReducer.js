const initialState = [
  { id: Math.random(), todo: "item 1", checked: false },
  { id: Math.random(), todo: "item 2", checked: true },
];

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat({
        id: Math.random(),
        todo: action.payload,
        checked: false,
      });
    case "CHECK_TODO":
      return state.map((elem) => {
        if (elem.id === action.payload)
          return { ...elem, checked: !elem.checked };
        return elem;
      });
    case "DELETE_TODO":
      return state.filter((elem) => elem.id !== action.payload);
    default:
      return state;
  }
};

export default TodoReducer;
