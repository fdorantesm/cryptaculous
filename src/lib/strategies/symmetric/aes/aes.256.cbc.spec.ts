import type { SymmetricAlgorithmCase } from "../../../../../test/case.type";
import { symmetricTestCases } from "../../../../../test/symmetric-cases";
import { Algorithm } from "../../../enums/algorithm.enum";
import { Aes256Cbc } from "./aes.256.cbc";

describe("AES 256 CBC", () => {
  const testCase: SymmetricAlgorithmCase =
    symmetricTestCases[Algorithm.AES_256_CBC];

  it("should encrypt a secret", () => {
    const crypt = new Aes256Cbc(testCase.config);
    const crypted = crypt.encrypt(testCase.secret.plain);
    expect(crypted).not.toBe(testCase.secret.plain);
    expect(crypted).toBe(testCase.secret.crypted);
  });
});
