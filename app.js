import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import GraphVisualizer from './src/index';
import EulerPath from './src/EulerPathScreen'; // Assume this is the next screen for Euler path

const App = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="graph" component={GraphVisualizer} title="Graph Visualizer" initial />
                <Scene key="eulerPath" component={EulerPath} title="Euler Path" />
            </Stack>
        </Router>
    );
};

export default App;