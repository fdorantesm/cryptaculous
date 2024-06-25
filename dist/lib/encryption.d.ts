import type { EncryptionStrategy } from "./interfaces/encryption.strategy";
export declare class Encryption {
    private strategy;
    constructor(strategy?: EncryptionStrategy);
    setStrategy(strategy: EncryptionStrategy): void;
    encrypt(data: string): string;
    decrypt(data: string): string;
}
