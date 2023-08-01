describe('Inheritance', () => {
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Manager extends Employee {}

    class Director extends Manager {}

    it('should support', () => {
        const employee: Employee = new Employee('Lutfi');
        console.info(employee.name);

        const manager: Manager = new Manager('Ahmad Lutfi Rizki Patria');
        console.info(manager.name);

        const director: Director = new Director('Laila Indah Agustin');
        console.info(director.name);
    });
});
