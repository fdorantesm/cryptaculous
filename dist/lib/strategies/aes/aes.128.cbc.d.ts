import type { EncryptionStrategy } from "../../interfaces/encryption.strategy";
import { AesEncryption } from "./aes";
import type { EncryptionConfigContract } from "../../contracts/encryption.config.contract";
export declare class Aes128Cbc extends AesEncryption implements EncryptionStrategy {
    constructor(config: EncryptionConfigContract);
}
