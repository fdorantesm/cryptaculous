import type { EncryptionConfigContract } from "../contracts/encryption.config.contract";
import { Algorithm } from "../enums/algorithm.enum";
import type { EncryptionStrategy } from "../interfaces/encryption.strategy";
export declare class EncryptionFactory {
    private constructor();
    static createEncryption(algorithm: Algorithm, config: EncryptionConfigContract): EncryptionStrategy;
    private static getEncryptionClass;
}
