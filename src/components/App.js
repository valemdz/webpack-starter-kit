export class HelloWorld {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hola Mundo ${this.name}`;
    }
}