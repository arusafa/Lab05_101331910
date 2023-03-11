export class Customer {
    private firstName: string;
    private lastName: string;
    private Age: number;

    constructor(firstName: string, lastName: string, Age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.Age = Age;
    }

    public greeter() {
        console.log("Hello, " + this.firstName + " " + this.lastName + " " + this.getAge()  + " years old");
    }

    getAge() {
        return 29;
    }
}
let customer = new Customer("John", "Smith", 29);
customer.greeter();

