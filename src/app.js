const maleParent = {
  sex: ["X", "Y"],
  trait1: ["Wild type", "Wild type"],
  trait2: ["Wild type", "Wild type"],
  trait3: ["Wild type", "Wild type"],
};

const femaleParent = {
  sex: ["X", "X"],
  trait1: ["White eyes", "Wild type"],
  trait2: ["Wild type", "Wild type"],
  trait3: ["Wild type", "Wild type"],
};

// Linear Congruential Generator
class SeededRandom {
  constructor(seed) {
    this._seed = seed;
  }
  random() {
    this._seed = (this._seed * 1664525 + 1013904223) % 4294967296;
    return this._seed / 4294967296;
  }
}

// สร้าง seeded random number generator ด้วย seed ที่กำหนด
const seededRandom = new SeededRandom(1418223);

// ฟังก์ชันใหม่ที่ใช้เลขสุ่มจาก seededRandom แทนการใช้ Math.random()
function getRandomElement(array) {
  let randomIndex = seededRandom.random();
  console.log(randomIndex);
  return array[Math.floor(randomIndex * array.length)];
}

// Function to generate offspring object with inherited traits
function generateOffspring(mother, father) {
  const offspringSexChromosome = getRandomElement(["X", "Y"]);
  const offspringSex = offspringSexChromosome === "X" ? "Female" : "Male";
  return {
    sex: offspringSex,
    trait1: [getRandomElement(mother.trait1), getRandomElement(father.trait1)],
    trait2: [getRandomElement(mother.trait2), getRandomElement(father.trait2)],
    trait3: [getRandomElement(mother.trait3), getRandomElement(father.trait3)],
  };
}

// Generate 100 offspring and store them in an array
const numOffspring = 100;
const offspringList = [];

for (let i = 0; i < numOffspring; i++) {
  offspringList.push(generateOffspring(femaleParent, maleParent));
}
for (let i = 0; i < offspringList.length; i++) {
  console.log(offspringList[i]);
}

// save to excel file
const excel = require("exceljs");
const workbook = new excel.Workbook();
const worksheet = workbook.addWorksheet("Offspring");

worksheet.columns = [
  { header: "Sex", key: "sex" },
  { header: "show_Trait 1", key: "show_Trait1" },
  { header: "show_Trait 2", key: "show_Trait2" },
  { header: "show_Trait 3", key: "show_Trait3" },
  { header: "hide_Trait 1", key: "hide_Trait1" },
  { header: "hide_Trait 2", key: "hide_Trait2" },
  { header: "hide_Trait 3", key: "hide_Trait3" },
];

// เพิ่มข้อมูลลูกสืบลงในตารางในไฟล์ Excel
for (let i = 0; i < offspringList.length; i++) {
  const offspring = offspringList[i];
  const trait1 = offspring.trait1
  // const trait1Check = () => {
  //   if(offspring.sex == "Male"){
  //     return offspring.trait1[0]
  //   }else{
  //     return offspring.trait1[1]
  //   }
  // }
  const trait2 = offspring.trait2
  const trait3 = offspring.trait3
  const trait1Check = () => {
    if(offspring.sex == "Male"){
      return offspring.trait1[0]
    }else{
      return offspring.trait1[1]
    }
  }
  worksheet.addRow({
    sex: offspring.sex,
    show_Trait1: trait1[0],
    show_Trait2: trait2[0],
    show_Trait3: trait3[0],
    hide_Trait1: trait1Check(),
    hide_Trait2: trait2[1],
    hide_Trait3: trait3[1],
  });
}

// บันทึกไฟล์ Excel
workbook.xlsx.writeFile("./algoritum/out/offspring.xlsx").then(() => {
  console.log("Excel file saved.");
}).catch((error) => {
  console.log("Error saving Excel file:", error);
});