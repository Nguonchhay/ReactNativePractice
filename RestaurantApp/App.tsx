import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Welcome to Restaurant App</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
