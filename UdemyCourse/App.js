import { 
  StyleSheet, 
  Text, 
  View,
  FlatList,
  Button
} from 'react-native';
import { useState } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default App = () => {

  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);


  const addGoalHandler = (inputGoal) => {
    setGoals(currentGoals => [...currentGoals, { key: inputGoal.replace(/\s+/g, ''), text: inputGoal }]);
  }

  const deleteGoalHandler = (itemKey) => {
    setGoals(
      currentGoals => currentGoals.filter(goal => goal.key !== itemKey)
    );
  }

  const openGoalInputHandler = () => {
    setIsModalVisible(true);
  }

  const closeGoalInputHandler = () => {
    setIsModalVisible(false);
  }

  return (
    <View style={styles.appContainer}>
      
      <View style={styles.goalsContainer}>
        <View style={styles.goalInputContainer}>
          <Button title="Add Goal" onPress={openGoalInputHandler} color="#ccc" />
          <GoalInput
            onAddGoal={addGoalHandler}
            onCloseModal={closeGoalInputHandler}
            visible={isModalVisible}
          />
        </View>

        <View style={styles.goalsContainer}>
          <Text>
            Goals:
          </Text>
          <FlatList 
            data={goals}
            renderItem = { itemData => <GoalItem goal={itemData.item} onDeleteGoal={deleteGoalHandler} /> }
            alwaysBounceVertical={false}
          />
        </View>
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
  goalInputContainer: {
    marginTop: 15,
  },
  goalsContainer: {
    flex: 6,
  },
});
