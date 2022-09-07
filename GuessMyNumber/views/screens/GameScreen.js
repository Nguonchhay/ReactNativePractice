import { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
    Alert,
    StyleSheet,
    Text,
    View
} from 'react-native';

import COLORS from '../../constants/Color';
import NumberContainer from '../../components/games/NumberContainer';
import PrimaryButton from './../../components/ui/PrimaryButton';
import Title from '../../components/ui/Title';

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
            <View>
                <Title>Opponent's Guest</Title>
                <NumberContainer>{curGuess}</NumberContainer>
            </View>

            <View>
                <Text>Higher or Lower?</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="md-remove" size={24} color={COLORS.action500} />
                    </PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                        <Ionicons name="md-add" size={24} color={COLORS.action500} />
                    </PrimaryButton>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 25,
        paddingTop: 50,
    },
});

export default GameScreen;