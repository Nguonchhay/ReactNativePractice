import { useState } from 'react';
import { 
    StyleSheet,
    TextInput,
    View,
    Alert
} from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import COLORS from '../../constants/Color';

const StartGameScreen = ({ onSetScreen }) => {
    const [inputNumber, setInputNumber] = useState('');

    const onChangeInputNumber = (value) => {
        setInputNumber(value)
    }

    const onPressConfirm = () => {
        const number = parseInt(inputNumber);
        if (isNaN(number) || number <= 0 || number > 99) {
            Alert.alert('Invalid Number', 'Number has to be between 1 and 99', [
                {
                    text: 'Okay', style: 'destructive', onPress: onPressReset
                }
            ]);
        } else {
            onSetScreen('game');
        }
    }

    const onPressReset = () => {
        setInputNumber('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                value={inputNumber}
                onChangeText={onChangeInputNumber}
                style={styles.numberInput} 
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="00" 
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={onPressReset} text="Reset" />
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={onPressConfirm} text="Confirm" />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary800,
        borderRadius: 10,
        elevation: 4,
        marginHorizontal: 24,
        marginTop: 100,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.3,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: COLORS.action500,
        borderBottomWidth: 2,
        color: COLORS.action500,
        marginVertical: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
});

export default StartGameScreen;