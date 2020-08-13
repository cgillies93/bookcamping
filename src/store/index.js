import C from '../constants';
import appReducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const consoleMessages = store => next => action => {

  let result;

  console.groupCollapsed(`dispatching action => ${action.type}`)
  console.log(`campgrounds`, store.getState().allCampgrounds.length)

  result = next(action);

  let { allCampgrounds, allReservations, errors, campgroundNames, query } = store.getState();

  console.log(`

      campgrounds: ${allCampgrounds.length}
      reservations: ${allReservations.length}
      fetching: ${campgroundNames.fetching}
      suggestions: ${campgroundNames.suggestions}
      errors: ${errors.length}
      query: ${query.length}

    `)

  console.groupEnd()

  return result
}


export default (initialState={}) => {
  return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState);
};
