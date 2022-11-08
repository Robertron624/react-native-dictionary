import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Homescreen from './screens/Homescreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Homescreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  bold_text:{
    fontWeight: "800",
    fontSize: "16em"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
