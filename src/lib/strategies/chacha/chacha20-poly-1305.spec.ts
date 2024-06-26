import { testCases } from "../../../../test/cases";
import { Algorithm } from "../../enums/algorithm.enum";
import { Chacha20Encryption } from "./chacha20-poly-1305";

describe("Chacha20 Poly1305", () => {
  const testCase = testCases[Algorithm.CHACHA20_POLY_1305];

  it("should encrypt", () => {
    const strategy = new Chacha20Encryption({
      algorithm: Algorithm.CHACHA20_POLY_1305,
      ...testCase.config,
    });

    const encrypted = strategy.encrypt(testCase.secret.plain);

    expect(encrypted).toEqual(testCase.secret.crypted);
  });
});
