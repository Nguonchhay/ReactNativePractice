import React, { useState, useRef } from 'react';
import { View, StyleSheet, FlatList, Animated } from 'react-native';
import { Button } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';

import OnBoardingItem from '../components/OnBoardingItem';
import OnBoardingPaginator from '../components/OnBoardingPaginator';
import { ROUTE_HOME, STORAGE_ONBOARDING_KEY } from '../routes/Constants';

interface SlideDataType {
    id: number,
    title: string,
    description?: string,
    imageUrl: string
}

const slideData: SlideDataType[] = [
    {
        "id": 1,
        "title": "Food You Love",
        "description": "You can specify how many words should be generated right next to the word 'lorem'. For example, lorem5 will generate a 5-words dummy text.",
        "imageUrl": require("../assets/welcome-1.png")
    },
    {
        "id": 2,
        "title": "Fast Delivery",
        "description": "You can specify how many words should be generated right next to the word 'lorem'. For example, lorem5 will generate a 5-words dummy text.",
        "imageUrl": require("../assets/welcome-2.png")
    },
    {
        "id": 3,
        "title": "Live Tracking",
        "description": "You can specify how many words should be generated right next to the word 'lorem'. For example, lorem5 will generate a 5-words dummy text.",
        "imageUrl": require("../assets/welcome-3.png")
    }
];

const OnBoardingScreen = ({ navigation  } : any): JSX.Element => {
    const [curIndex, setCurrentIndx] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slideRef = useRef(null);
    const viewableItemsChanged = useRef(({ viewableItems }: any) => {
        setCurrentIndx(viewableItems[0].index)
    }).current;

    const onSkipHandler = async () => {
        await AsyncStorage.setItem(STORAGE_ONBOARDING_KEY, 'true');
        navigation.replace(ROUTE_HOME);
    }

    return (
        <View style={ styles.container }>
            <View style={styles.slideContainer}>
                <FlatList
                    data={slideData}
                    renderItem={({ item }) => <OnBoardingItem item={item} /> }
                    horizontal
                    showsHorizontalScrollIndicator
                    pagingEnabled
                    bounces={false}
                    keyExtractor={item => item.id}
                    scrollEventThrottle={32}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } }}], 
                        { useNativeDriver: false} 
                    )}
                    onViewableItemsChanged={viewableItemsChanged}
                />
            </View>

            <OnBoardingPaginator data={slideData} scrollX={scrollX} />

            <View style={styles.buttonContainer}>
                {
                    curIndex > 1 &&  (
                        <Button
                            containerStyle={styles.button}
                            title="SKIP"
                            type="clear"
                            titleStyle={styles.buttonTitle}
                            onPress={onSkipHandler}
                        />
                    )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    slideContainer: {
        flex: 9,
    },
    buttonContainer: {
        flex: 1,
    },
    button: {
        width: 200,
        marginHorizontal: 50,
        marginVertical: 10,
    },
    buttonTitle: {
        color: 'rgba(78, 116, 289, 1)'
    },
});

export default OnBoardingScreen;