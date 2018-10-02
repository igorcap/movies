import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Image, Loader } from 'semantic-ui-react';
import Carousel from 'nuka-carousel';
import * as actions from '../actions';
import Header from './Header';

const baseImgUrl = 'https://image.tmdb.org/t/p/';

const styles = {
};

class Home extends PureComponent {
  componentWillMount() {
    this.props.discoverAllMovies();
  }

  showMovieDetails = (id) => {
    this.props.getMovieDetail(id);
  }

  discoverComponent = () => {
    const {
      latest,
      upcoming,
      popular,
      topRated,
    } = this.props;
    return (
      <div className="discover">
        <h2>Latest movies</h2>
        <Carousel
          framePadding="0px"
          slidesToShow={8}
          cellSpacing={5}
          initialSlideHeight={10}
          wrapAround
          autoplay
          style={styles.base}
        >
          {latest ?
            latest.results.map(e => (
              <Image
                key={e.id}
                onClick={() => this.showMovieDetails(e.id)}
                src={`${baseImgUrl}/w342/${e.poster_path}`}
              />))
            : <Loader active />}
        </Carousel>
        <h2>Popular movies</h2>
        <Carousel
          framePadding="0px"
          slidesToShow={8}
          cellSpacing={5}
          initialSlideHeight={10}
          wrapAround
          autoplay
          style={styles.base}
        >
          {popular ?
            popular.results.map(e => (
              <Image
                key={e.id}
                onClick={() => this.showMovieDetails(e.id)}
                src={`${baseImgUrl}/w342/${e.poster_path}`}
              />))
            : <Loader active />}
        </Carousel>
        <h2>Top rated movies</h2>
        <Carousel
          framePadding="0px"
          slidesToShow={8}
          cellSpacing={5}
          initialSlideHeight={10}
          wrapAround
          autoplay
          style={styles.base}
        >
          {topRated ?
            topRated.results.map(e => (
              <Image
                key={e.id}
                onClick={() => this.showMovieDetails(e.id)}
                src={`${baseImgUrl}/w342/${e.poster_path}`}
              />))
            : <Loader active />}
        </Carousel>
        <h2>Upcoming movies</h2>
        <Carousel
          framePadding="0px"
          slidesToShow={8}
          cellSpacing={5}
          initialSlideHeight={10}
          wrapAround
          autoplay
          style={styles.base}
        >
          {upcoming ?
            upcoming.results.map(e => (
              <Image
                key={e.id}
                onClick={() => this.showMovieDetails(e.id)}
                src={`${baseImgUrl}/w342/${e.poster_path}`}
              />))
            : <Loader active />}
        </Carousel>
      </div>
    );
  }

  render() {
    const {
      loading
    } = this.props;
    console.log(this.props);
    return (
      <React.Fragment>
        <Header />
        {
          loading ? <Loader active /> : this.discoverComponent()
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  latest: state.moviesReducer.discover.latest,
  upcoming: state.moviesReducer.discover.upcoming,
  popular: state.moviesReducer.discover.popular,
  topRated: state.moviesReducer.discover.topRated,

});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
