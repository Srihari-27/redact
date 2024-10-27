import React from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const Firstpage = ({ navigation }) => {
  return (
    <View style={styles.container1}>
      
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>WOULD U LIKE TO LOGIN</Text>
        <View style={styles.container}>
           <LinearGradient
            colors={['#ba55d3', '#f49ac2']} 
            start={{ x: 0, y: 0 }} 
            end={{ x: 1, y: 0 }} 
            style={styles.gradient}
            >
          
          <TouchableOpacity 
              onPress={() => navigation.navigate('homescreen')} 
              style={styles.button} 
            >
            <Text style={styles.buttonText}>{'NEXT'}</Text>
          </TouchableOpacity>
            </LinearGradient>
        </View>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 'auto',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
  },
  bottomText: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 10,
    fontweight:'bold',
  },
  gradient: {
    borderRadius: 25, 
    overflow: 'hidden', 
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Firstpage;