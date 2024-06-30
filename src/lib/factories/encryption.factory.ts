import type { EncryptionOptionsContract } from "../contracts/encryption.options.contract";
import { Algorithm } from "../enums/algorithm.enum";
import { UnsupportedAlgorithmException } from "../exceptions/unsupported-algorithm.exception";
import type { EncryptionStrategy } from "../interfaces/encryption.strategy";
import { Aes128Cbc } from "../strategies/symmetric/aes/aes.128.cbc";
import { Aes128Cfb } from "../strategies/symmetric/aes/aes.128.cfb";
import { Aes128Ctr } from "../strategies/symmetric/aes/aes.128.ctr";
import { Aes128Ecb } from "../strategies/symmetric/aes/aes.128.ecb";
import { Aes128Ofb } from "../strategies/symmetric/aes/aes.128.ofb";
import { Aes192Cbc } from "../strategies/symmetric/aes/aes.192.cbc";
import { Aes192Cfb } from "../strategies/symmetric/aes/aes.192.cfb";
import { Aes192Ctr } from "../strategies/symmetric/aes/aes.192.ctr";
import { Aes192Ecb } from "../strategies/symmetric/aes/aes.192.ecb";
import { Aes192Ofb } from "../strategies/symmetric/aes/aes.192.ofb";
import { Aes256Cbc } from "../strategies/symmetric/aes/aes.256.cbc";
import { Aes256Cfb } from "../strategies/symmetric/aes/aes.256.cfb";
import { Aes256Ctr } from "../strategies/symmetric/aes/aes.256.ctr";
import { Aes256Ecb } from "../strategies/symmetric/aes/aes.256.ecb";
import { Aes256Ofb } from "../strategies/symmetric/aes/aes.256.ofb";

export class EncryptionFactory {
  private constructor() {
    // Prevents instantiation
  }

  public static createEncryption(
    algorithm: Algorithm,
    config: EncryptionOptionsContract
  ): EncryptionStrategy {
    return this.getEncryptionClass(algorithm, config);
  }

  private static getEncryptionClass(
    algorithm: Algorithm,
    config: EncryptionOptionsContract
  ): EncryptionStrategy {
    const map = {
      [Algorithm.AES_128_CBC]: Aes128Cbc,
      [Algorithm.AES_128_CFB]: Aes128Cfb,
      [Algorithm.AES_128_CTR]: Aes128Ctr,
      [Algorithm.AES_128_ECB]: Aes128Ecb,
      [Algorithm.AES_128_OFB]: Aes128Ofb,
      [Algorithm.AES_192_CBC]: Aes192Cbc,
      [Algorithm.AES_192_CFB]: Aes192Cfb,
      [Algorithm.AES_192_CTR]: Aes192Ctr,
      [Algorithm.AES_192_ECB]: Aes192Ecb,
      [Algorithm.AES_192_OFB]: Aes192Ofb,
      [Algorithm.AES_256_CBC]: Aes256Cbc,
      [Algorithm.AES_256_CFB]: Aes256Cfb,
      [Algorithm.AES_256_CTR]: Aes256Ctr,
      [Algorithm.AES_256_ECB]: Aes256Ecb,
      [Algorithm.AES_256_OFB]: Aes256Ofb,
    };

    const classReference = map[algorithm];

    if (!classReference) {
      throw new UnsupportedAlgorithmException(algorithm);
    }

    return new classReference(config);
  }
}
