import * as crypto from "crypto";

import type { EncryptionContract } from "../contracts/encryption.contract";
import type { EncryptionStrategy } from "../interfaces/encryption.strategy";

export abstract class BaseSymmetricEncryption implements EncryptionStrategy {
  constructor(protected readonly config: EncryptionContract) {
    this.validateConfig(config);
  }

  public encrypt(value: string): string {
    const cipher = crypto.createCipheriv(
      this.config.algorithm,
      Buffer.from(this.config.key, "utf8"),
      Buffer.from(this.config.iv, "utf8")
    );
    let encrypted = cipher.update(value, "utf8", "base64");
    encrypted += cipher.final("base64");
    return encrypted;
  }

  public decrypt(encrypted: string): string {
    const decipher = crypto.createDecipheriv(
      this.config.algorithm,
      Buffer.from(this.config.key, "utf8"),
      Buffer.from(this.config.iv, "utf8")
    );
    const decrypted = decipher.update(encrypted, "base64", "utf8");
    return decrypted + decipher.final("utf8");
  }

  protected abstract validateConfig(config: EncryptionContract): void;
}
