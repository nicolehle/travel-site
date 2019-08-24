class Person {
    constructor(fullName, favoriteColor) {
        this.name = fullName;
        this.favColor = favoriteColor;
    }
    greet() {
        console.log(`Hi there, ${this.name}. Your favorite color is ${this.favColor}.`);
    }
}

//module.exports = Person;
export default Person;