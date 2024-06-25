import type { AlgorithmCase } from "../../../../test/case.type";
import { testCases } from "../../../../test/cases";
import { Algorithm } from "../../enums/algorithm.enum";
import { Aes128Cfb } from "./aes.128.cfb";

describe("AES 128 CFB", () => {
  const testCase: AlgorithmCase = testCases[Algorithm.AES_128_CFB];

  it("should encrypt a secret", () => {
    const crypt = new Aes128Cfb(testCase.config);
    const crypted = crypt.encrypt(testCase.secret.plain);
    expect(crypted).not.toBe(testCase.secret.plain);
    expect(crypted).toBe(testCase.secret.crypted);
  });
});
