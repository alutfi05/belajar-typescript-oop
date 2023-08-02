describe('Polymorphism', () => {
    class Employee {
        constructor(public name: string) {}
    }

    class Manager extends Employee {}

    class VicePresident extends Manager {}

    function sayHello(employee: Employee): void {
        console.info(`Hello ${employee.name}`);
    }

    it('should support', () => {
        let employee: Employee = new Employee('Lutfi');
        console.info(employee);

        employee = new Manager('Laila Indah Agustin');
        console.info(employee);

        employee = new VicePresident('Ahmad Lutfi Rizki Patria');
        console.info(employee);
    });

    it('should support method parameter polymorphism', () => {
        sayHello(new Employee('Lutfi'));
        sayHello(new Manager('Laila Indah Agustin'));
        sayHello(new VicePresident('Ahmad Lutfi Rizki Patria'));
    });
});
