// male		
// Wild type	Wild type	Wild type
		
// female		
// White eyes	Wild type	Wild type

// cross 1  cross 2  cross 3

// let parent1 = ['R', 'r'];
// let parent2 = ['R', 'r'];

// let punnettSquare = [];

// for(let i = 0; i < parent1.length; i++) {
//     punnettSquare[i] = [];
//     for(let j = 0; j < parent2.length; j++) {
//         punnettSquare[i][j] = parent1[i] + parent2[j];
//     }
// }

// let counts = {'RR': 0, 'Rr': 0, 'rR': 0, 'rr': 0};

// for(let i = 0; i < punnettSquare.length; i++) {
//     for(let j = 0; j < punnettSquare[i].length; j++) {
//         counts[punnettSquare[i][j]]++;
//     }
// }

// console.log("Punnett Square: ", punnettSquare);

// console.log("Ratios: ", {
//     'RR': (counts['RR'] / 4) * 100,
//     'Rr': ((counts['Rr'] / 4) + (counts['rR'] / 4)) * 100,
//     'rr': (counts['rr'] / 4) * 100,
// });

// male		
// Wild type	Wild type	Wild type
// female		
// White eyes	Wild type	Wild type


// // parent1[0] ค่าที่ต้องใส่คือ
// // parent1[1] ค่าที่ต้องใส่คือ
// // parent2[0] ค่าที่ต้องใส่คือ
// // parent2[1] ค่าที่ต้องใส่คือ
// let parent1 = ['R', 'R']; // male with wild type (red) eyes
// let parent2 = ['r', 'R']; // female with one white eye allele and one wild type eye allele

// let punnettSquare = [];

// for(let i = 0; i < parent1.length; i++) {
//     punnettSquare[i] = [];
//     for(let j = 0; j < parent2.length; j++) {
//         punnettSquare[i][j] = parent1[i] + parent2[j];
//     }
// }

// let counts = {'RR': 0, 'Rr': 0, 'rR': 0, 'rr': 0};

// for(let i = 0; i < punnettSquare.length; i++) {
//     for(let j = 0; j < punnettSquare[i].length; j++) {
//         counts[punnettSquare[i][j]]++;
//     }
// }

// console.log("Punnett Square: ", punnettSquare);

// console.log("Ratios: ", {
//     'RR': (counts['RR'] / 4) * 100,
//     'Rr': ((counts['Rr'] / 4) + (counts['rR'] / 4)) * 100,
//     'rr': (counts['rr'] / 4) * 100,
// });

let parent1 = ['XR', 'XR']; // male with wild type (red) eyes
let parent2 = ['Xr', 'Y']; // female with one white eye allele and one wild type eye allele

let punnettSquare = [];

for(let i = 0; i < parent1.length; i++) {
    punnettSquare[i] = [];
    for(let j = 0; j < parent2.length; j++) {
        punnettSquare[i][j] = parent1[i] + parent2[j];
    }
}

let counts = {};

for(let i = 0; i < punnettSquare.length; i++) {
    for(let j = 0; j < punnettSquare[i].length; j++) {
        let genotype = punnettSquare[i][j];
        if (counts[genotype]) counts[genotype]++;
        else counts[genotype] = 1;
    }
}

console.log("Punnett Square: ", punnettSquare);
console.log("Counts: ", counts);

let ratios = {};

for (let genotype in counts) {
    ratios[genotype] = (counts[genotype] / 4) * 100;
}

console.log("Ratios: ", ratios);

let total = Object.values(ratios).reduce((a, b) => a + b, 0);

console.log("การแจกแจงไทย์สแคว (เปอร์เซ็นต์):");
for(let genotype in ratios) {
    console.log(`- แบบพันธุกรรม '${genotype}': ${ratios[genotype]}% (${ratios[genotype] / total * 100}% ของทั้งหมด)`);
}