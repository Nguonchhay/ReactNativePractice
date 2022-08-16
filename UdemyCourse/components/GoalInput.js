import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from 'react';

const GoalInput = (props) => {
    const [goal, setGoal] = useState('');

    const goalInputHandler = (enterText) => {
        setGoal(enterText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(goal);
        setGoal('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput value={goal} onChangeText={goalInputHandler} style={styles.textInput} placeholder="Your course goal!" />  
            <Button onPress={addGoalHandler} title="Add Goal"/>
        </View>
    )
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: '70%',
        marginRight: 10
    },
});

export default GoalInput;