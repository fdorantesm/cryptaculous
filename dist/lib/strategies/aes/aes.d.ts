import type { EncryptionContract } from "../../contracts/encryption.contract";
import { BaseEncryption } from "../../core/base.encryption";
export declare class AesEncryption extends BaseEncryption {
    private static algorithmMap;
    protected validateConfig(config: EncryptionContract): void;
}
