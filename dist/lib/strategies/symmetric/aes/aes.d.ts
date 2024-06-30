import type { EncryptionContract } from "../../../contracts/encryption.contract";
import { BaseSymmetricEncryption } from "../../../core/base-symmetrical.encryption";
export declare class AesEncryption extends BaseSymmetricEncryption {
    private static algorithmMap;
    protected validateConfig(config: EncryptionContract): void;
}
