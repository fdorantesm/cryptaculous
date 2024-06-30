import type { SymmetricAlgorithmCase } from "../../../../../test/case.type";
import { symmetricTestCases } from "../../../../../test/symmetric-cases";
import { Algorithm } from "../../../enums/algorithm.enum";
import { Aes128Ctr } from "./aes.128.ctr";

describe("AES 128 CTR", () => {
  const testCase: SymmetricAlgorithmCase =
    symmetricTestCases[Algorithm.AES_128_CTR];

  it("should encrypt a secret", () => {
    const crypt = new Aes128Ctr(testCase.config);
    const crypted = crypt.encrypt(testCase.secret.plain);
    expect(crypted).not.toBe(testCase.secret.plain);
    expect(crypted).toBe(testCase.secret.crypted);
  });
});
