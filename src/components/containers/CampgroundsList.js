import CampgroundsList from '../ui/CampgroundsList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    campgrounds: state.allCampgrounds
  }
}


const Container = connect(mapStateToProps)(CampgroundsList);

export default Container;
