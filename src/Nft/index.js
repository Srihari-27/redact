import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import CardComponent from '../components/CardComponent'; // Adjust the import based on your file structure
import ButtonGroup from '../components/ButtonGroup';
import LogoutButton from '../components/logout';

const Nft = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>NFT Dashboard</Text>
        
        <LogoutButton />
        <ButtonGroup />

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <CardComponent
            imageUrl="https://via.placeholder.com/150" 
            assetId="12345"
            price="100"
            value="150"
          />
          <CardComponent
            imageUrl="https://via.placeholder.com/150" 
            assetId="12345"
            price="200"
            value="150"
          />
          <CardComponent
            imageUrl="https://via.placeholder.com/150"
            assetId="12345"
            price="300"
            value="150"
          />
          <CardComponent
            imageUrl="https://via.placeholder.com/150"
            assetId="12345"
            price="400"
            value="150"
          />
          {/* Add more CardComponents as needed */}
        </ScrollView>

        <ButtonGroup />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Updated color
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollContainer: {
    paddingVertical: 10,
  },
});

export default Nft;
