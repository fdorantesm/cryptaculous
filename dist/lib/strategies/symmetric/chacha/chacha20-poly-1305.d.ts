import type { EncryptionContract } from "../../../contracts/encryption.contract";
import { BaseSymmetricEncryption } from "../../../core/base-symmetrical.encryption";
export declare class Chacha20Encryption extends BaseSymmetricEncryption {
    constructor(config: EncryptionContract);
    protected validateConfig(config: EncryptionContract): void;
}
