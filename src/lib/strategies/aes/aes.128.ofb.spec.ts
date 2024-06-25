import type { AlgorithmCase } from "../../../../test/case.type";
import { testCases } from "../../../../test/cases";
import { Algorithm } from "../../enums/algorithm.enum";
import { Aes128Ofb } from "./aes.128.ofb";

describe("AES 128 OFB", () => {
  const testCase: AlgorithmCase = testCases[Algorithm.AES_128_OFB];

  it("should encrypt a secret", () => {
    const crypt = new Aes128Ofb(testCase.config);
    const crypted = crypt.encrypt(testCase.secret.plain);
    expect(crypted).not.toBe(testCase.secret.plain);
    expect(crypted).toBe(testCase.secret.crypted);
  });
});
