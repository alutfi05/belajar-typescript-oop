describe('Class Relationship', () => {
    class Person {
        constructor(public name: string) {}
    }

    class Customer {
        constructor(public name: string) {}
    }
    it('should support class relationship', () => {
        const person: Person = new Customer('Ahmad Lutfi Rizki Patria');
        console.info(person.name);
    });
});
