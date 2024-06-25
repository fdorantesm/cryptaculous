import { testCases } from "../../../../test/cases";
import { Algorithm } from "../../enums/algorithm.enum";
import { Aes192Cbc } from "./aes.192.cbc";

describe("AES 192 CBC", () => {
  const testCase = testCases[Algorithm.AES_192_CBC];

  it("should encrypt a secret", () => {
    const crypt = new Aes192Cbc(testCase.config);
    const crypted = crypt.encrypt(testCase.secret.plain);
    expect(crypted).not.toBe(testCase.secret.plain);
    expect(crypted).toBe(testCase.secret.crypted);
  });
});
