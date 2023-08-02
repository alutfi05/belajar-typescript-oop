import { MathUtil } from '../src/mathUtil';

describe('Namespace', () => {
    it('should support namespace', () => {
        console.info(MathUtil.PI);
        console.info(MathUtil.sum(1, 2, 3, 4, 5));
    });
});
