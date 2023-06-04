import { createContext, useReducer } from "react";

export const Context = createContext();

const initialState = {
  loading: true,
  error: "",

  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "USER_REGISTER":
      return {
        ...state,
        userInfo: action.payload,
      };

    default:
      return state;
  }
};

export function ContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}
