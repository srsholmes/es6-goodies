import test from 'tape';
import {
  isPrime
} from '../math';

import { removeDuplicate } from '../arrayFunc';

test('isPrime', t => {
  t.plan(3);
  t.equal(isPrime(137), true, '137 is a prime number');
  t.equal(isPrime(237), false, '237 is not a prime number');
  t.equal(isPrime('string'), false, 'Strings return false')
});

test('removeDuplicate', t => {
  t.plan(1);
  let arr = [1,1,1,1,1,2,2,2,3,3,4,5,6,66]
  t.deepEqual(removeDuplicate(arr), [1, 2, 3, 4, 5, 6, 66], 'Duplicates removed');
});