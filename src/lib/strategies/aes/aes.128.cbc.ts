import type { EncryptionStrategy } from "../../interfaces/encryption.strategy";
import { Algorithm } from "../../enums/algorithm.enum";
import { AesEncryption } from "./aes";
import type { EncryptionConfigContract } from "../../contracts/encryption.config.contract";

export class Aes128Cbc extends AesEncryption implements EncryptionStrategy {
  constructor(config: EncryptionConfigContract) {
    super({
      algorithm: Algorithm.AES_128_CBC,
      key: config.key,
      iv: config.iv,
    });
  }
}
