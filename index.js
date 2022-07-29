// Your code here
class Pet {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

class Cat extends Pet {
    speak() {
        return `${this.name} says meow!`;
    }
}

class Dog extends Pet {
    speak() {
        return `${this.name} says woof!`;
    }
}

class Bird extends Pet {
    speak() {
        if (this.sex === 'male') {
            return `It's me! ${this.name}, the parrot!`;
        } else {
            return `${this.name} says squawk!`;
        }
    }
}   