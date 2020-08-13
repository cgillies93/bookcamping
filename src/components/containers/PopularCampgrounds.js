import PopularCampgroundsList from '../ui/PopularCampgroundsList';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    campgrounds: state.allCampgrounds
  }
}

const Container = connect(mapStateToProps)(PopularCampgroundsList);

export default Container;
