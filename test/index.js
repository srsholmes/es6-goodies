import test from 'tape';

import { isPrime } from '../math';
import { removeDuplicate, maxNumber, concat, unique, remove, range } from '../arrays';
import { reverse, escapeHTML, capitalize } from '../strings';
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
  t.equal(isPrime(137), true, 'Should return true');
  t.equal(isPrime(237), false, 'Should return false');
  t.equal(isPrime('string'), false, 'Should return false');
});

//**** String Functions ****
test('capitalize', t => {
  t.plan(2);
  t.equal(capitalize('foo bar'), 'Foo bar', 'Should return Foo bar');
  t.notEqual(capitalize('Simon says'), 'Simon Says', 'Should not return Simon Says');
});

test('reverse', t => {
  t.plan(1);
  let str = 'the quick brown fox jumps over the lazy dog';
  t.deepEqual(reverse(str), 'god yzal eht revo spmuj xof nworb kciuq eht', 'Should return the string reversed');
});

test('escapeHTML', t => {
  t.plan(1);
  t.deepEqual(escapeHTML('<foo><bar>'), '&lt;foo&gt;&lt;bar&gt;', 'Should return escaped HTML code');
});

//**** Object Functions ****'
test('makeArray', t => {
  t.plan(3);
  t.deepEqual(makeArray(obj), [], 'Should return an empty array');
  t.deepEqual(makeArray(obj_2), ['prop'], 'Should returns an array of length 1');
  t.deepEqual(makeArray(obj_3), ['prop', 'prop_02'], 'Should returns an array of length 2');
});

test('isEmpty', t => {
  t.plan(2);
  t.equal(isEmpty(obj), true, 'Should return true');
  t.equal(isEmpty(obj_2), false, 'Should return false');
});

//**** Array Functions ****'
test('maxNumber', t => {
  t.plan(4);
  t.deepEqual(maxNumber(data), 10, 'Should return max as 10');
  t.deepEqual(maxNumber('1,2,3'), 3, 'Should return max as 3, in comma seperated string');
  t.deepEqual(maxNumber('1 2 3'), 3, 'Should return max as 3, in space seperated string');
  t.deepEqual(maxNumber('1a 2b 3c'), 3, 'Should return max as 3, in space seperated string, with letters stripped');
});

test('remove', t => {
  t.plan(4);
  t.deepEqual(remove(data, 4), [1, 2, 3, 5, 6, 7, 8, 9, 10], 'Should return array with item removed');
  t.deepEqual(remove(['apple', 'orange', 'pear'], 'apple'), ['orange','pear'], 'Should return array with item removed');
  t.deepEqual(remove(data, 4, 5), [ 1, 2, 3, 6, 7, 8, 9, 10 ], 'Should return array all items removed');
  t.deepEqual(remove([1,2,3,4], 4,4), [ 1, 2, 3], 'Should return array with single item removed from duplicated input');
});

test('range', t => {
  t.plan(6);
  t.deepEqual(range(0, 100, 10), [0, 10, 20, 30, 40, 50, 60, 70, 80, 90], 'Should return an array with correct range and steps');
  t.deepEqual(range(0, 10, 1), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Should return an array with correct range and steps');
  t.deepEqual(range(0, 100, 25), [0, 25, 50, 75], 'Should return an array with correct range and steps');
  t.deepEqual(range(0, 1000, 500), [0, 500], 'Should return an array with correct range and steps');
  t.deepEqual(range(0, 10), [0,1,2,3,4,5,6,7,8,9], 'Should return an array with correct range and steps');
  t.deepEqual(range(10), [0,1,2,3,4,5,6,7,8,9], 'Should return an array with correct range and steps');
});

test('removeDuplicate', t => {
  t.plan(1);
  let arr = [1,1,1,1,1,2,2,2,3,3,4,5,6,66];
  t.deepEqual(removeDuplicate(arr), [1, 2, 3, 4, 5, 6, 66], 'Should return an array with duplicates removed');
});

test('concat', t => {
  t.plan(3);
  let arr_01 = [1,2,3];
  let arr_02 = [4,5,6];
  let arr_03 = [7,8,9];
  t.deepEqual(concat(arr_01, arr_02), [1,2,3,4,5,6], 'Should return an array with all inputs');
  t.deepEqual(concat(arr_02, arr_01), [4,5,6,1,2,3], 'Should return an array with all inputs');
  t.deepEqual(concat(arr_02, arr_01, arr_03), [4,5,6,1,2,3,7,8,9], 'Should return an array with all inputs');
});

test('unique', t => {
  t.plan(4);
  let arr_01 = [1,1,1];
  let arr_02 = [2,3,4,5,6];
  let arr_03 = [7,8,9];
  t.deepEqual(unique(arr_01, arr_02), [1,2,3,4,5,6], 'Should return an array with all inputs, with duplicates removed');
  t.deepEqual(unique(arr_02, arr_01), [2,3,4,5,6,1], 'Should return an array with all inputs, with duplicates removed');
  t.deepEqual(unique(arr_02, arr_01, arr_03), [2,3,4,5,6,1,7,8,9], 'Should return an array with all inputs, with duplicates removed');
  t.deepEqual(unique([1]), [1], 'Should return an array with all inputs, with duplicates removed');
});
