import * as crypto from "crypto";
import { AsymmetricEncryption } from "./asymmetric-encryption";
import type { AsymmetricEncryptionKeyPair } from "../../types/asymmetric-encryption-keys.type";
import type { RSAKeyPairOptions } from "../../contracts/asymmetric-encryption.options.contract";

export class RsaEncryption extends AsymmetricEncryption {
  public static async generateKeyPair(
    type: "rsa",
    options: RSAKeyPairOptions
  ): Promise<AsymmetricEncryptionKeyPair> {
    return new Promise((resolve, reject) => {
      crypto.generateKeyPair(type, options, (err, publicKey, privateKey) => {
        if (err) {
          return reject(err);
        }
        resolve({ publicKey, privateKey });
      });
    });
  }

  public static generateKeyPairSync(
    type: "rsa",
    options: RSAKeyPairOptions
  ): AsymmetricEncryptionKeyPair {
    return crypto.generateKeyPairSync(type, options);
  }
}
