class Suo {
    constructor(name, fur) {
        this.name = name;
        this.fur = fur;
    }

    summary() {
        const text = `Hello, I am ${this.name} and my fur is ${this.fur} 🐕‍`;
        console.log(text);
    }
    add(text) {
        this.list.push(text)
    }
}

export { Suo }