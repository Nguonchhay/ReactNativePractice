import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button, HStack, Pressable } from 'native-base';
import { ROUTE_REGISTER } from '../../configs/Constants';

const LoginScreen = ({ navigation }: any): JSX.Element => {

    const loginHandler = () => {

    }

    const goToSignUp = () => {
        navigation.push(ROUTE_REGISTER);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Log in to your account</Text>

            <View style={styles.input}>
                <Input
                    size="lg"
                    variant="rounded"
                    placeholder='Email or Phone'
                />
            </View>

            <View style={styles.input}>
                <Input
                    size="lg"
                    variant="rounded"
                    placeholder='Password'
                    secureTextEntry={true}
                />
            </View>

            <View style={styles.input}>
                <Button onPress={loginHandler}>
                    Login
                </Button>
            </View>

            <HStack space={2} justifyContent="center" mt="1">
                <Button>Facebook</Button>
                <Button>Google</Button>
            </HStack>

            <HStack space={2} justifyContent="center" mt="10">
                <Text>Create new account?</Text>
                <Pressable onPress={goToSignUp}>
                    <Text color="colorBlue.200">Sign up</Text>
                </Pressable>
                
            </HStack>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {

    },
    input: {

    },
    socialContainer: {

    },
    signUpContainer: {

    },
});

export default LoginScreen