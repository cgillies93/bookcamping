import CampgroundsPage from '../../pages/CampgroundsPage';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    campgrounds: state.allCampgrounds,
    query: state.query
  }
}


const Container = connect(mapStateToProps)(CampgroundsPage);

export default Container;
