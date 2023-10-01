
import * as types from "./Auth.actionTypes"
import Cookies from 'js-cookie';

//const token = JSON.parse(localStorage.getItem("authToken")) || false;

const initialState = {
  student: [],
  token: false,
  isAuth: false,
  isLoading: false,
  isError: false,
  message: null,
  isAuthenticated: false, // New state to track token presence
  
}



export const authReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {

    // Add student signup action cases
    case types.AUTH_STUDENT_SIGNUP_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.AUTH_STUDENT_SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: payload.message,
      };

    case types.AUTH_STUDENT_SIGNUP_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: payload.message,
      };



    // Add teacher signup action cases
    case types.AUTH_TEACHER_SIGNUP_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.AUTH_TEACHER_SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: payload.message,
      };

    case types.AUTH_TEACHER_SIGNUP_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: payload.message,
      };




    // Student Login  code

    case types.AUTH_STUDENT_LOGIN_REQUEST:
      return { ...state, isAuth: false, isLoading: true, isError: false }

    case types.AUTH_STUDENT_LOGIN_SUCCESS:
      // Retrieve the token from the cookie
      const tokenCookie = Cookies.get('StudentToken');
      console.log(tokenCookie,"In reducer")
      return {
        ...state,
        isAuth: true,
        token: payload.token,
        message: payload.message,
        isLoading: false,
        isError: false
      }

    case types.AUTH_STUDENT_LOGIN_ERROR:
      return {
        ...state,
        isAuth: false,
        token: false,
        message: payload.message,
        isLoading: false,
        isError: true,
      }


      // Teacher Login  code

      case types.AUTH_TEACHER_LOGIN_REQUEST:
        return { ...state, isAuth: false, isLoading: true, isError: false }
  
      case types.AUTH_TEACHER_LOGIN_SUCCESS:
        // Retrieve the token from the cookie
        const teacherTokenCookie = Cookies.get('StudentToken');
        console.log(teacherTokenCookie,"In Teacher reducer")
        return {
          ...state,
          isAuth: true,
          token: payload.token,
          message: payload.message,
          isLoading: false,
          isError: false
        }
  
      case types.AUTH_TEACHER_LOGIN_ERROR:
        return {
          ...state,
          isAuth: false,
          token: false,
          message: payload.message,
          isLoading: false,
          isError: true,
        }


// check wheter user is token is expired or not
      case types.AUTH_STUDENT_CHECK_TOKEN:
        return {
          ...state,
          isAuthenticated: payload.isAuthenticated,
        };




    case types.AUTH_STUDENT_LOGOUT:

     // localStorage.clear("authToken");
     Cookies.remove('StudentToken');
     Cookies.remove("userId")
      return {
        ...state,
        isAuth: false,
        token: false,
        message: null,
        isAuthenticated:false,

      }


    case types.AUTH_STUDENT_RESET_MESSAGE:
        return {
          ...state,
          message: null,
        };

    case types.GET_SINGLE_STUDENT:

      return {

        ...state,
        isAuth: true,
        student: payload,
        isLoading: false,
        isError: false

      }

    default:
      return state;

  }


}