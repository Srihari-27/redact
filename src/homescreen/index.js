
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import ButtonGroup from '../components/ButtonGroup';
import LogoutButton from '../components/logout';

const HomeScreen = () => {
  const [sender, setsender] = useState('');
  const [receiver, setreceiver] = useState('');
  const [amount, setamount] = useState('');

  return (
    <View style={styles.container}>
      {/* Text elements aligned at the top */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>Instant Currency Conversion</Text>
        <Text style={styles.text2}>Get real-time conversion rate at click of a button</Text>
      </View>
      
      <LogoutButton />
      
      {/* White container covering the remaining space */}
      <View style={styles.whiteContainer}>
        <ButtonGroup />
        <View style={styles.nameInputContainer}>
          <Text style={styles.nameLabel}>Amount</Text>
          <TextInput
            style={styles.nameInput}
            placeholder=" "
            placeholderTextColor="#ccc"
            value={amount}
            onChangeText={(text) => setamount(text)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.nameInputContainer}>
          <Text style={styles.nameLabel}>Enter wallet address</Text>
          <TextInput
            style={styles.senderInput} // Apply new style here
            placeholder=" "
            placeholderTextColor="#ccc"
            value={sender}
            onChangeText={(text) => setsender(text)}
          />
        </View>

        {/* Button to proceed to transaction */}
        <TouchableOpacity style={styles.proceedButton}>
          <Text style={styles.proceedButtonText}>Proceed to Transaction</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  textContainer: {
    alignItems: 'center', // Center text elements horizontally
    marginTop: 70, // Top margin for spacing from the top
    marginBottom: 20, // Space between text and the next component
  },
  text: {
    fontSize: 24,
    marginBottom: 5, // Reduced gap
    color: 'black',
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 15,
    marginBottom: 20,
    color: 'black',
  },
  whiteContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // White background color
    borderTopLeftRadius: 30, // Optional: rounded top corners
    borderTopRightRadius: 30, // Optional: rounded top corners
    paddingHorizontal: 20, // Optional: horizontal padding
    paddingTop: 20, // Optional: top padding
  },
  nameInputContainer: {
    alignItems: 'center',
    marginVertical: 5,
  },
  nameLabel: {
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
    fontWeight: 'bold',
    fontFamily: 'custom_font',
  },
  nameInput: {
    backgroundColor: 'white',
    width: '90%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: 'black',
  },
  senderInput: { // New style for sender input
    backgroundColor: 'white',
    width: '90%',
    height: 90, // Increase height as needed
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: 'black',
  },
  proceedButton: {
    marginTop: 90,
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25, // Rounded edges
    alignSelf: 'center', // Center the button horizontally
  },
  proceedButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default HomeScreen;
