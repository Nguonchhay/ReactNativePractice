import { useState } from 'react'; 
import {
  ImageBackground,
  StyleSheet
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './views/screens/StartGameScreen';
import GameScreen from './views/screens/GameScreen';

const App = () => {
  const [screen, setScreen] = useState('start');

  let renderScreen = <StartGameScreen onSetScreen={setScreen}/>
  if (screen === 'game') {
    renderScreen = <GameScreen/>
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/background.png')} 
        resizeMode="cover" 
        imageStyle={{opacity: 0.4}}
        style={styles.rootScreen}
      >
        {renderScreen}
      </ImageBackground>  
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});

export default App;


