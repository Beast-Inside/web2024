import { useState } from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';


export default function FaceView() {
  const [facing, setFacing] = useState('front');
  const [permission, requestPermission] = useCameraPermissions();
  
  if (!permission) {
     return <View style={styles.container}><Text>ไม่มีกล้อง</Text></View>
  }
  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  var b1=require("../assets/e1.png");
  var b2=require("../assets/b2.png");

  function toggleFace(){
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  } 
   
  return (
    <View style={styles.container}>
      <CameraView 
      style={{height: "100%", width:"100%"}} 
      facing={facing} 
      mirror={false}
      >
      <Button title="สลับกล้อง" onPress={toggleFace} />
      <Text>{facing}</Text>
      </CameraView>      
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
