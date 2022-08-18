import {
  StyleSheet
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './views/screens/StartGameScreen';

const App = () => {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <StartGameScreen />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});

export default App;


