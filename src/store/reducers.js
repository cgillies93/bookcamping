import C from '../constants';
import { combineReducers } from 'redux';

export const campground = (state=null, action) =>
  (action.type === C.ADD_CAMPGROUND) ?
    action.payload :
    state


export const reservation = (state=null, action) =>
  (action.type === C.MAKE_RESERVATION) ?
    action.payload :
    state


export const errors = (state=[], action) => {

  switch(action.type) {
    case C.ADD_ERROR:
      return [
        ...state,
        action.payload
      ]

    case C.CLEAR_ERROR:
      return state.filter((message, i) => i !== action.payload)

    default:
      return state
  }
}

export const allCampgrounds = (state=[], action) => {
  switch(action.type) {
    case C.ADD_CAMPGROUND:
      const hasCampground = state.some(campground => campground.name !== action.payload.name);
      return (hasCampground) ?
        state :
        [
          ...state,
          campground(null, action)
        ]

    case C.REMOVE_CAMPGROUND:
      return state.filter(campground => campground.id !== action.payload.id);

    default:
      return state;
  }
}

export const allReservations = (state=[], action) => {

  switch(action.type) {
    case C.MAKE_RESERVATION:
      const hasReservation = state.some(reservation => reservation.campgroundName !== action.payload.campgroundName);
      return (hasReservation) ?
        state :
        [
          ...state,
          reservation(null, action)
        ]

    case C.CANCEL_RESERVATION:
      return state.filter(reservation => reservation.id !== action.payload.id)

    default:
      return state
  }
}

export const fetching = (state=false, action) => {

  switch(action.type) {

    case C.FETCH_CAMPGROUNDS:
      return true;

    case C.FETCH_CAMPGROUND_DETAILS:
      return true;

    case C.FETCH_RESERVATIONS:
      return true;

    case C.FETCH_ARTICLES:
      return true;

    case C.FETCH_ARTICLE_DETAILS:
      return true;

    case C.CANCEL_FETCHING:
      return false;

    case C.CHANGE_SUGGESTIONS:
    return false;

    default:
      return state;
  }
}

export const suggestions = (state=[], action) => {

  switch(action.type) {

    case C.CLEAR_SUGGESTIONS:
      return [];

    case C.CHANGE_SUGGESTIONS:
      return action.payload

    default:
      return state;
  }
}


export default combineReducers({
  allCampgrounds,
  allReservations,
  errors,
  campgroundNames: combineReducers({
    fetching,
    suggestions
  })
});
