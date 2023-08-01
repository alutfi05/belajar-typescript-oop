describe('Method Overriding', () => {
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    class Manager extends Employee {
        sayHello(name: string): void {
            super.sayHello(name);
            console.info('and i am your manager');
        }
    }

    it('should support', () => {
        const employee: Employee = new Employee('Ahmad Lutfi');
        employee.sayHello('Laila');

        const manager: Manager = new Manager('Laila Indah Agustin');
        manager.sayHello('Ahmad Lutfi');
    });
});
