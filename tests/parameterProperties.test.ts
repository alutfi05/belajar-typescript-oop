describe('Parameter Properties', () => {
    class Person {
        constructor(public name: string) {}
    }

    it('should support parameter properties', () => {
        const person: Person = new Person('Lutfi');
        console.info(person.name);

        person.name = 'Laila';
        console.info(person.name);
    });
});
