import type { EncryptionContract } from "../../../contracts/encryption.contract";
import { BaseSymmetricEncryption } from "../../../core/base-symmetrical.encryption";
import { InvalidKeyLengthException } from "../../../exceptions/invalid-key-length.exception";

export class Chacha20Encryption extends BaseSymmetricEncryption {
  constructor(config: EncryptionContract) {
    super(config);
  }

  protected validateConfig(config: EncryptionContract): void {
    if (Buffer.from(config.key, "utf8").length !== 32) {
      throw new InvalidKeyLengthException("Expected 32 bytes");
    }
  }
}
