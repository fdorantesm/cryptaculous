import type { EncryptionContract } from "../../contracts/encryption.contract";
import { BaseEncryption } from "../../core/base.encryption";
import { InvalidKeyLengthException } from "../../exceptions/invalid-key-length.exception";

export class Chacha20Encryption extends BaseEncryption {
  constructor(config: EncryptionContract) {
    super(config);
  }

  protected validateConfig(config: EncryptionContract): void {
    if (Buffer.from(config.key, "utf8").length !== 32) {
      throw new InvalidKeyLengthException("Expected 32 bytes");
    }
  }
}
