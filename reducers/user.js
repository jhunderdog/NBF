export const initialState = {
  isLoggingIn: false,
  isLoggedIn: false,
  isLoggingOut: false,
  me: null,
  signUpData: {},
  loginData: {},
};

export const loginAction = (data) => {
  return (dispatch, getState) => {
    const state = getState();

    dispatch(loginRequestAction());
    axios
      .post("/api/login")
      .then((res) => {
        dispatch(loginSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(loginFailureAction(err));
      });
  };
};
export const loginRequestAction = (data) => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};

export const logoutRequestAction = () => {
  return {
    type: "LOG_OUT_REQUEST",
  };
};

const changeNickname = (data) => {
  return {
    type: "CHANGE_NICKNAME",
    data,
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOG_IN_REQUEST":
      console.log("reducer login");
      return {
        ...state,
        isLoggingIn: true,
      };
    case "LOG_IN_SUCCESS":
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        me: { ...action.data, nickname: "zerocho" },
      };

    case "LOG_IN_FAILURE":
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
      };

    case "LOG_OUT_REQUEST":
      return {
        ...state,
        isLoggingOut: true,
        me: null,
      };

    case "LOG_OUT_SUCCESS":
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false,
        me: null,
      };

    case "LOG_OUT_FAILURE":
      return {
        ...state,
        isLoggingOut: false,
        me: null,
      };
    default:
      return state;
  }
};

export default reducer;
