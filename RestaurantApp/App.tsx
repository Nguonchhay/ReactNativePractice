import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import { 
  ROUTE_HOME, 
  ROUTE_SPLASH,
  ROUTE_ONBOARDING
} from './src/routes/Constants';
import store from './src/redux/store';


const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={ROUTE_SPLASH} component={SplashScreen} options={ {headerShown: false} } />
            <Stack.Screen name={ROUTE_ONBOARDING} component={OnBoardingScreen} options={ {headerShown: false} } />
            <Stack.Screen name={ROUTE_HOME} component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
