import type { EncryptionContract } from "../../contracts/encryption.contract";
import { BaseEncryption } from "../../core/base.encryption";
export declare class Chacha20Encryption extends BaseEncryption {
    constructor(config: EncryptionContract);
    protected validateConfig(config: EncryptionContract): void;
}
