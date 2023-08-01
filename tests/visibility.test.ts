describe('Visibility', () => {
    class Counter {
        protected counter: number = 0;

        public increment(): void {
            this.counter++;
        }

        public getCounter(): number {
            return this.counter;
        }
    }

    class DoubleCounter extends Counter {
        public increment(): void {
            this.counter += 2;
        }
    }

    it('should support private', () => {
        const counter = new Counter();
        counter.increment();
        counter.increment();
        counter.increment();
        console.info(counter.getCounter());
    });

    it('should support protected', () => {
        const doubleCounter: DoubleCounter = new DoubleCounter();
        doubleCounter.increment();
        doubleCounter.increment();
        doubleCounter.increment();
        console.info(doubleCounter.getCounter());
    });
});
