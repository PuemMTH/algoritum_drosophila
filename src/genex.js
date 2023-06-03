let parent1 = ['R', 'r'];
let parent2 = ['R', 'r'];

let punnettSquare = [];

for(let i = 0; i < parent1.length; i++) {
    punnettSquare[i] = [];
    for(let j = 0; j < parent2.length; j++) {
        punnettSquare[i][j] = parent1[i] + parent2[j];
    }
}

let counts = {'RR': 0, 'Rr': 0, 'rR': 0, 'rr': 0};

for(let i = 0; i < punnettSquare.length; i++) {
    for(let j = 0; j < punnettSquare[i].length; j++) {
        counts[punnettSquare[i][j]]++;
    }
}

console.log("Punnett Square: ", punnettSquare);

console.log("Ratios: ", {
    'RR': (counts['RR'] / 4) * 100,
    'Rr': ((counts['Rr'] / 4) + (counts['rR'] / 4)) * 100,
    'rr': (counts['rr'] / 4) * 100,
});