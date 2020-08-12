import MyReservations from '../ui/MyReservations';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    reservations: state.allReservations
  }
}


const Container = connect(mapStateToProps)(MyReservations);

export default Container;
