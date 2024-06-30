import { symmetricTestCases } from "../../../../../test/symmetric-cases";
import { Algorithm } from "../../../enums/algorithm.enum";
import { Aes256Ctr } from "./aes.256.ctr";

describe("AES 256 CTR", () => {
  const testCase = symmetricTestCases[Algorithm.AES_256_CTR];

  it("should encrypt a secret", () => {
    const crypt = new Aes256Ctr(testCase.config);
    const crypted = crypt.encrypt(testCase.secret.plain);
    expect(crypted).not.toBe(testCase.secret.plain);
    expect(crypted).toBe(testCase.secret.crypted);
  });
});
