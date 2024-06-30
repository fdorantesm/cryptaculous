import type { EncryptionContract } from "./encryption.contract";

export type EncryptionOptionsContract = Omit<EncryptionContract, "algorithm">;
