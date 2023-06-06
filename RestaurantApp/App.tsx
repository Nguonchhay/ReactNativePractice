import React, { useState } from 'react';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';

function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    isLoading ? <SplashScreen setIsLoading={setIsLoading} /> : <HomeScreen/>
  );
}

export default App;
