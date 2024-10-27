import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import ButtonGroup from '../components/ButtonGroup';
import LogoutButton from '../components/logout';

const SenderScreen = () => {
  const navigation = useNavigation();
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [sender, setsender] = useState('');
  const [amount, setamount] = useState('');
  const [activeButton, setActiveButton] = useState('Sender'); // Track active button

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lending</Text>
      <Text style={styles.initiateText}>Initiate cashback - Please enter User ID and Amount</Text>

      <View style={styles.iconBar}>
        <TouchableOpacity
          onPress={() => {
            setActiveButton('Sender');
            navigation.navigate('SenderScreen');
          }}
          style={[styles.iconButton, { opacity: activeButton === 'Sender' ? 1 : 0.6 }]}
        >
          <Icon name="send" size={24} color="#000" />
          <Text style={styles.iconText}>Sender</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setActiveButton('Receiver');
            navigation.navigate('ReceiverScreen');
          }}
          style={[styles.iconButton, { opacity: activeButton === 'Receiver' ? 1 : 0.6 }]}
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

          <View style={styles.nameInputContainer}>
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

          <View style={styles.nameInputContainer}>
            <Text style={styles.nameLabel}>Currency</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedCurrency}
                onValueChange={setSelectedCurrency}
                style={styles.picker}
              >
                <Picker.Item label="USD" value="USD" />
                <Picker.Item label="Rupees" value="INR" />
              </Picker>
            </View>
          </View>

          <TouchableOpacity style={styles.proceedButton}>
            <Text style={styles.proceedButtonText}>Proceed to Transaction</Text>
          </TouchableOpacity>
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
    paddingVertical: 5,
  },
  iconText: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 2,
    color: '#000',
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
  nameInputContainer: {
    alignItems: 'center',
    marginVertical: 5,
  },
  nameLabel: {
    fontSize: 18,
    color: 'black',
    marginBottom: 10,
    fontWeight: 'bold',
    marginTop: 0,
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
  pickerContainer: {
    width: '90%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  picker: {
    height: 50,
    color: '#000',
  },
  proceedButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: 'center',
  },
  proceedButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default SenderScreen;
