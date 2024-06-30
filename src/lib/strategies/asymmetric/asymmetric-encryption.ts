import * as crypto from "crypto";
import { MissingPrivateKeyException } from "../../exceptions/missing-private-key.exception";
import { MissingPublicKeyException } from "../../exceptions/missing-public-key.exception";
import { EncryptionFailedException } from "../../exceptions/encryption-error.exception";
import { DecryptionFailedException } from "../../exceptions/decryption-error.exception";
import type { AsymmetricEncryptionStrategy } from "../../interfaces/asymmetric-encryption.strategy";
import type {
  AsymmetricEncryptionKeyPair,
  KeyPairType,
} from "../../types/asymmetric-encryption-keys.type";

export abstract class AsymmetricEncryption
  implements AsymmetricEncryptionStrategy
{
  protected privateKey: KeyPairType;
  protected publicKey: KeyPairType;

  public setPrivateKey(privateKey: KeyPairType): void {
    this.privateKey = privateKey;
  }

  public setPublicKey(publicKey: KeyPairType): void {
    this.publicKey = publicKey;
  }

  public setKeys(keys: AsymmetricEncryptionKeyPair): void {
    this.setPrivateKey(keys.privateKey);
    this.setPublicKey(keys.publicKey);
  }

  public encrypt(value: string): string {
    if (!this.publicKey) {
      throw new MissingPublicKeyException();
    }

    try {
      const buffer = Buffer.from(value, "utf8");
      const encrypted = crypto.publicEncrypt(this.publicKey, buffer);
      return encrypted.toString("base64");
    } catch (error) {
      throw new EncryptionFailedException(`Encryption failed`);
    }
  }

  public decrypt(value: string): string {
    if (!this.privateKey) {
      throw new MissingPrivateKeyException();
    }

    try {
      const buffer = Buffer.from(value, "base64");
      const decrypted = crypto.privateDecrypt(this.privateKey, buffer);
      return decrypted.toString("utf8");
    } catch (error) {
      throw new DecryptionFailedException(`Decryption failed`);
    }
  }

  public compare(value: string, encrypted: string): boolean {
    return this.decrypt(encrypted) === value;
  }
}
