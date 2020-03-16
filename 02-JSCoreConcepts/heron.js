let a = 3;
let b = 4;
let c = 5;

const obliczPoleTrojkata = (a,b,c) => {
    let p = 0.5 * (a+b+c);
        
    return Math.sqrt(p*(p-a)*(p-b)*(p-c));
    }

console.log(`Pole trójkąta o bokach ${a}, ${b} oraz ${c} wynosi: ${obliczPoleTrojkata(a,b,c)}`);