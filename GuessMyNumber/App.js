import { useCallback, useEffect, useState } from 'react'; 
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import StartGameScreen from './views/screens/StartGameScreen';
import GameScreen from './views/screens/GameScreen';
import GameOverScreen from './views/screens/GameOverScreen';
import COLORS from './constants/Color';

const App = () => {
  const [screen, setScreen] = useState('start');
  const [inputNumber, setInputNumber] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const [ fontsLoaded ] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [ fontsLoaded ]);

  if (!fontsLoaded) {
    return null;
  }

  let renderScreen = <StartGameScreen inputNumber={inputNumber} onInputNumber={setInputNumber} onSetScreen={setScreen} onGameOver={setGameOver}/>
  if (screen === 'game') {
    renderScreen = <GameScreen userNumber={inputNumber} onGameOver={setGameOver} />
  }

  if (gameOver) {
    renderScreen = <GameOverScreen />;
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={[COLORS.primary700, COLORS.action500]} style={styles.rootScreen}>
        <ImageBackground 
          source={require('./assets/images/background.png')} 
          resizeMode="cover" 
          imageStyle={{opacity: 0.4}}
          style={styles.rootScreen}
        >
          <SafeAreaView style={styles.rootScreen}>
            <View onLayout={onLayoutRootView}>
              {renderScreen}
            </View>
          </SafeAreaView>
        </ImageBackground>  
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});

export default App;


