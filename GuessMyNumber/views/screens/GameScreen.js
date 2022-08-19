import { useState } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import Title from '../../components/ui/Title';
import NumberContainer from '../../components/games/NumberContainer';

function generateRandomBetween(min, max, exclude) {
    const randNum = Math.floor(Math.random() * (max - min)) + min;
    if (randNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randNum;
    }
}

const GameScreen = ({ userNumber }) => {
    const [curGuess, setCurGuess] = useState(generateRandomBetween(1, 100, userNumber));

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guest</Title>
            <NumberContainer>{curGuess}</NumberContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 25
    },
});

export default GameScreen;