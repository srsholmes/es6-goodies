import test from 'tape';

import { isPrime } from '../math';
import { removeDuplicate, maxNumber, concat, concatAndFlat, remove } from '../arrays';
import { reverse } from '../strings';
import { makeArray, isEmpty } from '../objects';

let obj = {};
let obj_2 = { prop: 'prop' };
let obj_3 = {
  prop: 'prop',
  prop_02: 'prop_02'
};

const data = Array.from({ length: 10 }, (v, k) => ++k);

//**** Math Functions ****'
test('isPrime', t => {
  t.plan(3);
  t.equal(isPrime(137), true, '137 is a prime number');
  t.equal(isPrime(237), false, '237 is not a prime number');
  t.equal(isPrime('string'), false, 'Strings return false')
});

//**** String Functions ****'
test('reverse', t => {
  t.plan(1);
  let str = 'the quick brown fox jumps over the lazy dog';
  t.deepEqual(reverse(str), 'god yzal eht revo spmuj xof nworb kciuq eht', 'String reversed');
});

//**** Object Functions ****'
test('makeArray', t => {
  t.plan(3);
  t.deepEqual(makeArray(obj), [], 'Returns an empty array');
  t.deepEqual(makeArray(obj_2), ['prop'], 'Returns an array of 1');
  t.deepEqual(makeArray(obj_3), ['prop', 'prop_02'], 'Returns an array of 2');
});

test('isEmpty', t => {
  t.plan(2);
  t.equal(isEmpty(obj), true, 'obj is empty');
  t.equal(isEmpty(obj_2), false, 'obj is not empty');
});

//**** Array Functions ****'
test('maxNumber', t => {
  t.plan(4);
  t.deepEqual(maxNumber(data), 10, 'Max is 10');
  t.deepEqual(maxNumber('1,2,3'), 3, 'Max is 3, in comma seperated string');
  t.deepEqual(maxNumber('1 2 3'), 3, 'Max is 3, in space seperated string');
  t.deepEqual(maxNumber('1a 2b 3c'), 3, 'Max is 3, in space seperated string, with letters stripped');
});

test('remove', t => {
  t.plan(4);
  t.deepEqual(remove(data, 4), [1, 2, 3, 5, 6, 7, 8, 9, 10], 'Single item removed');
  t.deepEqual(remove(['apple', 'orange', 'pear'], 'apple'), ['orange','pear'], 'Single item removed');
  t.deepEqual(remove(data, 4, 5), [ 1, 2, 3, 6, 7, 8, 9, 10 ], 'Multiples items removed');
  t.deepEqual(remove([1,2,3,4], 4,4), [ 1, 2, 3], 'Single item removed from duplicate removes');

});

test('removeDuplicate', t => {
  t.plan(1);
  let arr = [1,1,1,1,1,2,2,2,3,3,4,5,6,66];
  t.deepEqual(removeDuplicate(arr), [1, 2, 3, 4, 5, 6, 66], 'Duplicates removed');
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
