describe('Polymorphism', () => {
    class Employee {
        constructor(public name: string) {}
    }

    class Manager extends Employee {}

    class VicePresident extends Manager {}

    function sayHello(employee: Employee): void {
        if (employee instanceof VicePresident) {
            const vp = employee as VicePresident;
            console.info(`Hello VP ${vp.name}`);
        } else if (employee instanceof Manager) {
            const manager = employee as Manager;
            console.info(`Hello manager ${manager.name}`);
        } else {
            console.info(`Hello employee ${employee.name}`);
        }
    }

    function sayHelloWrong(employee: Employee): void {
        if (employee instanceof Manager) {
            const manager = employee as Manager;
            console.info(`Hello manager ${manager.name}`);
        } else if (employee instanceof VicePresident) {
            const vp = employee as VicePresident;
            console.info(`Hello manager ${vp.name}`);
        } else {
            console.info(`Hello employee ${employee.name}`);
        }
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

    it('should support method parameter polymorphism wrong', () => {
        sayHelloWrong(new Employee('Lutfi'));
        sayHelloWrong(new Manager('Laila Indah Agustin'));
        sayHelloWrong(new VicePresident('Ahmad Lutfi Rizki Patria'));
    });
});
