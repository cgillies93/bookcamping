import TopDestinationsList from '../ui/TopDestinationsList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    campgrounds: state.allCampgrounds
  }
}

const Container = connect(mapStateToProps)(TopDestinationsList);

export default Container;
