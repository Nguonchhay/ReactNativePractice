import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'native-base';
import { ROUTE_LOGIN } from '../configs/Constants';

export default function({ navigation }: any): JSX.Element {

    const gotoLogin = () => {
        navigation.push(ROUTE_LOGIN);
    }

    return (
        <View>
            <Text>Home screen</Text>
            <Button onPress={gotoLogin}>
                Go to login
            </Button>
        </View>
    );
}