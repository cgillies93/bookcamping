import CampgroundsPage from '../../pages/CampgroundsPage';
import { connect } from 'react-redux';
import { setQuery } from '../../actions';

const mapStateToProps = (state) => {
  return {
    campgrounds: state.allCampgrounds,
    query: state.query
  }
}

const mapDispatchToProps = dispatch =>
  ({
    onSetQuery(query) {
      dispatch(
        setQuery(query)
      )
    }
  })


const Container = connect(mapStateToProps, mapDispatchToProps)(CampgroundsPage);

export default Container;
