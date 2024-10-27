import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SenderScreen from './lending/SenderScreen';
import ReceiverScreen from './lending/ReceiverScreen';

const Stack = createStackNavigator();

const TransactionsScreen = () => {
  return (
    <Stack.Navigator initialRouteName="SenderScreen">
      <Stack.Screen name="SenderScreen" component={SenderScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ReceiverScreen" component={ReceiverScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default TransactionsScreen;
