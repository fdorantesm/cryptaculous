import { symmetricTestCases } from "../../../../../test/symmetric-cases";
import { Algorithm } from "../../../enums/algorithm.enum";
import { Aes256Cfb } from "./aes.256.cfb";

describe("AES 256 CFB", () => {
  const testCase = symmetricTestCases[Algorithm.AES_256_CFB];

  it("should encrypt a secret", () => {
    const crypt = new Aes256Cfb(testCase.config);
    const crypted = crypt.encrypt(testCase.secret.plain);
    expect(crypted).not.toBe(testCase.secret.plain);
    expect(crypted).toBe(testCase.secret.crypted);
  });
});
