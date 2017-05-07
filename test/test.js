import test from 'ava';

import warningMessage from '../src/index';
import customWarnings from './fixtures/customWarnings';

test('warning message for date', (t) => {
  t.is(warningMessage().date(), 'The input has to be a valid date format!');
  t.is(warningMessage().date('custom message'), 'custom message');
});

test('warning message for datetime', (t) => {
  t.is(warningMessage().datetime(), 'The input has to be a valid datetime format!');
  t.is(warningMessage().datetime('custom message'), 'custom message');
});

test('warning message for email', (t) => {
  t.is(warningMessage().email(), 'The input has to be an email!');
  t.is(warningMessage().email('custom message'), 'custom message');
});

test('warning message for a value that has to be exactly a target', (t) => {
  t.is(warningMessage().exactly('this'), 'The input has to be exactly like this!');
  t.is(warningMessage().exactly('this', (target) => `custom message ${target}`), 'custom message this');
});

test('warning message for float', (t) => {
  t.is(warningMessage().float(), 'The input has to be a float!');
  t.is(warningMessage().float('custom message'), 'custom message');
});

test('warning message for integer', (t) => {
  t.is(warningMessage().integer(), 'The input has to be an integer!');
  t.is(warningMessage().integer('custom message'), 'custom message');
});

test('warning message maximum characters', (t) => {
  t.is(warningMessage().maxChar(6), 'The input has to be max. 6 letters!');
  t.is(warningMessage().maxChar(10, (max) => `custom message ${max}`), 'custom message 10');
});

test('warning message minimum characters', (t) => {
  t.is(warningMessage().minChar(6), 'The input has to be min. 6 letters!');
  t.is(warningMessage().minChar(10, (min) => `custom message ${min}`), 'custom message 10');
});

test('warning message minimum and maximum characters', (t) => {
  t.is(warningMessage().minMaxChar(6, 10), 'The input has to be min. 6 and max. 10 letters!');
  t.is(warningMessage().minMaxChar(6, 10, (min, max) => `custom message ${min} and ${max}`), 'custom message 6 and 10');
});

test('warning message for a value that is not alowed', (t) => {
  t.is(warningMessage().not('value'), 'The input is not allowed to be: value!');
  t.is(warningMessage().not('not alowed', (value) => `custom message ${value}`), 'custom message not alowed');
});

test('warning message for number', (t) => {
  t.is(warningMessage().number(), 'The input has to be a number!');
  t.is(warningMessage().number('custom message'), 'custom message');
});

test('warning message for phonenumber', (t) => {
  t.is(warningMessage().phonenumber(), 'The input has to be a phonenumber!');
  t.is(warningMessage().phonenumber('custom message'), 'custom message');
});

test('warning message for requiredField', (t) => {
  t.is(warningMessage().requiredField(), 'This field is required!');
  t.is(warningMessage().requiredField('custom message'), 'custom message');
});

test('warning message for time', (t) => {
  t.is(warningMessage().time(), 'The input has to be a valid time format!');
  t.is(warningMessage().time('custom message'), 'custom message');
});

test('warning message for url', (t) => {
  t.is(warningMessage().url(), 'The input has to be a valid url!');
  t.is(warningMessage().url('custom message'), 'custom message');
});

test('warning message for validation', (t) => {
  t.is(warningMessage().validation(), 'The input is not valid!');
  t.is(warningMessage().validation('custom message'), 'custom message');
});

test('custom warning date', (t) => {
  t.is(warningMessage(customWarnings).date(), 'custom message date!');
});

test('custom warning datetime', (t) => {
  t.is(warningMessage(customWarnings).datetime(), 'custom message datetime!');
});

test('custom warning email', (t) => {
  t.is(warningMessage(customWarnings).email(), 'custom message email!');
});

test('custom warning exactly', (t) => {
  t.is(warningMessage(customWarnings).exactly('target'), 'custom message exactly target!');
});

test('custom warning float', (t) => {
  t.is(warningMessage(customWarnings).float(), 'custom message float!');
});

test('custom warning integer', (t) => {
  t.is(warningMessage(customWarnings).integer(), 'custom message integer!');
});

test('custom warning maxChar', (t) => {
  t.is(warningMessage(customWarnings).maxChar(3), 'custom message max. 3!');
});

test('custom warning minChar', (t) => {
  t.is(warningMessage(customWarnings).minChar(5), 'custom message min. 5!');
});

test('custom warning minMaxChar', (t) => {
  t.is(warningMessage(customWarnings).minMaxChar(3, 5), 'custom message min. 3 and max. 5!');
});

test('custom warning not', (t) => {
  t.is(warningMessage(customWarnings).not('value'), 'custom message not value!');
});

test('custom warning number', (t) => {
  t.is(warningMessage(customWarnings).number(), 'custom message number!');
});

test('custom warning phonenumber', (t) => {
  t.is(warningMessage(customWarnings).phonenumber(), 'custom message phonenumber!');
});

test('custom warning', (t) => {
  t.is(warningMessage(customWarnings).requiredField(), 'custom message required!');
});

test('custom warning', (t) => {
  t.is(warningMessage(customWarnings).time(), 'custom message time!');
});

test('custom warning url', (t) => {
  t.is(warningMessage(customWarnings).url(), 'custom message url!');
});

test('custom warning validation', (t) => {
  t.is(warningMessage(customWarnings).validation(), 'custom message validation!');
});
