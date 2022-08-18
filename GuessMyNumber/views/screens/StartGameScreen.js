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
            <PrimaryButton text="Reset" />
            <PrimaryButton text="Confirm" />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#4e0329',
        borderRadius: 10,
        elevation: 4,
        marginHorizontal: 24,
        marginTop: 15,
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
});

export default StartGameScreen;