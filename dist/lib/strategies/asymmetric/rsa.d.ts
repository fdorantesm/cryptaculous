import { AsymmetricEncryption } from "./asymmetric-encryption";
import type { AsymmetricEncryptionKeyPair } from "../../types/asymmetric-encryption-keys.type";
import type { RSAKeyPairOptions } from "../../contracts/asymmetric-encryption.options.contract";
export declare class RsaEncryption extends AsymmetricEncryption {
    static generateKeyPair(type: "rsa", options: RSAKeyPairOptions): Promise<AsymmetricEncryptionKeyPair>;
    static generateKeyPairSync(type: "rsa", options: RSAKeyPairOptions): AsymmetricEncryptionKeyPair;
}
