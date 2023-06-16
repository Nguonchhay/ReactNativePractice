import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen';
import OnBoardingScreen from './OnBoardingScreen';
import LoginScreen from './auth/LoginScreen';
import RegisterScreen from './auth/RegisterScreen';
import { 
    ROUTE_HOME, 
    ROUTE_SPLASH,
    ROUTE_ONBOARDING,
    ROUTE_LOGIN,
    ROUTE_REGISTER
  } from '../configs/Constants';

const Stack = createNativeStackNavigator();

const Screens = (): JSX.Element => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={ROUTE_SPLASH} component={SplashScreen} options={ {headerShown: false} } />
                <Stack.Screen name={ROUTE_ONBOARDING} component={OnBoardingScreen} options={ {headerShown: false} } />
                <Stack.Screen name={ROUTE_HOME} component={HomeScreen} />
                <Stack.Screen name={ROUTE_LOGIN} component={LoginScreen} options={ {headerShown: false} } />
                <Stack.Screen name={ROUTE_REGISTER} component={RegisterScreen} options={ {headerShown: false} } />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default Screens;