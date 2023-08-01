describe('Super Constructor', () => {
    class Person {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Employee extends Person {
        department: string;

        constructor(name: string, department: string) {
            super(name);
            this.department = department;
        }
    }

    it('should support', () => {
        const employee: Employee = new Employee(
            'Ahmad Lutfi Rizki Patria',
            'Tech'
        );
        console.info(employee.name);
        console.info(employee.department);
    });
});
