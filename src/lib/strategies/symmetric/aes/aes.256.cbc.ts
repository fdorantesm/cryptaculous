import type { EncryptionStrategy } from "../../../interfaces/encryption.strategy";
import { Algorithm } from "../../../enums/algorithm.enum";
import { AesEncryption } from "./aes";
import type { EncryptionOptionsContract } from "../../../contracts/encryption.options.contract";

export class Aes256Cbc extends AesEncryption implements EncryptionStrategy {
  constructor(config: EncryptionOptionsContract) {
    super({
      algorithm: Algorithm.AES_256_CBC,
      key: config.key,
      iv: config.iv,
    });
  }
}
