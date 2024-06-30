import type { EncryptionContract } from "../../../contracts/encryption.contract";
import type { AlgorithmMap } from "../../../types/algorithm-map.type";
import { BaseSymmetricEncryption } from "../../../core/base-symmetrical.encryption";
import { AES_ALGORITHM_MAP } from "./aes.consts";
import { UnsupportedAlgorithmException } from "../../../exceptions/unsupported-algorithm.exception";
import { InvalidKeyLengthException } from "../../../exceptions/invalid-key-length.exception";
import { InvalidIVLengthException } from "../../../exceptions/invalid-iv-length.exception";

export class AesEncryption extends BaseSymmetricEncryption {
  private static algorithmMap: Partial<AlgorithmMap> = AES_ALGORITHM_MAP;

  protected validateConfig(config: EncryptionContract): void {
    const algorithmDetails = AesEncryption.algorithmMap[config.algorithm];

    if (!algorithmDetails) {
      throw new UnsupportedAlgorithmException(config.algorithm);
    }

    if (Buffer.from(config.key, "utf8").length !== algorithmDetails.keyLength) {
      throw new InvalidKeyLengthException(
        `Invalid key length: Expected ${
          algorithmDetails.keyLength
        } bytes, got ${Buffer.from(config.key, "utf8").length}`
      );
    }

    if (Buffer.from(config.iv, "utf8").length !== algorithmDetails.ivLength) {
      throw new InvalidIVLengthException(
        `Invalid IV length: Expected ${algorithmDetails.ivLength} bytes, got ${
          Buffer.from(config.iv, "utf8").length
        }`
      );
    }
  }
}
