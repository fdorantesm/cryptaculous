import type { KeyObject } from "crypto";

export type KeyPairType = string | Buffer | KeyObject;

export type AsymmetricEncryptionKeyPair = {
  publicKey: KeyPairType;
  privateKey: KeyPairType;
};
