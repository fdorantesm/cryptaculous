import { symmetricTestCases } from '../../test/symmetric-cases';
import { Encryption } from './encryption';
import { Algorithm } from './enums/algorithm.enum';
import { MissingStrategyException } from './exceptions/missing-strategy.exception';
import { AesEncryption } from './strategies/symmetric/aes/aes';
import { Aes256Cbc } from './strategies/symmetric/aes/aes.256.cbc';
import { RsaEncryption } from './strategies/asymmetric/rsa';

describe('Encryption', () => {
  const testCase = symmetricTestCases[Algorithm.AES_256_CBC];

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

  it('should crypt and decrypt using RsaEncryption', () => {
    const encryption = new Encryption();
    const rsaStrategy = new RsaEncryption();

    const { privateKey, publicKey } = RsaEncryption.generateKeyPairSync('rsa', {
      modulusLength: 2048,
      publicKeyEncoding: { type: 'spki', format: 'pem' },
      privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
    });

    encryption.setStrategy(rsaStrategy);
    rsaStrategy.setKeys({ privateKey, publicKey });

    const secret = 'secret';
    const crypted = encryption.encrypt(secret);
    const decrypted = encryption.decrypt(crypted);

    expect(crypted).toBe(crypted);
    expect(secret).not.toBe(crypted);
    expect(secret).toBe(decrypted);
  });
});
