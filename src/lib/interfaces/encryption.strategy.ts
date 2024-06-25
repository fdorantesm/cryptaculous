export interface EncryptionStrategy {
  encrypt(value: string): string;
  decrypt(value: string): string;
}
