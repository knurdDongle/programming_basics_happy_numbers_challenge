
import assert from 'assert';
import happyNumber from './solution';

assert.equal(happyNumber(1),  true);
assert.equal(happyNumber(7),  true);
assert.equal(happyNumber(13), true);
assert.equal(happyNumber(0),  false);
assert.equal(happyNumber(2),  false);
assert.equal(happyNumber(90), false);
