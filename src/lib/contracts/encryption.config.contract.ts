import type { EncryptionContract } from "./encryption.contract";

export type EncryptionConfigContract = Omit<EncryptionContract, "algorithm">;
