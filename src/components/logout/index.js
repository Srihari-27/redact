// LogoutButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LogoutButton = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Here you can clear any user data or perform logout logic
    navigation.navigate('Logout'); // Navigate to the Logout screen
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleLogout}>
      <Text style={styles.buttonText}>Log Out</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#C21807', // Change to your desired color
    borderRadius: 10,
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1, // Ensures the button appears above other components
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LogoutButton;
