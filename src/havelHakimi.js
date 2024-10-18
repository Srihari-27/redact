
export const havelHakimi = (sequence) => {
    
    sequence.sort((a, b) => b - a);

    while (sequence.length > 0) {
      
        sequence = sequence.filter(num => num > 0);

        if (sequence.length === 0) return true; 

        
        const degree = sequence.shift();

       
        if (degree > sequence.length) return false; 

     
        for (let i = 0; i < degree; i++) {
            sequence[i] -= 1;

        
            if (sequence[i] < 0) return false;
        }

      
        sequence.sort((a, b) => b - a);
    }

    return true;
};
