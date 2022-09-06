import { useState } from 'react'; 
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './views/screens/StartGameScreen';
import GameScreen from './views/screens/GameScreen';
import GameOverScreen from './views/screens/GameOverScreen';
import COLORS from './constants/Color';

const App = () => {
  const [screen, setScreen] = useState('start');
  const [inputNumber, setInputNumber] = useState('');
  const [gameOver, setGameOver] = useState(false);

  let renderScreen = <StartGameScreen inputNumber={inputNumber} onInputNumber={setInputNumber} onSetScreen={setScreen} onGameOver={setGameOver}/>
  if (screen === 'game') {
    renderScreen = <GameScreen userNumber={inputNumber} onGameOver={setGameOver} />
  }

  if (gameOver) {
    renderScreen = <GameOverScreen />;
  }

  return (
    <LinearGradient colors={[COLORS.primary700, COLORS.action500]} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/background.png')} 
        resizeMode="cover" 
        imageStyle={{opacity: 0.4}}
        style={styles.rootScreen}
      >
        <SafeAreaView style={styles.rootScreen}>
          {renderScreen}
        </SafeAreaView>
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


