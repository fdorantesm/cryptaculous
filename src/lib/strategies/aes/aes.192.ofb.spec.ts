import type { AlgorithmCase } from "../../../../test/case.type";
import { testCases } from "../../../../test/cases";
import { Algorithm } from "../../enums/algorithm.enum";
import { Aes192Ofb } from "./aes.192.ofb";

describe("AES 192 OFB", () => {
  const testCase: AlgorithmCase = testCases[Algorithm.AES_192_OFB];

  it("should encrypt a secret", () => {
    const crypt = new Aes192Ofb(testCase.config);
    const crypted = crypt.encrypt(testCase.secret.plain);
    expect(crypted).not.toBe(testCase.secret.plain);
    expect(crypted).toBe(testCase.secret.crypted);
  });
});
