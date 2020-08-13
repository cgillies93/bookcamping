import Search from '../ui/Search';
import { connect } from 'react-redux';
import { suggestCampgroundNames } from '../../actions';

const mapStateToProps = (state) => {
  return {
    campgrounds: state.campgrounds
  }
}

const Container = connect(mapStateToProps)(Search);

export default Container;
