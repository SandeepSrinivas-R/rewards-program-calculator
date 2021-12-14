const Reducer = (state, action) => {
  switch (action.type) {
    case "dataUpdated":
      return {
        ...state,
        isDataUpdated: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
