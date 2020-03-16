class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  prezentuj() {
    return this.name + " " + this.surname.toUpperCase();
  }
  inicjały() {
    return this.name.charAt(0) + "." + this.surname.charAt(0) + ".";
  }
}

przykład = new Person("Jan", "Nowak");
ja = new Person("Joanna", "Ginda");

console.log(przykład.prezentuj());
console.log(przykład.inicjały());
console.log(ja.prezentuj());
console.log(ja.inicjały());