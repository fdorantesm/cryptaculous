import type { AlgorithmCase } from "../../../../test/case.type";
import { testCases } from "../../../../test/cases";
import { Algorithm } from "../../enums/algorithm.enum";
import { Aes128Cbc } from "./aes.128.cbc";

describe("AES 128 CBC", () => {
  const testCase: AlgorithmCase = testCases[Algorithm.AES_128_CBC];

  it("should encrypt a secret", () => {
    const crypt = new Aes128Cbc(testCase.config);
    const crypted = crypt.encrypt(testCase.secret.plain);
    expect(crypted).not.toBe(testCase.secret.plain);
    expect(crypted).toBe(testCase.secret.crypted);
  });
});
