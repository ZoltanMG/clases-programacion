const valor1 = "%";
const valor2 = "$";
const result = valor1 + valor2;

const mensaje1 = "Este valor es mayor a 50"
const mensaje2 = "Este valor es menor a 50"
const mensaje3 = "Este valor es igual a 50"
const mensaje4 = "Este valor no se que es"

if (result > 50) {
    console.log(mensaje1);
} else if (result < 50) {
    console.log(mensaje2);
} else if (result === 50) {
    console.log(mensaje3);
} else {
    console.log(mensaje4);  
}


// === | igual a          | 3 === 2? => false
// === | igual a          | 3 === 3? => true
// !== | diferen de       | 3 !== 3? => false
// !== | diferen de       | 3 !== 2? => true
// >   | mayor que        | 3 > 2?   => true
// >   | mayor que        | 2 > 3?   => false
// <   | menor que        | 3 < 2?   => false
// <   | menor que        | 2 < 3?   => true
// >=  | mayor igual que  | 17 >= 18? => false
// >=  | mayor igual que  | 18 >= 18? => true
// >=  | mayor igual que  | 30 >= 18? => true
// <=  | menor igual que  | 30 <= 18? => false
// <=  | menor igual que  | 17 <= 18? => true


