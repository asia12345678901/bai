names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names;
    }

    startWith(letter){
        let arr = [];
        for(let i=0; i < names.length; i++){
            if (names[i].charAt(0)==letter) {
                arr.push(names[i]);
            }
        }
        return arr;
    }

    sort() {
        let sortedArr = [];
        names.forEach(item => sortedArr.push(item));
        return sortedArr.sort();
    }

    get() {
        return names;
    }

    getFirst(n) {
        let arr = [];
        for(let i=0; i<n; i++){
            arr.push(names[i]);
        }
        return arr;
    }
}

students = new Students(names);

console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(students.getFirst(4).sort());
console.log(students.startWith('M').sort());
console.log(students.get());