import React, { useState, useCallback } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const ButtonGroup = () => {
  const navigation = useNavigation();
  const [activeButton, setActiveButton] = useState(null);

  const buttonImages = [
    require('../assets/upi.png'),
    require('../assets/upi.png'),
    require('../assets/upi.png'),
    require('../assets/upi.png'),
    require('../assets/upi.png'),
  ];

  const screenNames = ['Home', 'Transfer', 'Transactions', 'Settings', 'Profile'];

  const handleButtonPress = (index) => {
    setActiveButton(index);
    navigation.navigate(screenNames[index]);
  };

  useFocusEffect(
    useCallback(() => {
      const currentScreenIndex = screenNames.indexOf(navigation.getState().routes[navigation.getState().index].name);
      setActiveButton(currentScreenIndex);
    }, [navigation])
  );

  return (
    <View style={styles.buttonContainer}>
      {buttonImages.map((image, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleButtonPress(index)}
          style={styles.button}
        >
          <Image
            source={image}
            style={[
              styles.buttonImage,
              { tintColor: activeButton === index ? 'black' : 'gray' },
            ]}
            resizeMode="contain"
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    width: '111%',
    paddingHorizontal: 0,
    paddingBottom: 30,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white', // White background for the full button container
    paddingVertical: 10,
  },
  button: {
    flex: 1, // Each button takes equal space
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImage: {
    width: 30,
    height: 30,
  },
});

export default ButtonGroup;
