import C from './constants';
import Campgrounds from './campgrounds';

export function addCampground(id, name, location, website, phoneNumber, amenities, siteTypes) {

  return {
    type: C.ADD_CAMPGROUND,
    payload: {
      id,
      name,
      location,
      website,
      phoneNumber,
      amenities,
      siteTypes
    }
  }
}

export function removeCampground(id) {

  return {
    type: C.REMOVE_CAMPGROUND,
    payload: {id}
  }
}

export function makeReservation(reservationNumber,
                               campgroundName,
                               sites,
                               checkinDate, checkoutDate, totalPrice) {
  return {
    type: C.MAKE_RESERVATION,
    payload: {
      reservationNumber,
      campgroundName,
      sites,
      checkinDate,
      checkoutDate,
      totalPrice
    }
  }
}

export function cancelReservation(reservationNumber) {

  return {
    type: C.CANCEL_RESERVATION,
    payload: {reservationNumber}
  }
}

export function changeSuggestions(suggestions) {

  return {
    type: C.CHANGE_SUGGESTIONS,
    payload: suggestions
  }
}

export function clearSuggestions() {
  return {
    type: C.CLEAR_SUGGESTIONS
  }
}

export function addError(message) {

  return {
    type: C.ADD_ERROR,
    payload: message
  }
}

export function clearError(index) {

  return {
    type: C.CLEAR_ERROR,
    payload: index
  }
}

export function setQuery(query) {

  return {
    type: C.SET_QUERY,
    payload: query
  }
}










//
