import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import ProgressiveImage from './ProgressiveImage';

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ProgressiveImage
          thumbnailSource={{ uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?w=50&buster=${Math.random()}` }}
          source={{ uri: `https://images.pexels.com/photos/671557/pexels-photo-671557.jpeg?w=${width * 2}&buster=${Math.random()}` }}
          style={{ width, height: width }}
          resizeMode="cover"
        />
      </View>
    );
  }
}
