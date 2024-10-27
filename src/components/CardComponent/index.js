// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

// const CardComponent = ({ imageUrl, assetId, price, value }) => {
//   const [loading, setLoading] = React.useState(true);
//   const [error, setError] = React.useState(false);

//   return (
//     <View style={styles.card}>
//       {/* Image */}
//       {loading && <ActivityIndicator size="small" color="#000" />}
//       {error && <Text style={styles.errorText}>Image failed to load</Text>}
//       <Image
//         source={{ uri: imageUrl }}
//         style={styles.image}
//         onLoad={() => setLoading(false)}
//         onError={() => {
//           setLoading(false);
//           setError(true);
//         }}
//       />
      
//       {/* Asset ID and Price */}
//       <View style={styles.infoContainer}>
//         <Text style={styles.label}>Asset ID:</Text>
//         <Text style={styles.value}>{assetId}</Text>
        
//         <Text style={styles.label}>Price:</Text>
//         <Text style={styles.value}>${price}</Text>
//       </View>

//       {/* Bottom Value */}
//       <View style={styles.bottomContainer}>
//         <Text style={styles.cardValue}>Value: ${value}</Text>
//       </View>
      
//       {/* Options Below Image */}
//       <View style={styles.optionsContainer}>
//         <TouchableOpacity style={styles.optionButton}>
//           <Text style={styles.buttonText}>Option 1</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.optionButton}>
//           <Text style={styles.buttonText}>Option 2</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     elevation: 2, // For shadow effect on Android
//     shadowColor: '#000', // For shadow effect on iOS
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.5,
//     padding: 15,
//     margin: 10,
//   },
//   image: {
//     width: '100%',
//     height: 150,
//     borderRadius: 10,
//   },
//   infoContainer: {
//     marginVertical: 10,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   value: {
//     fontSize: 14,
//     color: '#555',
//   },
//   bottomContainer: {
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   cardValue: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   optionsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 15,
//   },
//   optionButton: {
//     backgroundColor: '#4CAF50',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//     width: '48%', // Adjust width to fit two buttons
//   },
//   buttonText: {
//     color: '#fff',
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   errorText: {
//     color: 'red',
//     textAlign: 'center',
//   },
// });

// export default CardComponent;
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import nfcImage from '../assets/nfc.png'; // Adjust the path as needed

const CardComponent = ({ assetId, price, value }) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  return (
    <View style={styles.card}>
      {/* Image */}
      {loading && <ActivityIndicator size="small" color="#000" />}
      {error && <Text style={styles.errorText}>Image failed to load</Text>}
      <Image
        source={nfcImage} // Use the imported image here
        style={styles.image}
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
      />
      
      {/* Asset ID and Price in the same row */}
      <View style={styles.infoContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.label}>Asset ID:</Text>
          <Text style={styles.value}>{assetId}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.label}>Price:</Text>
          <Text style={styles.value}>${price}</Text>
        </View>
      </View>

      {/* Bottom Value */}
      <View style={styles.bottomContainer}>
        <Text style={styles.cardValue}>Value: ${value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2, // For shadow effect on Android
    shadowColor: '#000', // For shadow effect on iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    padding: 15,
    margin: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  infoContainer: {
    marginVertical: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Adjust space between items
    marginBottom: 5, // Space between rows
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    fontSize: 14,
    color: '#555',
  },
  bottomContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  cardValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});

export default CardComponent;
