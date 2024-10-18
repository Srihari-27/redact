
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, ScrollView, StyleSheet } from 'react-native';
import Svg, { Line, Circle, Text as SvgText } from 'react-native-svg';
import { havelHakimi } from './havelHakimi';
import { fleuryAlgorithm } from './fleury'; 
import { useNavigation } from '@react-navigation/native';
import {eulerpath} from './EulerPathScreen' 

const MAX_RETRIES = 5;
const GraphVisualizer = () => {
    const navigation = useNavigation(); 
    const [input, setInput] = useState('');
    const [sequence, setSequence] = useState([]);
    const [isGraphical, setIsGraphical] = useState(null);
    const [positions, setPositions] = useState([]);
    const [edges, setEdges] = useState([]);
    const [edgeWeights, setEdgeWeights] = useState({});
    const [isConnected, setIsConnected] = useState(null);
    const [sourceVertex, setSourceVertex] = useState(''); 

    const handleInput = () => {
        const parsedSequence = input.split(',').map(Number);

      
        if (parsedSequence.some(isNaN) || parsedSequence.length === 0) {
            Alert.alert('Error', 'Please provide a valid degree sequence.');
            return;
        }

        const result = havelHakimi([...parsedSequence]);
        setSequence(parsedSequence);
        setIsGraphical(result);

        if (result) {
            generateGraph(parsedSequence);
        } else {
            Alert.alert('Error', 'The sequence is not graphical.');
        }
    };

    const generateGraph = (sequence) => {
        let attempt = 0;
        let connected = false;
        let vertexPositions = [];
        let edgeList = [];
        let weightMap = {}; 

       
        while (attempt < MAX_RETRIES && !connected) {
            edgeList = [];
            weightMap = {}; 

            const n = sequence.length;
            vertexPositions = [];

            
            const radius = 150;
            const centerX = 200;
            const centerY = 200;
            for (let i = 0; i < n; i++) {
                const angle = (i / n) * 2 * Math.PI;
                const x = centerX + radius * Math.cos(angle);
                const y = centerY + radius * Math.sin(angle);
                vertexPositions.push({ x, y });
            }

           
            let degrees = sequence.map((degree, index) => ({ degree, index }));
            degrees.sort((a, b) => b.degree - a.degree); 

           
            while (degrees.length > 0) {
               
                degrees.sort((a, b) => b.degree - a.degree);

               
                const { degree, index: v } = degrees.shift();

                if (degree > degrees.length) {
                    break;
                }

               
                let candidates = degrees.slice(0, degree).map(d => d.index);

               
                candidates.sort(() => Math.random() - 0.5);

               
                for (let i = 0; i < degree; i++) {
                    if (i < candidates.length) {
                        const uIndex = candidates[i];
                        const weight = Math.floor(Math.random() * 10) + 1;
                        edgeList.push({ from: v, to: uIndex }); 
                        weightMap[`${v}-${uIndex}`] = weight; 

                       
                        const u = degrees.find(vertex => vertex.index === uIndex);
                        if (u) {
                            u.degree--;
                        }
                    }
                }

                
                degrees = degrees.filter(vertex => vertex.degree > 0);
            }

            
            connected = checkConnectivity(edgeList, n);
            attempt++;
        }

        setPositions(vertexPositions);
        setEdges(edgeList);
        setEdgeWeights(weightMap); // Set edge weights
        setIsConnected(connected);

        if (!connected) {
            Alert.alert('Error', 'Could not generate a connected graph after multiple attempts.');
        }
    };

   
    const checkConnectivity = (edges, n) => {
   
        const adjList = Array.from({ length: n }, () => []);
    
        edges.forEach(edge => {
            adjList[edge.from].push(edge.to);
            adjList[edge.to].push(edge.from); 
        });
    
        
        const visited = Array(n).fill(false);
    
        const dfs = (v) => {
            visited[v] = true;
            adjList[v].forEach(neighbor => {
                if (!visited[neighbor]) {
                    dfs(neighbor);
                }
            });
        };
    
       
        dfs(0);
    
       
        return visited.every(v => v);
    };
    
    const handleMST = () => {
        const mstEdges = primMST(edges, sequence.length); // Get MST edges
        const { cutsets, circuits } = findFundamentalCutsetsAndCircuits(mstEdges, edges);
        
        Alert.alert('Minimum Spanning Tree Edges', JSON.stringify(mstEdges));
        Alert.alert('Fundamental Cutsets', JSON.stringify(cutsets));
        Alert.alert('Fundamental Circuits', JSON.stringify(circuits));
    };


    const handleNext = () => {
        if (isGraphical && isConnected) {
            const result = fleuryAlgorithm(edges, sequence.length); 
            const eulerPath = result.eulerPath; 

            if (eulerPath && eulerPath.length > 0) {
                navigation.navigate('EulerPath', { eulerPath }); 
            } else {
                Alert.alert('Error', 'Could not find an Euler path for the graph.');
            }
        } else {
            Alert.alert('Error', 'Graph is either not graphical or not connected; cannot find Euler path.');
        }
    };

    const handleShortestPath = () => {
        const sourceIndex = parseInt(0, 10);
        if (isNaN(sourceIndex) || sourceIndex < 0 || sourceIndex >= sequence.length) {
            Alert.alert('Error', 'Please enter a valid source vertex index.');
            return;
        }

        const shortestPaths = dijkstra(sourceIndex, edges, sequence.length);
        Alert.alert('Shortest Paths', JSON.stringify(shortestPaths));
    };

    const dijkstra = (src, edges, n) => {
        const adjList = Array.from({ length: n }, () => []);
        const weights = {};

       
        edges.forEach(({ from, to }) => {
            const edgeKey = `${from}-${to}`;
            const edgeWeight = edgeWeights[edgeKey];
            adjList[from].push(to);
            weights[edgeKey] = edgeWeight; 
        });

        const dist = Array(n).fill(Infinity);
        const visited = Array(n).fill(false);
        dist[src] = 0;

        for (let i = 0; i < n - 1; i++) {
            let minIndex = -1;
            let minValue = Infinity;

            for (let j = 0; j < n; j++) {
                if (!visited[j] && dist[j] < minValue) {
                    minValue = dist[j];
                    minIndex = j;
                }
            }

            visited[minIndex] = true;

            adjList[minIndex].forEach(neighbor => {
                const edgeKey = `${minIndex}-${neighbor}`;
                const edgeWeight = weights[edgeKey];
                if (dist[minIndex] + edgeWeight < dist[neighbor]) {
                    dist[neighbor] = dist[minIndex] + edgeWeight;
                }
            });
        }

        return dist; 
    };
    const primMST = (edges, n) => {
        const adjList = Array.from({ length: n }, () => []);
        const weights = {};
        
       
        edges.forEach(({ from, to }) => {
            const edgeKey = `${from}-${to}`;
            const edgeWeight = edgeWeights[edgeKey];
            adjList[from].push({ node: to, weight: edgeWeight });
            adjList[to].push({ node: from, weight: edgeWeight }); 
            weights[edgeKey] = edgeWeight; 
        });
        
        const mstEdges = [];
        const visited = Array(n).fill(false);
        const minHeap = [{ node: 0, weight: 0 }];
    
        while (minHeap.length > 0) {
          
            minHeap.sort((a, b) => a.weight - b.weight);
            const { node: u, weight } = minHeap.shift();
    
            if (visited[u]) continue; 
            visited[u] = true;
    
            if (weight > 0) {
               
                const edgeKey = Object.keys(weights).find(key => (key.startsWith(u + '-') && weights[key] === weight));
            
            }
    
            adjList[u].forEach(({ node: v, weight }) => {
                if (!visited[v]) {
                    minHeap.push({ node: v, weight });
                }
            });
        }
    
        return mstEdges;
    };
 
    const findEdgeConnectivity = () => {
        let minEdgeCut = edges.length; 
       for (let i = 0; i < edges.length; i++) {
          const newEdges = edges.filter((_, index) => index !== i);
            if (!checkConnectivity(newEdges, sequence.length)) {
                minEdgeCut = Math.min(minEdgeCut, 1);
         }
        }

        return minEdgeCut;
    };

    const findVertexConnectivity = () => {
        let minVertexCut = sequence.length; 
        for (let i = 0; i < sequence.length; i++) {
             const remainingVertices = sequence.filter((_, index) => index !== i); 
             const newEdges = edges.filter(edge => edge.from !== i && edge.to !== i); 

              if (!checkConnectivity(newEdges, remainingVertices.length)) {
                  minVertexCut = Math.min(minVertexCut, 1); 
                }
        }

        return minVertexCut; 
    };


    const findKConnectivity = () => {
        const vertexConnectivity = findVertexConnectivity();
        return vertexConnectivity; 
    };
    const handleConnectivityChecks = () => {
        const edgeConnectivity = findEdgeConnectivity();
        const vertexConnectivity = findVertexConnectivity();
        const kConnectivity = findKConnectivity();
    
        Alert.alert('Graph Connectivity', `Edge Connectivity: ${edgeConnectivity}\nVertex Connectivity: ${vertexConnectivity}\nK-Connectivity: ${kConnectivity}`);
    };
    

    
    const findFundamentalCutsetsAndCircuits = (mstEdges, allEdges) => {
        const mstSet = new Set(mstEdges.map(e => `${e.from}-${e.to}`));
        const cutsets = [];
        const circuits = [];
    
        allEdges.forEach(({ from, to }) => {
            if (!mstSet.has(`${from}-${to}`)) {
                // This edge is not in the MST
                const newEdges = [...mstEdges, { from, to }];
                const visited = Array(allEdges.length).fill(false);
                const checkConnectivity = (v) => {
                    visited[v] = true;
                    newEdges.forEach(edge => {
                        if (edge.from === v && !visited[edge.to]) {
                            checkConnectivity(edge.to);
                        } else if (edge.to === v && !visited[edge.from]) {
                            checkConnectivity(edge.from);
                        }
                    });
                };
                checkConnectivity(from);
    
                if (!visited[to]) {
                   
                    cutsets.push({ from, to });
                } else {
           
                    const circuit = [];
                    const dfs = (v, target) => {
                        visited[v] = true;
                        if (v === target) return true; 
                        for (let edge of newEdges) {
                            if ((edge.from === v && !visited[edge.to]) || (edge.to === v && !visited[edge.from])) {
                                circuit.push(edge);
                                if (dfs(edge.to === v ? edge.from : edge.to, target)) return true;
                                circuit.pop();
                            }
                        }
                        return false;
                    };
                    visited.fill(false);
                    dfs(from, to);
                    circuits.push(circuit);
                }
            }
        });
    
        return { cutsets, circuits };
    };
    

    const renderGraph = () => {
        return (
            <Svg height="400" width="400">
                {edges.map((edge, index) => (
                    <Line
                        key={index}
                        x1={positions[edge.from].x}
                        y1={positions[edge.from].y}
                        x2={positions[edge.to].x}
                        y2={positions[edge.to].y}
                        stroke="black"
                        strokeWidth="2"
                    />
                ))}
                {positions.map((pos, index) => (
                    <Circle key={index} cx={pos.x} cy={pos.y} r="10" fill="blue" />
                ))}
                {positions.map((pos, index) => (
                    <SvgText
                        key={`label-${index}`} 
                        x={pos.x - 5}
                        y={pos.y + 5}
                        fontSize="12"
                        fill="black"
                    >
                        {index + 1}
                    </SvgText>
                ))}
            </Svg>
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Havel-Hakimi Graph Visualizer</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter degree sequence (comma-separated)"
                value={input}
                onChangeText={setInput}
            />
            <Button title="Generate Graph" onPress={handleInput} />
            {isGraphical !== null && (
                <Text style={styles.result}>
                    {isGraphical ? 'The sequence is graphical!' : 'The sequence is not graphical.'}
                </Text>
            )}
            {isConnected !== null && (
                <Text style={styles.result}>
                    {isConnected ? 'The graph is connected!' : 'The graph is not connected.'}
                </Text>
            )}
            <View style={styles.graphContainer}>{isGraphical && isConnected && renderGraph()}</View>
            {isGraphical && isConnected && (
                <>
                    <Text style={styles.title}>Assigned Weights:</Text>
                    {edges.map((edge, index) => {
                        const weight = edgeWeights[`${edge.from}-${edge.to}`];
                        return (
                            <Text key={index} style={styles.input}>
                                From Node {edge.from + 1} to Node {edge.to + 1}: Weight = {weight}
                            </Text>
                        );
                    })}
                    
                   
                    <Button title="Find Shortest Paths" onPress={handleShortestPath} />
                    <Button title="find shortest path between 2 vertexs" onPress={handleNext} />
                    <Button title="Find Minimum Spanning Tree" onPress={handleMST} />
                    <Button title="Check Connectivity" onPress={handleConnectivityChecks} />

                </>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        color: 'black',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: 'black',
    },
    input: {
        borderWidth: 1,
        padding: 10,
        width: '100%',
        marginBottom: 10,
        borderRadius: 5,
        borderColor: '#ccc',
        color: 'black',
    },
    result: {
        fontSize: 18,
        marginTop: 10,
        color: 'green',
    },
    graphContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        flex: 1, 
    },
});

export default GraphVisualizer;
