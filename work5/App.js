import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import * as Font from 'expo-font';
import FaceView from './components/FaceView';  // Import FaceView properly

export default function App() {
  const [fontLoaded, setFontLoaded] = React.useState(false);
  const [fontsLoaded] = Font.useFonts({
    chakapetch: require('./assets/ChakraPetch-Regular.ttf'),
  });

  return (
    <ImageBackground 
      source={require('./assets/snack-icon.png')}  // ใส่รูปภาพที่ต้องการใช้เป็นพื้นหลัง
      style={styles.container}
    >
      <Card style={styles.card}>
        <FaceView />  {/* Use FaceView component */}
      </Card>
      <Text style={styles.title}>Work 5: <Text style={styles.whiteText}>Ballon Fish App</Text></Text>
      <Text style={styles.footer}>663380360-3 วจนะ ใต้ระฟัน</Text>
    </ImageBackground>
  );
}

async function loadFonts(setState) {
  await Font.loadAsync({
    chakapetch: require('./assets/ChakraPetch-Regular.ttf'),
  });
  setState(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'chakapetch',
    color: '#333',
    marginBottom: 20,
  },
  card: {
    width: '90%',
    borderRadius: 10,
    elevation: 5,
    padding: 20,
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',  // เพิ่มความโปร่งแสงในพื้นหลังของ Card
  },
  whiteText: {
    color: 'white',  // เปลี่ยนสีข้อความเป็นสีขาว
  },
  footer: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'chakapetch',
    color: '#777',
  },
});
