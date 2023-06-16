import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';


 const RegisterScreen = (): JSX.Element => {

    const user = useSelector(state => state.authReducer.user);

    return (
        <View>
            <Text>Register screen</Text>
        </View>
    );
}

export default RegisterScreen;