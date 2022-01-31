import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import HomeScreenStyle from '../../styles/HomeStyle';

const HomeScreen = () => {
    return (
        <View style={HomeScreenStyle.container}>
            <View>
                <Text style={HomeScreenStyle.welcomeHeader}>Good Morning</Text>
            </View>
            <View>
                <TouchableOpacity
                    style={HomeScreenStyle.mainActionButton}
                    onPress={() => console.log('Pressed!')}
                    >
                    <Text style={HomeScreenStyle.mainActionText}>START</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HomeScreen;