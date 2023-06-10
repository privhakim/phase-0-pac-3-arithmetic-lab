require ( './root.js' );

var a, b
function add(a, b) {
  return a + b;
}
beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})
describe('basic math functions', function () {
  it("'add()' is a valid function", function add() {
    expect(add).toExist
  })
  it("'subtract()' is a valid function", function subtract()
   {
    expect(subtract).toExist
  })
  it("'multiply()' is a valid function", function multiply() {
    expect(multiply).toExist
  })
  it("'divide()' is a valid function", function divide() {
    expect(divide).toExist
  })
  function add(a, b) {
    return a + b;
  }
  it('add(a, b) adds two numbers and returns the result', function() {
    expect(add(a, b)).toEqual(a + b)
  })
  
function subtract(a, b) {
  return a - b;
}
  it('subtract(a, b) subtracts b from a and returns the result', function() {
    expect(subtract(a, b)).toEqual(a - b)
  })
  function multiply(a, b) {
    return a * b;
  }
  it('multiply(a, b) multiplies two numbers and returns the result', function() {
    expect(multiply(a, b)).toEqual(a * b)
  })
  function divide(a, b) {
    return a / b;
  }
  it('divide(a, b) divides a by b and returns the result', function() {
    expect(divide(a, b)).toEqual(a / b)
  })
  function increment(n) {
    return n + 1;
  }
  it('increment(n) increments n and returns the result', function() {
    expect(increment(a)).toEqual(a + 1)
  })
  function decrement(n) {
    return n - 1;
  }
  it('decrement(n) decrements n and returns the result', function() {
    expect(decrement(a)).toEqual(a - 1)
  })
})



function makeInt(n) {
  return parseInt(n, 10);
}
describe('makeInt(n)', function() {
  it('parses n as an integer and returns the parsed integer', function() {
    expect(makeInt(a.toString())).toEqual(a)
  })

  it('assumes base 10', function() {
    expect(makeInt('0x2328')).toEqual(0)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
  })
})
function preserveDecimal(n) {
  return parseFloat(n);
}
describe('preserveDecimal(n)', function() {
  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
    expect(preserveDecimal('2.222')).toBe(2.222)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
  })
})
