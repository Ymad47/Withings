import * as React from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground } from 'react-native';
//import Navigator from './Navigation/Navigator'
import 'react-native-gesture-handler';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const image = { uri: "https://reactjs.org/logo-og.png" };
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bienvenue sur Mrehab !</Text>
      <Text style={styles.instructions}>Test api withings</Text>
      <Text style={styles.instructions}>{instructions}</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2f4f4f',

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'white',
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
});
