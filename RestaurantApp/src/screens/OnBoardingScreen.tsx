import React, { useState, useRef } from 'react';
import { View, StyleSheet, FlatList, Animated } from 'react-native';

import OnBoardingItem from '../components/OnBoardingItem';

const OnBoardingScreen = (): JSX.Element => {
    const slideData = [
        {
            "id": 1,
            "title": "Food You Love",
            "descripton": "You can specify how many words should be generated right next to the word 'lorem'. For example, lorem5 will generate a 5-words dummy text.",
            "imageUrl": require("../assets/welcome-1.png")
        },
        {
            "id": 2,
            "title": "Fast Delivery",
            "descripton": "You can specify how many words should be generated right next to the word 'lorem'. For example, lorem5 will generate a 5-words dummy text.",
            "imageUrl": require("../assets/welcome-2.png")
        },
        {
            "id": 3,
            "title": "Live Tracking",
            "descripton": "You can specify how many words should be generated right next to the word 'lorem'. For example, lorem5 will generate a 5-words dummy text.",
            "imageUrl": require("../assets/welcome-3.png")
        }
    ];

    const [curIndex, setCurrentIndx] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndx(viewableItems[0].index)
    }).current;

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
                    keyExtractor={(item) => item.id}
                    scrollEventThrottle={32}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } }}], 
                        { useNativeDriver: false} 
                    )}
                    onViewableItemsChanged={viewableItemsChanged}
                />
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
        flex: 3,
    }
});

export default OnBoardingScreen;