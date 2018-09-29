import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';


class Home extends PureComponent {
  render() {
    console.log(this.props);
    console.log(process.env.REACT_APP_API_KEY);
    this.props.discoverMovies();
    return (
      'Oi'
    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  discoverMovies: () =>
    dispatch(actions.discoverMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
