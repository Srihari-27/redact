import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import ButtonGroup from '../components/ButtonGroup';
import LogoutButton from '../components/logout';

const ReceiverScreen = () => {
  const navigation = useNavigation();
  const [sender, setsender] = useState('');
  const [amount, setamount] = useState('');
  const [activeButton, setActiveButton] = useState('Receiver');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PayBack</Text>
      <Text style={styles.initiateText}>Initiate cashback - Please enter User ID and Amount</Text>
      
      <View style={styles.iconBar}>
        <TouchableOpacity
          onPress={() => {
            setActiveButton('Sender');
            navigation.navigate('SenderScreen');
          }}
          style={[
            styles.iconButton,
            { 
              opacity: activeButton === 'Sender' ? 1 : 0.6,
              backgroundColor: activeButton === 'Sender' ? '#ddd' : '#fff'
            },
          ]}
        >
          <Icon name="send" size={24} color="#000" />
          <Text style={styles.iconText}>Sender</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setActiveButton('Receiver');
            navigation.navigate('ReceiverScreen');
          }}
          style={[
            styles.iconButton,
            { 
              opacity: activeButton === 'Receiver' ? 1 : 0.6,
              backgroundColor: activeButton === 'Receiver' ? '#ddd' : '#fff'
            },
          ]}
        >
          <Icon name="person" size={24} color="#000" />
          <Text style={styles.iconText}>Receiver</Text>
        </TouchableOpacity>
      </View>

      <LogoutButton />

      <View style={styles.whiteContainer}>
        <ButtonGroup />
        <View style={styles.contentContainer}>
          <View style={styles.nameInputContainer}>
            <Text style={styles.nameLabel}>Enter wallet address</Text>
            <TextInput
              style={styles.senderInput}
              placeholder=" "
              placeholderTextColor="#ccc"
              value={sender}
              onChangeText={setsender}
            />
          </View>

          <View style={[styles.nameInputContainer, styles.amountInputContainer]}>
            <Text style={styles.nameLabel}>Amount</Text>
            <TextInput
              style={styles.nameInput}
              placeholder=" "
              placeholderTextColor="#ccc"
              value={amount}
              onChangeText={setamount}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.proceedButton}>
              <Text style={styles.proceedButtonText}>Connect Wallet</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Cancel Transaction</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    paddingTop: 20,
  },
  nameInputContainer: {
    alignItems: 'center',
    marginVertical: 5,
  },
  amountInputContainer: {
    marginTop: 15, // Increased space between address and amount
  },
  nameLabel: {
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
    fontWeight: 'bold',
    fontFamily: 'custom_font',
    marginTop: 0,
  },
  nameInput: {
    backgroundColor: 'white',
    width: '90%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: 'black',
  },
  senderInput: {
    backgroundColor: 'white',
    width: '90%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: 'black',
  },
  iconBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#fff',
    marginTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  
  },
  iconButton: {
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 25, // Rounded corners for buttons
    paddingHorizontal: 15, // Increase padding for a balanced appearance
  },
  iconText: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 2,
    color: '#000',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  whiteContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 15,
    marginTop: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  initiateText: {
    fontSize: 18,
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  proceedButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  proceedButtonText: {
    color: 'white',
    fontSize: 14,
  },
  cancelButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 14,
  },
});

export default ReceiverScreen;
