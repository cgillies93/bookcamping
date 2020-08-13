import Search from '../ui/Search';
import { connect } from 'react-redux';
import { setQuery } from '../../actions';

const mapStateToProps = (state) => {
  return {
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

const Container = connect(mapStateToProps, mapDispatchToProps)(Search);

export default Container;
