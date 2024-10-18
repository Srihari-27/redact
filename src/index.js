import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GraphVisualizer from './GraphVisualizer';
import EulerPathScreen from './EulerPathScreen'; 

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="GraphVisualizer">
                <Stack.Screen 
                    name="GraphVisualizer" 
                    component={GraphVisualizer} 
                    options={{ title: 'Graph Visualizer' }} 
                />
                <Stack.Screen 
                    name="EulerPath" 
                    component={EulerPathScreen} 
                    options={{ title: 'Euler Path' }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

