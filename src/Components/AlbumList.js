import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import AlbumDetail from './AlbumDetail';

// http://rallycoding.herokuapp.com/api/music_albums

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    fetch('http://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => response.json())
      .then((response) => this.setState({ albums: response.data }));
  }

  renderAlbumbs = () => {
    return this.state.albums.map((value) => <AlbumDetail album={value} key={value.title} />);
  }
  
  render() {
    return (
      <ScrollView>
        {this.renderAlbumbs()}
      </ScrollView>
    );
  };
}

export default AlbumList;
