import { symmetricTestCases } from "../../../../../test/symmetric-cases";
import { Algorithm } from "../../../enums/algorithm.enum";
import { Aes192Ecb } from "./aes.192.ecb";

describe("AES 192 ECB", () => {
  const testCase = symmetricTestCases[Algorithm.AES_192_ECB];

  it("should encrypt a secret", () => {
    const crypt = new Aes192Ecb(testCase.config);
    const crypted = crypt.encrypt(testCase.secret.plain);
    expect(crypted).not.toBe(testCase.secret.plain);
    expect(crypted).toBe(testCase.secret.crypted);
  });
});
