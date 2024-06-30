import type { AsymmetricEncryptionStrategy } from "../../interfaces/asymmetric-encryption.strategy";
import type { AsymmetricEncryptionKeyPair, KeyPairType } from "../../types/asymmetric-encryption-keys.type";
export declare abstract class AsymmetricEncryption implements AsymmetricEncryptionStrategy {
    protected privateKey: KeyPairType;
    protected publicKey: KeyPairType;
    setPrivateKey(privateKey: KeyPairType): void;
    setPublicKey(publicKey: KeyPairType): void;
    setKeys(keys: AsymmetricEncryptionKeyPair): void;
    encrypt(value: string): string;
    decrypt(value: string): string;
    compare(value: string, encrypted: string): boolean;
}
