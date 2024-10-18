
export const fleuryAlgorithm = (edges, n) => {
   
    const adjList = Array.from({ length: n }, () => []);
    const degreeCount = Array(n).fill(0);
    const visitedEdges = new Set();

    edges.forEach(edge => {
        adjList[edge.from].push(edge.to);
        adjList[edge.to].push(edge.from);
        degreeCount[edge.from]++;
        degreeCount[edge.to]++;
    });

   
    const oddDegreeVertices = degreeCount.filter(degree => degree % 2 === 1).length;

   
    if (oddDegreeVertices === 0) {
        return { eulerPath: "This is an Euler Circuit." }; 
    } else if (oddDegreeVertices === 2) {
        return { eulerPath: "This is an Euler Path." };
        return { eulerPath: [] }; 
    }

   
    const findEulerPath = (u) => {
        for (let v of adjList[u]) {
            const edgeKey = u < v ? `${u}-${v}` : `${v}-${u}`;
            if (!visitedEdges.has(edgeKey)) {
                visitedEdges.add(edgeKey); 
                findEulerPath(v);
            }
        }
        eulerPath.push(u); 
    };

    const eulerPath = [];
    const startVertex = degreeCount.findIndex(degree => degree % 2 === 1) !== -1 ? degreeCount.findIndex(degree => degree % 2 === 1) : 0;

    findEulerPath(startVertex);

    return { eulerPath: eulerPath.reverse() }; 
};
