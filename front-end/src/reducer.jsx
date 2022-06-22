export const initialState = {
  basket: [],
  // user: {
  //   name:'Ricky',
  //   email:'ricky@gmail.com'
  // },
  user:null

};

// selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  // console.log(action.user);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        // user:[...state.user,action.user],
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
