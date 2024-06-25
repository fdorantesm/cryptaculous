import { testCases } from "../../../../test/cases";
import { Algorithm } from "../../enums/algorithm.enum";
import { Aes192Ctr } from "./aes.192.ctr";

describe("AES 192 CTR", () => {
  const testCase = testCases[Algorithm.AES_192_CTR];

  it("should encrypt a secret", () => {
    const crypt = new Aes192Ctr(testCase.config);
    const crypted = crypt.encrypt(testCase.secret.plain);
    expect(crypted).not.toBe(testCase.secret.plain);
    expect(crypted).toBe(testCase.secret.crypted);
  });
});
