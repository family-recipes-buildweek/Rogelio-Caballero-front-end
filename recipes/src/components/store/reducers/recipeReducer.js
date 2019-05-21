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
    LOGIN_SUCCESS
  } from '../actions/recipesActions';

const initialState = {

    addingRecipe:false,
    deletingRecipe: false,
    editingRecipe: false,
    error: '',
    errorStatusCode: null,
    fetchingRecipes: false,
    loggingIn:false,
    token:localStorage.getItem('token'),
    recipes:[
    {
        id:1,
        title:'Yum-Yum-Tacos',
        img:'https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?cs=srgb&dl=blur-close-up-cuisine-2087748.jpg&fm=jpg',
        instructions:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
        nameOfSource:'mom',
        category:'mexican',
        Ingredients:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',

    },
    {
        id:2,
        title:'Get-Chubby-Lasagna',
        img:'https://images.pexels.com/photos/116738/pexels-photo-116738.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        instructions:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
        nameOfSource:'mom',
        category:'',
        Ingredients:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',

    },
    {
        id:3,
        title:'Extra-juicy-Steak',
        img:'https://images.pexels.com/photos/1268549/pexels-photo-1268549.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        instructions:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
        nameOfSource:'mom',
        category:'',
        Ingredients:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',

    },

    {
        id:4,
        title:'Some-Salt-Stuff',
        img:'https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        instructions:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
        nameOfSource:'mom',
        category:'mexican',
        Ingredients:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',

    },
    {
        id:5,
        title:'Winos',
        img:'https://images.pexels.com/photos/1893609/pexels-photo-1893609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        instructions:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
        nameOfSource:'mom',
        category:'mexican',
        Ingredients:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',

    },

{
        id:6,
        title:'Tiny-Burrito',
        img:'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        instructions:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
        nameOfSource:'mom',
        category:'mexican',
        Ingredients:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',

    },
    {
        id:7,
        title:'One-Chicken',
        img:'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        instructions:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',
        nameOfSource:'mom',
        category:'mexican',
        Ingredients:'1 pound ground beef 70-80% leantablespoon Chili Powde teaspoon Sal teaspoon Cumin teaspoon Dried Oreganoteaspoon Garlic Powde teaspoon Onion Powdercup tomato sauce',

    },
]

}

const rootReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case LOGIN_START:
        return {
          ...state,
          loggingIn: true
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loggingIn: false,
          token: action.payload
        };


      case FETCH_DATA_START:
        return {
          ...state,
          fetchingFriends: true
        };
      case FETCH_DATA_SUCCESS:
        return {
          ...state,
          error: '',
          errorStatusCode: null,
          fetchingFriends: false,
          friends: action.payload
        };
      case DELETE_START:
        return {
          ...state,
          deletingFriend: true
        };
      case DELETE_SUCCESS:
        return {
          ...state,
          deletingFriend: false,
          error: '',
          errorStatusCode: null,
          friends: action.payload
        };
      case USER_UNAUTHORIZED:
        console.log(action);
        return {
          ...state,
          error: action.payload.data.error,
          errorStatusCode: action.payload.status,
          fetchingFriends: false
        };
      case ADD_RECIPES_START:
        return {
          ...state,
          addingFriend: true
        };
      case ADD_RECIPES_SUCCESS:
        return {
          ...state,
          addingFriend: false,
          error: '',
          errorStatusCode: null,
          friends: action.payload
        };
      case EDIT_RECIPES_START:
        return {
          ...state,
          editingFriend: true
        };
      case EDIT_RECIPES_SUCCESS:
        return {
          ...state,
          editingFriend: false,
          error: '',
          errorStatusCode: null,
          friends: action.payload
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;