import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Card, Icon, Image } from 'semantic-ui-react';

import * as actions from '../../actions';

const baseImgUrl = 'https://image.tmdb.org/t/p/';

class Home extends PureComponent {
  componentWillMount() {
    this.props.discoverAllMovies();
  }
  render() {
    console.log(this.props);
    return (
      <Grid columns="two" divided>
        <Card>
          <Image />
          <Card.Content>
            <Card.Header>Daniel</Card.Header>
            <Card.Meta>Joined in 2016</Card.Meta>
            <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              10 Friends
            </a>
          </Card.Content>
        </Card>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  latest: state.moviesReducer.discover.latest,
  upcoming: state.moviesReducer.discover
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
