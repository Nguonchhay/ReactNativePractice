import { useEffect, useState } from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Title from '../../components/ui/Title';
import NumberContainer from '../../components/games/NumberContainer';
import PrimaryButton from './../../components/ui/PrimaryButton';

function generateRandomBetween(min, max, exclude) {
    const randNum = Math.floor(Math.random() * (max - min)) + min;
    if (randNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
    const initGuess = generateRandomBetween(1, 100, userNumber);
    const [curGuess, setCurGuess] = useState(initGuess);

    useEffect(() => {
        if (curGuess === userNumber) {
            onGameOver(true);
        }
    }, [curGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && curGuess < userNumber) ||
            (direction === 'higher' && curGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", 'You know that is wrong...', [
                { text: 'Sorry', style: 'cancel' }
            ]);
            return;
        }
        
        if (direction === 'lower') {
            maxBoundary = curGuess;            
        } else {
            minBoundary = curGuess + 1;
        }
        setCurGuess(generateRandomBetween(minBoundary, maxBoundary, curGuess));
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guest</Title>
            <NumberContainer>{curGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower?</Text>
                <View>
                    <PrimaryButton text="-" onPress={nextGuessHandler.bind(this, 'lower')}/>
                    <PrimaryButton text="+" onPress={nextGuessHandler.bind(this, 'higher')}/>
                </View>
            </View>
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