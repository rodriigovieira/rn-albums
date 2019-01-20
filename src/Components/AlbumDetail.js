import React from 'react';
import { View, Text, Image, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// Component

const AlbumDetail = ({ album: { title, artist, thumbnail_image, image, url } }) => (
  <Card>
    <CardSection>
      <View style={styles.thumbnailContainerStyle}>
        <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
      </View>
      <View style={styles.headerContentStyle}>
        <Text style={styles.headerTextStyle}>{title}</Text>
        <Text>{artist}</Text>
      </View>
    </CardSection>

    <CardSection>
      <Image
        source={{ uri: image }}
        style={styles.imageStyle}
      />
    </CardSection>

    <CardSection>
      <Button onPress={() => Linking.openURL(url)}>
        Buy now!
      </Button>
    </CardSection>
  </Card>
);

// Styling

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyConter: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    heigth: 300,
    flex: 1,
    width: null,
  }
}

export default AlbumDetail;
