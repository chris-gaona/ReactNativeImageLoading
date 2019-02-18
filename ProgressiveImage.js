import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

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
  render() {
    return (
      <View style={styles.container}>
        <Image {...this.props} />
      </View>
    )
  }
}