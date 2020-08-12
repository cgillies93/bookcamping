import Search from '../ui/Search';
import { connect } from 'react-redux';
import { suggestCampgroundNames } from '../../actions';

const mapStateToProps = (state) => {
  return {
    suggestions: state.campgroundNames.suggestions
    fetching: state.campgroundNames.fetching
  }
}

const mapDispatchToProps = dispatch => ({

  onChange(value) {
    if(value) {
      console.log(value)
      dispatch(
        suggestCampgroundNames(value)
      )
    } else {
      dispatch(
        clearSuggestions()
      )
    }
  }
})

const Container = connect(mapStateToProps, mapDispatchToProps)(Search);

export default Container;
