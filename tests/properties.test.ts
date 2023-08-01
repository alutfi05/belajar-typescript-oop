describe('Properties', () => {
    class Customer {
        readonly id: number;
        name: string = 'Guest';
        age?: number;

        constructor(id: number, name: string) {
            this.id = id;
            this.name = name;
        }
    }
    it('should can have properties', () => {
        const customer = new Customer(1, 'Ahmad Lutfi Rizki Patria');
        customer.age = 22;

        console.info(customer.id);
        console.info(customer.name);
        console.info(customer.age);
        console.info(customer);
    });
});
