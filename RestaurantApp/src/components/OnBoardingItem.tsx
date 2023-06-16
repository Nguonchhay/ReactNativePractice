import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';


interface OnBoardingItemProps {
    item: any
}

const OnBoardingItem = (
    {
        item
    }: OnBoardingItemProps
):JSX.Element => {

    const { width } = useWindowDimensions();

    return (
        <View style={ [styles.container, { width }]}>
            <Image
                source={item.imageUrl}
                style={[ styles.image, {width, resizeMode: 'contain'} ]}
            />
            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 0.7,
        justifyContent: 'center',
    },
    content: {
        flex: 0.3
    },
    title: {
        fontWeight: '300',
        fontSize: 28,
        color: '#493d8a',
        textAlign: 'center',
        marginBottom: 10,
    },
    description: {
        fontWeight: '300',
        color: '#62656b',
        textAlign: 'center',
        paddingHorizontal: 64,
    },
});

export default OnBoardingItem;