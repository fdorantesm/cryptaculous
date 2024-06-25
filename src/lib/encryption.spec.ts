import { testCases } from '../../test/cases';
import { Encryption } from './encryption';
import { Algorithm } from './enums/algorithm.enum';
import { MissingStrategyException } from './exceptions/missing-strategy.exception';
import { AesEncryption } from './strategies/aes/aes';
import { Aes256Cbc } from './strategies/aes/aes.256.cbc';

describe('Encryption', () => {
  const testCase = testCases[Algorithm.AES_256_CBC];

  it('should encrypt and decrypt using Aes256Cbc Class', () => {
    const aesStrategy = new Aes256Cbc(testCase.config);

    const aes = new Encryption(aesStrategy);
    const secret = testCase.secret.plain;
    const crypted = aes.encrypt(secret);
    const decrypted = aes.decrypt(crypted);

    expect(crypted).toBe(testCase.secret.crypted);
    expect(secret).not.toBe(crypted);
    expect(secret).toBe(decrypted);
  });

  it('should encrypt and decrypt using AesEncryption class', () => {
    const aesStrategy = new AesEncryption({
      algorithm: Algorithm.AES_256_CBC,
      key: testCase.config.key,
      iv: testCase.config.iv,
    });

    const aes = new Encryption(aesStrategy);
    const secret = testCase.secret.plain;
    const crypted = aes.encrypt(secret);
    const decrypted = aes.decrypt(crypted);

    expect(crypted).toBe(testCase.secret.crypted);
    expect(secret).not.toBe(crypted);
    expect(secret).toBe(decrypted);
  });

  it('should set an encryption strategy after Encryption instance', () => {
    const aes = new Encryption();

    aes.setStrategy(
      new AesEncryption({
        algorithm: Algorithm.AES_256_CBC,
        key: testCase.config.key,
        iv: testCase.config.iv,
      })
    );

    const secret = testCase.secret.plain;
    const crypted = aes.encrypt(secret);
    const decrypted = aes.decrypt(crypted);

    expect(crypted).toBe(testCase.secret.crypted);
    expect(secret).not.toBe(crypted);
    expect(secret).toBe(decrypted);
  });

  it('should throw an error if no strategy is set', () => {
    const aes = new Encryption();
    expect(() => aes.encrypt('secret')).toThrow(new MissingStrategyException());
    expect(() => aes.decrypt('******')).toThrow(new MissingStrategyException());
  });
});
