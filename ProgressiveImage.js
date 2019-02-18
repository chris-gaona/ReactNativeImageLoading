import React, { Component } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const styles = StyleSheet.create({
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    backgroundColor: '#e1e4e8',
  },
});

export default class extends Component {
  thumbnailAnimated = new Animated.Value(0);
  imageAnimated = new Animated.Value(0);

  handleThumbnailLoad = () => {
    Animated.timing(this.thumbnailAnimated, {
      toValue: 1
    }).start()
  }

  onImageLoad = () => {
    Animated.timing(this.imageAnimated, {
      toValue: 1
    }).start()
  }

  render() {
    const {
      thumbnailSource,
      source,
      style,
      ...restOfProps
    } = this.props;

    return (
      <View style={styles.container}>
        <Animated.Image
          {...restOfProps}
          source={thumbnailSource}
          style={[style, { opacity: this.thumbnailAnimated }]}
          onLoad={this.handleThumbnailLoad}
          blurRadius={2}
        />
        <Animated.Image
          {...restOfProps}
          source={source}
          style={[styles.imageOverlay, { opacity: this.imageAnimated }, style]}
          onLoad={this.onImageLoad}
        />
      </View>
    )
  }
}