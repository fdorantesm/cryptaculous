import { testCases } from "../../../../test/cases";
import { Algorithm } from "../../enums/algorithm.enum";
import { Aes128Ecb } from "./aes.128.ecb";

describe("AES 128 ECB", () => {
  const testCase = testCases[Algorithm.AES_128_ECB];
  it("should encrypt a secret", () => {
    const crypt = new Aes128Ecb(testCase.config);
    const crypted = crypt.encrypt(testCase.secret.plain);
    expect(crypted).not.toBe(testCase.secret.plain);
    expect(crypted).toBe(testCase.secret.crypted);
  });
});
