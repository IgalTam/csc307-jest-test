const myFunctions = require('./funcs.js');

/* sum tests*/

test('Testing sum -- success', () => {
  const target = 30;
  const result = myFunctions.sum(12, 18);
  expect(target).toBe(result);
});

test('Testing sum -- failure', () => {
    const target = 25;
    const result = myFunctions.sum(12, 18);
    expect(target).not.toBe(result);
});

test('Testing sum -- negative', () => {
    const target = -5;
    const result = myFunctions.sum(10, -15);
    expect(target).toBe(result);
});

/* div tests*/

test('Testing div -- success', () => {
    const target = 5;
    const result = myFunctions.div(25, 5);
    expect(target).toBe(result);
});

test('Testing div -- failure', () => {
    const target = 3;
    const result = myFunctions.div(25, 5);
    expect(target).not.toBe(result);
});

test('Testing div -- improper fraction', () => {
    const target = 2.25;
    const result = myFunctions.div(9, 4);
    expect(target).toBe(result);
});

test('Testing div -- proper fraction', () => {
    const target = 0.8;
    const result = myFunctions.div(4, 5);
    expect(target).toBe(result);
});

test('Testing div -- infinite nonrepeating decimal', () => {
    const target = 0.4444444444444444;
    const result = myFunctions.div(4, 9);
    expect(target).toBe(result);
});

test('Testing div -- infinite repeating decimal', () => {
    const target = 0.4444444444444444;
    const result = myFunctions.div(4, 9);
    expect(target).toBe(result);
});

test('Testing div -- infinite nonrepeating decimal', () => {
    const target = 0.21739130434782608;
    const result = myFunctions.div(5, 23);
    expect(target).toBe(result);
});

test('Testing div -- divide by zero', () => {
    expect(() => {
        myFunctions.div(5, 0);
    }).toThrowError(/div by zero/);
});

test('Testing div -- zero divide by zero', () => {
    expect(() => {
        myFunctions.div(0, 0);
    }).toThrowError(/div by zero/);
});

/* containsNumbers tests*/

test('Testing containsNumbers -- success', () => {
    const target = myFunctions.containsNumbers('a55as');
    expect(target).toBeTruthy();
});

test('Testing containsNumbers -- failure', () => {
    const target = myFunctions.containsNumbers('abbas');
    expect(target).toBeFalsy();
});

test('Testing containsNumbers -- nonalpha/nonnumeric characters -- success', () => {
    const target = myFunctions.containsNumbers('a55$%#^as');
    expect(target).toBeTruthy();
});

test('Testing containsNumbers -- nonalpha/nonnumeric characters -- failure', () => {
    const target = myFunctions.containsNumbers('abb$%#^as');
    expect(target).toBeFalsy();
});

test('Testing containsNumbers -- special characters -- success', () => {
    const target = myFunctions.containsNumbers('\t\r55\n\0\t\n\r666');
    expect(target).toBeTruthy();
});

test('Testing containsNumbers -- special characters -- failure', () => {
    const target = myFunctions.containsNumbers('\t\rtt\n\0\t\n\raaa');
    expect(target).toBeFalsy();
});

test('Testing containsNumbers -- empty string', () => {
    const target = myFunctions.containsNumbers('');
    expect(target).toBeFalsy();
});

test('Testing containsNumbers -- spaces-only string', () => {
    const target = myFunctions.containsNumbers('  ');
    expect(target).toBeFalsy();
});

test('Testing containsNumbers -- mixed whitespace string', () => {
    const target = myFunctions.containsNumbers('            ');
    expect(target).toBeFalsy();
});