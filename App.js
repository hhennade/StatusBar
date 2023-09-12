import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Statusbar harjoitus, statusbar piilotettuna</Text>
      <StatusBar
        style="auto"
        hidden={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    paddingLeft: 20,
  },
});
