import type { Algorithm } from "../src/lib/enums/algorithm.enum";

export type AlgorithmCases = Record<Algorithm, AlgorithmCase>;

export type AlgorithmCase = {
  config: {
    key: string;
    iv: string;
  };
  secret: {
    plain: string;
    crypted: string;
  };
};
