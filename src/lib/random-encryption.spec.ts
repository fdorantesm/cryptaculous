import { testCases } from '../../test/cases';
import { Algorithm } from './enums/algorithm.enum';
import { RandomEncryption } from './random-encryption';

describe('RandomEncryption', () => {
  it('should encrypt a secret without pass key and iv', () => {
    const testCase = testCases[Algorithm.AES_256_CBC];
    const cryptedValue = RandomEncryption.encrypt(
      Algorithm.AES_256_CBC,
      testCase.secret.plain
    );

    expect(cryptedValue).toBeInstanceOf(Object);
    expect(cryptedValue).toHaveProperty('payload');
    expect(cryptedValue).toHaveProperty('key');
    expect(cryptedValue).toHaveProperty('iv');
    expect(cryptedValue).toHaveProperty('algorithm');
  });

  it('should return different values for each encryption', () => {
    const testCase = testCases[Algorithm.AES_256_CBC];
    const cryptedValue1 = RandomEncryption.encrypt(
      Algorithm.AES_256_CBC,
      testCase.secret.plain
    );

    const cryptedValue2 = RandomEncryption.encrypt(
      Algorithm.AES_256_CBC,
      testCase.secret.plain
    );

    const decryptedValue1 = RandomEncryption.decrypt(cryptedValue1);
    const decryptedValue2 = RandomEncryption.decrypt(cryptedValue2);

    expect(cryptedValue1.algorithm).toBe(cryptedValue2.algorithm);
    expect(cryptedValue1.key).not.toEqual(cryptedValue2.key);
    expect(cryptedValue1.iv).not.toEqual(cryptedValue2.iv);
    expect(cryptedValue1.payload).not.toEqual(cryptedValue2.payload);
    expect(decryptedValue1).toEqual(decryptedValue2);

    expect(
      decryptedValue1 === decryptedValue2 &&
        decryptedValue2 === testCase.secret.plain
    ).toBeTruthy();
  });
});
