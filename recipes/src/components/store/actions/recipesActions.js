import axios from 'axios';
axios.defaults.withCredentials=true

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const LOG_OUT ="LOG_OUT"

const baseUrl="https://team-family-recipes.herokuapp.com/api"

export const signUp = creds => dispatch => {
  dispatch({ type: SIGNUP_START });

 console.log(creds)

  return axios
    .post("https://team-family-recipes.herokuapp.com/api/register", creds)
    .then(res => {
      console.log('rel')
     localStorage.setItem("jwt", res.data.token);
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data.token});
    })
    .catch(err => console.log("register",err));
  
};

//////////////////////////////////////////////////////



export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  const endpoint1="https://team-family-recipes.herokuapp.com/api/login";

  return axios
  .post(endpoint1, creds).then(res => {
    localStorage.setItem('jwt', res.data.token);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
  });
};
//////////////////////////////////////////////


export const logOut =()=>{
  localStorage.removeItem('jwt');
  return {
  type:LOG_OUT
  }
}

/////////////////////////////////////////////////////////////////////////////////////////////////
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const USER_UNAUTHORIZED = 'FETCH_DATA_FAILURE';

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });

  const endpoint3="https://team-family-recipes.herokuapp.com/api/recipes";

  axios
    .get(endpoint3, {
      headers: { Authorization: localStorage.getItem('jwt') }
    })
    .then(res => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('call failed: ', err.response);
      if (err.response.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
      }
    });
};
//////////////////////////////////////////////////////
export const DELETE_START = 'DELETE_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';

export const deleteRecipe = id => dispatch => {
  dispatch({ type: DELETE_START });
  axios
    .delete(`https://team-family-recipes.herokuapp.com/api/recipe/${id}`, {
      headers: { Authorization: localStorage.getItem('jwt') }
    })
    .then(res => {
      dispatch({ type: DELETE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('call failed: ', err.response);
      if (err.response.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: DELETE_FAILURE, payload: err.response });
      }
    });
};
//////////////////////////////////////////////////////////////
export const ADD_RECIPES_START = 'ADD_RECIPES_START';
export const ADD_RECIPES_SUCCESS = 'ADD_RECIPES_SUCCESS';
export const ADD_RECIPES_FAILURE = 'ADD_RECIPES_FAILURE';

export const addRecipe= recipe => dispatch => {
  dispatch({ type: ADD_RECIPES_FAILURE });
  return axios
    .post('https://team-family-recipes.herokuapp.com/api/recipe', recipe, {
      headers: { Authorization: localStorage.getItem('jwt') }
    })
    .then(res => {
      dispatch({ type: ADD_RECIPES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.response.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: ADD_RECIPES_FAILURE, payload: err.response });
      }
    });
};
//////////////////////////////////////////////////////////////////
export const EDIT_RECIPES_START = 'EDIT_RECIPES_START';
export const EDIT_RECIPES_SUCCESS  = 'EDIT_RECIPES_SUCCESS ';
export const EDIT_RECIPES_FAILURE = 'EDIT_RECIPES_FAILURE';

export const editRecipe = recipe => dispatch => {
  dispatch({ type: EDIT_RECIPES_START });
  return axios
    .put(`https://team-family-recipes.herokuapp.com/api/${recipe.id}`, recipe, {
      headers: { Authorization: localStorage.getItem('jwt') }
    })
    .then(res => {
      dispatch({ type: EDIT_RECIPES_SUCCESS , payload: res.data });
    })
    .catch(err => {
      if (err.response.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: EDIT_RECIPES_FAILURE, payload: err.response });
      }
    });
};
