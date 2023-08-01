describe('Instance Of', () => {
    class Employee {}
    class Manager {}

    const lutfi: Employee = new Employee();
    const laila: Manager = new Manager();

    it('should have problem using typeof', () => {
        console.info(typeof lutfi);
        console.info(typeof laila);
    });

    it('should support instanceof', () => {
        expect(lutfi instanceof Employee).toBe(true);
        expect(lutfi instanceof Manager).toBe(false);

        expect(laila instanceof Employee).toBe(false);
        expect(laila instanceof Manager).toBe(true);
    });
});
