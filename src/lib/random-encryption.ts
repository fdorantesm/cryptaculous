import * as crypto from 'crypto';
import type { KeyChain } from './types/key-ring.type';
import { Algorithm } from './enums/algorithm.enum';
import { EncryptionFactory } from './factories/encryption.factory';
import { AES_ALGORITHM_MAP } from './strategies/symmetric/aes/aes.consts';

export class RandomEncryption {
  public static encrypt(algorithm: Algorithm, value: string): KeyChain {
    const params = AES_ALGORITHM_MAP[algorithm];
    const key = crypto
      .randomBytes(Math.ceil(params.keyLength / 2))
      .toString('hex');

    const iv = crypto
      .randomBytes(Math.ceil(params.ivLength / 2))
      .toString('hex');

    const crypt = EncryptionFactory.createEncryption(algorithm, { key, iv });
    const payload = crypt.encrypt(value);

    return {
      payload,
      algorithm,
      key,
      iv,
    };
  }

  static decrypt(keyChain: KeyChain): string {
    const { algorithm, key, iv, payload } = keyChain;
    const crypt = EncryptionFactory.createEncryption(algorithm, { key, iv });

    return crypt.decrypt(payload);
  }
}
