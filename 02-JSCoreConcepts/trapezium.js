let x = 2;
let y = 3;
let h = 4;

const obliczPoleTrapezu = (b,c,d) => {
    return ((b+c)*d)/2;
    }

console.log(`Pole trapezu o bokach ${x} i ${y} oraz wysokości ${h} to: ${obliczPoleTrapezu(x,y,h)}`);