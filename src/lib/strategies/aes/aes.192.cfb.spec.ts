import { testCases } from "../../../../test/cases";
import { Algorithm } from "../../enums/algorithm.enum";
import { Aes192Cfb } from "./aes.192.cfb";

describe("AES 192 CFB", () => {
  const testCase = testCases[Algorithm.AES_192_CFB];

  it("should encrypt a secret", () => {
    const crypt = new Aes192Cfb(testCase.config);
    const crypted = crypt.encrypt(testCase.secret.plain);
    expect(crypted).not.toBe(testCase.secret.plain);
    expect(crypted).toBe(testCase.secret.crypted);
  });
});
