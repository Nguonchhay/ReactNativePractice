import { 
  StyleSheet, 
  Text, 
  View, 
  Button, 
  TextInput,
  FlatList
} from 'react-native';
import { useState } from 'react';

export default App = () => {

  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (enterText) => {
    setGoal(enterText);
  }

  const addGoalHandler = () => {
    setGoals(currentGoals => [...currentGoals, { key: Math.random.toString(), text: goal }]);
    setGoal('');
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput value={goal} onChangeText={goalInputHandler} style={styles.textInput} placeholder="Your course goal!" />  
        <Button onPress={addGoalHandler} title="Add Goal"/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>
          Goals:
        </Text>
        <FlatList 
          data={goals}
          renderItem = {itemData => (<View style={styles.goalItem}><Text style={styles.goalItemText}>{itemData.item.text}</Text></View>)}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 6,
  },
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
