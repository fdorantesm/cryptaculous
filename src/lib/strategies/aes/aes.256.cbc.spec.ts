import type { AlgorithmCase } from "../../../../test/case.type";
import { testCases } from "../../../../test/cases";
import { Algorithm } from "../../enums/algorithm.enum";
import { Aes256Cbc } from "./aes.256.cbc";

describe("AES 256 CBC", () => {
  const testCase: AlgorithmCase = testCases[Algorithm.AES_256_CBC];

  it("should encrypt a secret", () => {
    const crypt = new Aes256Cbc(testCase.config);
    const crypted = crypt.encrypt(testCase.secret.plain);
    expect(crypted).not.toBe(testCase.secret.plain);
    expect(crypted).toBe(testCase.secret.crypted);
  });
});
