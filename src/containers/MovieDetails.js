import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Item, Button, Icon, Label, Grid } from 'semantic-ui-react';
import * as actions from '../actions';
import Header from './Header';

const baseImgUrl = 'https://image.tmdb.org/t/p/';

class MovieDetails extends PureComponent {
  render() {
    const {
      movie
    } = this.props;
    console.log(movie);
    return (
      <React.Fragment>
        <Header />
        {movie &&
          <div className="movie-details">
            <Item.Group divided>

              <Item>
                <Item.Image src={`${baseImgUrl}/w500/${movie.poster_path}`} />
                <Grid.Row>
                  <Item.Content>
                    <Item.Header as="a">{movie.title}</Item.Header>
                    <Item.Meta>
                      <span className="cinema">{movie.popularity}</span>
                    </Item.Meta>
                    <Item.Description>{movie.overview}</Item.Description>
                    <Item.Extra>
                      <Button primary floated="right">
                See more
                        <Icon name="right chevron" />
                      </Button>
                      <Label>{movie.status}</Label>
                      <Label icon="time">{movie.runtime}</Label>
                      <Label icon="star">{movie.vote_average}</Label>
                    </Item.Extra>
                  </Item.Content>
                </Grid.Row>
              </Item>
            </Item.Group>
          </div>}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.moviesReducer.movieDetails
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);

