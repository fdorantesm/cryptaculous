import { symmetricTestCases } from "../../../../../test/symmetric-cases";
import { Algorithm } from "../../../enums/algorithm.enum";
import { Aes256Ofb } from "./aes.256.ofb";

describe("AES 256 OFB", () => {
  const testCase = symmetricTestCases[Algorithm.AES_256_OFB];

  it("should encrypt a secret", () => {
    const crypt = new Aes256Ofb(testCase.config);
    const crypted = crypt.encrypt(testCase.secret.plain);
    expect(crypted).not.toBe(testCase.secret.plain);
    expect(crypted).toBe(testCase.secret.crypted);
  });
});
