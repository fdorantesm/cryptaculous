import type { EncryptionStrategy } from "../../../interfaces/encryption.strategy";
import { AesEncryption } from "./aes";
import type { EncryptionOptionsContract } from "../../../contracts/encryption.options.contract";
export declare class Aes128Cbc extends AesEncryption implements EncryptionStrategy {
    constructor(config: EncryptionOptionsContract);
}
