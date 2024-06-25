import type { EncryptionContract } from "../contracts/encryption.contract";
import type { EncryptionStrategy } from "../interfaces/encryption.strategy";
export declare abstract class BaseEncryption implements EncryptionStrategy {
    protected readonly config: EncryptionContract;
    constructor(config: EncryptionContract);
    encrypt(value: string): string;
    decrypt(encrypted: string): string;
    protected abstract validateConfig(config: EncryptionContract): void;
}
