import { 
    StyleSheet,
    TextInput,
    View 
} from "react-native";
import PrimaryButton from "../../components/PrimaryButton";

const StartGameScreen = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="00" 
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton text="Reset" />
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton text="Confirm" />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4e0329',
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
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
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