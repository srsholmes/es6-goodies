import test from 'tape';
import {
  isPrime
} from '../math';

import { removeDuplicate, maxNumber, concat, concatAndFlat } from '../arrayFunc';
import { reverse } from '../stringFunc';

test('isPrime', t => {
  t.plan(3);
  t.equal(isPrime(137), true, '137 is a prime number');
  t.equal(isPrime(237), false, '237 is not a prime number');
  t.equal(isPrime('string'), false, 'Strings return false')
});

test('removeDuplicate', t => {
  t.plan(1);
  let arr = [1,1,1,1,1,2,2,2,3,3,4,5,6,66];
  t.deepEqual(removeDuplicate(arr), [1, 2, 3, 4, 5, 6, 66], 'Duplicates removed');
});

test('maxNumber', t => {
  t.plan(4);
  let arr = [1,2,3];
  t.deepEqual(maxNumber(arr), 3, 'Max is 3');
  t.deepEqual(maxNumber('1,2,3'), 3, 'Max is 3, in comma seperated string');
  t.deepEqual(maxNumber('1 2 3'), 3, 'Max is 3, in space seperated string');
  t.deepEqual(maxNumber('1a 2b 3c'), 3, 'Max is 3, in space seperated string, with letters stripped');
});

test('reverse', t => {
  t.plan(1);
  let str = 'the quick brown fox jumps over the lazy dog';
  t.deepEqual(reverse(str), 'god yzal eht revo spmuj xof nworb kciuq eht', 'String reversed');
});

test('concat', t => {
  t.plan(3);
  let arr_01 = [1,2,3];
  let arr_02 = [4,5,6];
  let arr_03 = [7,8,9];
  t.deepEqual(concat(arr_01, arr_02), [1,2,3,4,5,6], 'Arrays combined');
  t.deepEqual(concat(arr_02, arr_01), [4,5,6,1,2,3], 'Arrays combined');
  t.deepEqual(concat(arr_02, arr_01, arr_03), [4,5,6,1,2,3,7,8,9], 'Arrays combined');
});

test('concatAndFlat', t => {
  t.plan(4);
  let arr_01 = [1,1,1];
  let arr_02 = [2,3,4,5,6];
  let arr_03 = [7,8,9];
  t.deepEqual(concatAndFlat(arr_01, arr_02), [1,2,3,4,5,6], 'Arrays combined and flattened');
  t.deepEqual(concatAndFlat(arr_02, arr_01), [2,3,4,5,6,1], 'Arrays combined and flattened');
  t.deepEqual(concatAndFlat(arr_02, arr_01, arr_03), [2,3,4,5,6,1,7,8,9], 'Arrays combined and flattened');
  t.deepEqual(concatAndFlat([1]), [1], 'Arrays combined and flattened');
});
