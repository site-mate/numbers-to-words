const  { convertNumberToWords } = require('./index');

describe('Number to words', () => {
  it('Handles one', () => {
    const numberInWords = convertNumberToWords(1);
    expect(numberInWords).toBe('one');
  });

  it('Handles numbers between 10 and 20', () => {
    const numberInWords = convertNumberToWords(14);
    expect(numberInWords).toBe('fourteen');
  });

  it('Handles numbers between 20 and 100', () => {
    const numberInWords = convertNumberToWords(27);
    expect(numberInWords).toBe('twenty seven');
  });
});
