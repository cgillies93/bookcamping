import CampgroundItemPage from '../../pages/CampgroundItemPage';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    campgrounds: state.allCampgrounds
  }
}



const Container = connect(mapStateToProps)(CampgroundItemPage);

export default Container;
