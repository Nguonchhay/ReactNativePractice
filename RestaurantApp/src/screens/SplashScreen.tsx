import React, { Dispatch, SetStateAction } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import { ROUTE_HOME } from './../../src/routes/Constants';

export default function({ navigation  } : any): JSX.Element {
    return (
        <View style={ {flex: 1, alignItems: 'center', margin: 0} }>
            <LottieView 
                source={require('../assets/splah-screen.json')}
                autoPlay
                loop={false}
                resizeMode='cover'
                onAnimationFinish={() => navigation.replace(ROUTE_HOME) }
            />
        </View>
    );
}