const initState = {
  count: 0,
};
const countReducer = (state = initState, action) => {
  console.log("action", action.payload);
  switch (action.type) {
    case "INC":
      return {
        count: state.count + action.payload,
      };

    case "DEC":
      return {
        count: state.count + action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default countReducer;
