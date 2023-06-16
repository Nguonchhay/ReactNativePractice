import React, { Dispatch, SetStateAction } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ROUTE_HOME, ROUTE_ONBOARDING, STORAGE_ONBOARDING_KEY } from './../../src/routes/Constants';


export default function({ navigation  } : any): JSX.Element {
    const checkOnBoarding = async () => {
        let goNextScreen = ROUTE_HOME;
        try {
            const value = AsyncStorage.getItem(STORAGE_ONBOARDING_KEY);
            if (value === null) {
                goNextScreen = ROUTE_ONBOARDING;
            }
        } catch(err) {
            console.log(err);
        }
        navigation.replace(goNextScreen);
    }

    return (
        <View style={ {flex: 1, alignItems: 'center', margin: 0} }>
            <LottieView 
                source={require('../assets/splah-screen.json')}
                autoPlay
                loop={false}
                resizeMode='cover'
                onAnimationFinish={checkOnBoarding}
            />
        </View>
    );
}