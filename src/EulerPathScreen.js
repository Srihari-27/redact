
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EulerPathScreen = ({ route }) => {
    const { eulerPath } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Euler Path/Circuit</Text>
            {Array.isArray(eulerPath) && eulerPath.length > 0 ? (
                <Text style={styles.result}>Path: {eulerPath.join(' -> ')}</Text>
            ) : (
                <Text style={styles.result}>No Euler Path/Circuit found.</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    result: {
        fontSize: 18,
        marginTop: 10,
    },
});

export default EulerPathScreen;


