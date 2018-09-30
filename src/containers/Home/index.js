import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions';


class Home extends PureComponent {
  render() {
    console.log(this.props);
    this.props.discoverLatest();
    return (
      'Oi'
    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
