import { 
    StyleSheet, 
    View, 
    TextInput, 
    Button, 
    Modal,
    Image
} from "react-native";
import { useState } from 'react';

const GoalInput = (props) => {
    const [goal, setGoal] = useState('');

    const goalInputHandler = (enterText) => {
        setGoal(enterText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(goal);
        setGoal('');
        props.onCloseModal();
    }

    return (
        <Modal visible={props.visible} animationType="fade">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('./../assets/images/goal.png')} />
                <TextInput value={goal} onChangeText={goalInputHandler} style={styles.textInput} placeholder="Your course goal!" /> 
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button onPress={addGoalHandler} title="Add Goal"/>
                    </View> 
                    <View style={styles.button}>
                        <Button onPress={props.onCloseModal} title="Cancel"/>
                    </View>
                </View>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'cyan',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '95%',
        marginLeft: 30,
        marginRight: 30,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 30,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 15,
    },
    button: {
        width: 100,
        marginHorizontal: 5
    },
});

export default GoalInput;