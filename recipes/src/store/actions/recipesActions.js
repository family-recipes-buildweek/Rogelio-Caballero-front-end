import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios.post('', creds).then(res => {
    localStorage.setItem('token', res.data.payload);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
  });
};

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const USER_UNAUTHORIZED = 'FETCH_DATA_FAILURE';

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
    .get('', {
      headers: { Authorization: localStorage.getItem('token') }
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

export const DELETE_START = 'DELETE_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';

export const deleteFriends = id => dispatch => {
  dispatch({ type: DELETE_START });
  axios
    .delete(``, {
      headers: { Authorization: localStorage.getItem('token') }
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

export const ADD_RECIPES_START = 'ADD_RECIPES_START';
export const ADD_RECIPES_SUCCESS = 'ADD_RECIPES_SUCCESS';
export const ADD_RECIPES_FAILURE = 'ADD_RECIPES_FAILURE';

export const addFriend = friend => dispatch => {
  dispatch({ type: ADD_RECIPES_FAILURE });
  return axios
    .post('', friend, {
      headers: { Authorization: localStorage.getItem('token') }
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

export const EDIT_RECIPES_START = 'EDIT_RECIPES_START';
export const EDIT_RECIPES_SUCCESS  = 'EDIT_RECIPES_SUCCESS ';
export const EDIT_RECIPES_FAILURE = 'EDIT_RECIPES_FAILURE';

export const editFriend = friend => dispatch => {
  dispatch({ type: EDIT_RECIPES_START });
  return axios
    .put(``, friend, {
      headers: { Authorization: localStorage.getItem('token') }
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