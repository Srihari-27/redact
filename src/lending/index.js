// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons'; // Make sure to install react-native-vector-icons if not installed
// import ButtonGroup from '../components/ButtonGroup';
// import { useNavigation } from '@react-navigation/native';

// const TransactionsScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>View Transactions</Text>
      
//       {/* Sender/Receiver bar */}
//       <View style={styles.iconBar}>
//         <TouchableOpacity onPress={() => navigation.navigate('SenderScreen')}>
//           <Icon name="send" size={30} color="#000" />
//           <Text style={styles.iconText}>Sender</Text>
//         </TouchableOpacity>
        
//         <TouchableOpacity onPress={() => navigation.navigate('ReceiverScreen')}>
//           <Icon name="person" size={30} color="#000" />
//           <Text style={styles.iconText}>Receiver</Text>
//         </TouchableOpacity>
//       </View>

//       <ButtonGroup />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   text: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   iconBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '60%',
//     marginBottom: 20,
//   },
//   iconText: {
//     textAlign: 'center',
//     marginTop: 5,
//   },
// });

// export default TransactionsScreen;
// In your main navigation setup file (e.g., App.js)
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// //import TransactionsScreen from './screens/TransactionsScreen';
// import SenderScreen from './SenderScreen';
// import ReceiverScreen from './ReceiverScreen';

// const Stack = createStackNavigator();

// const TransactionsScreen = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="SenderScreen">
//         {/* <Stack.Screen name="TransactionsScreen" component={TransactionsScreen} /> */}
//         <Stack.Screen name="SenderScreen" component={SenderScreen} />
//         <Stack.Screen name="ReceiverScreen" component={ReceiverScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default TransactionsScreen;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import TransactionsScreen from './lending/TransactionsScreen'; // Adjust path if necessary
import SenderScreen from './lending/SenderScreen';
import ReceiverScreen from './lending/ReceiverScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SenderScreen">
        {/* <Stack.Screen name="TransactionsScreen" component={TransactionsScreen} /> */}
        <Stack.Screen name="SenderScreen" component={SenderScreen} />
        <Stack.Screen name="ReceiverScreen" component={ReceiverScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


