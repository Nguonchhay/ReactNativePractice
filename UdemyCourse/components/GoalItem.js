import { StyleSheet, View, Text } from "react-native";

const GoalItem = ({text}) => {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalItemText}>{text}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    goalItem: {
        margin: 5,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#5e0acc',
    },
    goalItemText: {
        color: '#fff',
    },
});

export default GoalItem;