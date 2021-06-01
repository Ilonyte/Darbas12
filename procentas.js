const pvm = 0.21;
let kaina;

do { 
   
    kaina = Number(prompt ("ivesti prekes kaina"));
}

while (isNaN(kaina) || kaina <= 0)

let mokestis = kaina * pvm;
let bendraKaina = kaina + mokestis;

console.log(`Prekes kaina su PVM: ` + bendraKaina.toFixed(2) + " €");
console.log(`PVM: ` + mokestis.toFixed(2) + "€");
console.log(`Prekes kaina be PVM: ` + kaina.toFixed(2) + " €");



