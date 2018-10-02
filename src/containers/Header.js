import React, { PureComponent } from 'react';
import { Image, Grid, Button } from 'semantic-ui-react';
import { push } from 'react-router-redux';

class Header extends PureComponent {
  render() {
    return (
      <Grid>
        <Grid.Column floated="left" width={3}>
          <Button fluid onClick={() => push('/#')}>Home</Button>
        </Grid.Column>
        <Grid.Column floated="right" width={5}>
          <Button fluid>Fits to Container</Button>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Header;
