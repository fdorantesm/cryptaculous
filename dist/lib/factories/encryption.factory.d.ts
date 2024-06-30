import type { EncryptionOptionsContract } from "../contracts/encryption.options.contract";
import { Algorithm } from "../enums/algorithm.enum";
import type { EncryptionStrategy } from "../interfaces/encryption.strategy";
export declare class EncryptionFactory {
    private constructor();
    static createEncryption(algorithm: Algorithm, config: EncryptionOptionsContract): EncryptionStrategy;
    private static getEncryptionClass;
}
