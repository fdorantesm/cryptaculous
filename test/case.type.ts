import type { Algorithm } from "../src/lib/enums/algorithm.enum";

export type SymmetricAlgorithmCases = Record<Algorithm, SymmetricAlgorithmCase>;

export type SymmetricAlgorithmCase = {
  config: {
    key: string;
    iv: string;
  };
  secret: {
    plain: string;
    crypted: string;
  };
};
