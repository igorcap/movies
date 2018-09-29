import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';


class Home extends PureComponent {
  render() {
    console.log(this.props);
    this.props.test();
    return (
      'Oi'
    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  test: () =>
    dispatch(actions.discoverMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
