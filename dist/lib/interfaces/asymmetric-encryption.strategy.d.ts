import type { EncryptionStrategy } from "./encryption.strategy";
export interface AsymmetricEncryptionStrategy extends EncryptionStrategy {
    encrypt(value: string, publicKey?: string): string;
    decrypt(value: string, privateKey?: string): string;
    compare(original: string, encrypted: string, privateKey?: string): boolean;
    setKeys(keys: {
        publicKey: string;
        privateKey: string;
    }): void;
    setPrivateKey(privateKey: string): void;
    setPublicKey(publicKey: string): void;
}
