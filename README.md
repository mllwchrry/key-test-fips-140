# FIPS-140-3 key tests

FIPS-140-3 is a United States government computer security standard 
used to approve cryptographic modules.

According to FIPS-140, testing consists of various statistical tests 
that evaluate the properties of binary sequences in terms of randomness.

Four of them were implemented in this repository. The functions return 
boolean values (whether the test is passed).
## Monobit Test
It checks whether the balance between zeros and ones in the sequence is maintained.
A sequence of twenty thousand bits is considered random if the number of 
identical bits falls within the range (9654, 10346).

```sh
monobitTest(key);
```

## Long Run Test

It checks whether the sequence contains a series of identical bits of too long length.
According to the standard, the maximum series length is 36 bits.

```sh
longRunTest(key);
```
## Poker Test
It checks whether the bits are evenly distributed in the sequence blocks.
According to the Pokker test, the sequence is considered random 
if the parameter X3 is in the range (1.03, 57.4).

```sh
pokerTest(key);
```

## Runs Test
It checks whether the sequence contains too long or too short series of identical bits.

```sh
runsTest(key);
```

## General Test
It represent a general function that returns true only if all 4 tests are passed.
```sh
testKey(key);
```

## PseudoRandom Number Generators
Four PRNGs were implemented and used for tests, they can be found in PRNGs folder:

- using built-in JavaScript Math.rand() and Math.round() functions;
- using built-in JavaScript Math.rand() function to generate random hex and further transfer it to binary;
- using the Linear Congruential Generator;
- using Linear Feedback Shift Register.

## Project Setup

### Install dependencies
```sh
npm install
```

### Run tests


```sh
npx mocha test.js
```

### Test results

As we can see only the LFSR has not passed all the tests (it could be caused by a weak seed).
