import type { Algorithm } from "../enums/algorithm.enum";

export type EncryptionContract = {
  algorithm: Algorithm;
  key: string;
  iv: string;
};
