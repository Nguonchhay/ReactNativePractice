import { 
    StyleSheet,
    View,
    Text,
    Pressable
} from "react-native";

const GoalItem = ({goal, onDeleteGoal}) => {

    return (
        <View style={styles.goalItem}>
            <Pressable 
                android_ripple={ {color: '#dddddd'} } 
                onPress={onDeleteGoal.bind(this, goal.key)}
                style={({pressed}) => pressed && styles.pressItem}
            >
                <Text style={styles.goalItemText}>{goal.text}</Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    goalItem: {
        margin: 5,
        borderRadius: 5,
        backgroundColor: '#5e0acc',
    },
    goalItemText: {
        color: '#fff',
        padding: 10,
    },
    pressItem: {
        opacity: 0.7,
    },
});

export default GoalItem;