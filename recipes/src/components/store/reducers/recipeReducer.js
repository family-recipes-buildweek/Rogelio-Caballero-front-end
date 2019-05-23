import {
    USER_UNAUTHORIZED,
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    DELETE_START,
    DELETE_SUCCESS,
    ADD_RECIPES_START,
    ADD_RECIPES_SUCCESS,
    ADD_RECIPES_FAILURE,
    EDIT_RECIPES_START,
    EDIT_RECIPES_SUCCESS,
    EDIT_RECIPES_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    LOG_OUT
  } from '../actions/recipesActions';

const initialState = {
    loggedIn: false,
    addingRecipe:false,
    deletingRecipe: false,
    editingRecipe: false,
    error: null,
    errorStatusCode: null,
    fetchingRecipes: false,
    loggingIn:false,
    signingUp: false,
    token:localStorage.getItem('jwt'),
    // recipeSelected: {},
    recipes:[
     
  //     {
  //         id:4544564,
  //         title:'beef and noodles',
  //         // img:'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //         instructions:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
  //         // nameOfSource:'mom',
  //         // category:'mexican',
  //         // ingredients:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
  
  //     },
  //     {
  //         id:46456456,
  //         title:'Honey Garlic Salmon Recipe',
  //         img:'https://images.pexels.com/photos/1893609/pexels-photo-1893609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //         instructions:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
  //         nameOfSource:'crusty-krab',
  //         category:'mexican',
  //         ingredients:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
  
  //     },
  
  // {
  //         id:56757567,
  //         title:'Thai Turkey Soup',
  //         img:'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //         instructions:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
  //         nameOfSource:'mom',
  //         category:'mexican',
  //         ingredients:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
  
  //     },
  //     {
  //         id:4324234,
  //         title:'Garlic Butter Steak Tacos with Pico de gallo',
  //         img:'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  //         instructions:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
  //         nameOfSource:'mom',
  //         category:'mexican',
  //         ingredients:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
  
  //     },
  

  ],


}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
      case LOGIN_START:
      return {
        ...state,
        error: null,
        loggingIn: true,
        loggedIn:false,
        
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: null,
        token: action.payload,

      };
    case LOGIN_ERROR:
      return {
        ...state,
        loggingIn: false,
        error: action.payload
      };
    case SIGNUP_START:
      return {
        ...state,
        error: null,
        signingUp: true
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        error: null,
        signingUp: false,
        loggedIn: true,
        token: action.payload
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        signingUp: false,
        error: action.payload
      };
      case LOG_OUT:
      return {
        ...state,
        loggedIn: false,
        token: null
      };
///////////////////////////////////////////
      case FETCH_DATA_START:
        return {
          ...state,
          fetchingRecipes: true,
          loggedIn: true,
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          error: null,
          errorStatusCode: null,
          fetchingRecipes: false,
          recipes: action.payload,
          loggedIn: true,
        };
      case DELETE_START:
        return {
          ...state,
          deletingRecipe: true,
          loggedIn: true,
        };
      case DELETE_SUCCESS:
        return {
          ...state,
          deletingRecipe: false,
          error: null,
          errorStatusCode: null,
          recipes: action.payload,
          loggedIn: true,
        };
      case USER_UNAUTHORIZED:
        console.log(action);
        return {
          ...state,
          error: action.payload.data.error,
          errorStatusCode: action.payload.status,
          fetchingRecipes: false,
          loggedIn: true,
        };
      case ADD_RECIPES_START:
        return {
          ...state,
          addingRecipe: true,
          loggedIn: true,
        };
      case ADD_RECIPES_SUCCESS:
        return {
          ...state,
          addingRecipe: false,
          error: null,
          errorStatusCode: null,
          recipes: action.payload,
          loggedIn: true,
        };
      case EDIT_RECIPES_START:
        return {
          ...state,
          editingRecipe: true,
          loggedIn: true,
        };
      case EDIT_RECIPES_SUCCESS:
        return {
          ...state,
          editingRecipe: false,
          error: null,
          errorStatusCode: null,
          recipes: action.payload,
          loggedIn: true,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;