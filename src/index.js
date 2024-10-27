import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Firstpage from './initialpage/index';
import HomeScreen from './homescreen/index';
import TransferScreen from './sendmoney/index';
import TransactionsScreen from './navigation.js';
import Nfc from './Nfc/index';
import Nft from './Nft/index';

import SenderScreen from './lending/SenderScreen';
import ReceiverScreen from './lending/ReceiverScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Transfer" component={TransferScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Transactions" component={TransactionsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={Nfc} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Nft} options={{ headerShown: false }} />
        
        {/* Nested screens under Transactions */}
        <Stack.Screen name="SenderScreen" component={SenderScreen} />
        <Stack.Screen name="ReceiverScreen" component={ReceiverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

