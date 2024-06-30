import { symmetricTestCases } from "../../../../../test/symmetric-cases";
import { Algorithm } from "../../../enums/algorithm.enum";
import { Aes256Ecb } from "./aes.256.ecb";

describe("AES 256 ECB", () => {
  it("should encrypt and decrypt", () => {
    const testCase = symmetricTestCases[Algorithm.AES_256_ECB];
    const crypt = new Aes256Ecb(testCase.config);
    const crypted = crypt.encrypt(testCase.secret.plain);
    expect(crypted).not.toBe(testCase.secret.plain);
    expect(crypted).toBe(testCase.secret.crypted);
  });
});
