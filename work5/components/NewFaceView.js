import { Camera } from 'react-native-vision-camera';
import { useState } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';

export default function NewFaceView() {
 return (
      <View style={styles.container}>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
 );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 5,
    height : 400,
  }
});
