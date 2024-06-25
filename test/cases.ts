import { Algorithm } from "../src/lib/enums/algorithm.enum";
import type { AlgorithmCases } from "./case.type";

export const SECRET = "secret";

export const testCases: AlgorithmCases = {
  [Algorithm.AES_256_CBC]: {
    config: {
      key: "1c5b2bc5789a0f9b0c576950aaf049b6",
      iv: "704a59f3d523c765",
    },
    secret: {
      plain: SECRET,
      crypted: "EV2YEWJZcpLdBrkqdDij3Q==",
    },
  },
  [Algorithm.AES_128_CBC]: {
    config: {
      key: "1234567890123456",
      iv: "1234567890123456",
    },
    secret: {
      plain: SECRET,
      crypted: "gmhxU9Ir4kk8AGO/NHD3cQ==",
    },
  },
  [Algorithm.AES_192_CBC]: {
    config: {
      key: "123456789012345678901234",
      iv: "1234567890123456",
    },
    secret: {
      plain: SECRET,
      crypted: "Nwu3n0MGVr/pl85r15EKFQ==",
    },
  },
  [Algorithm.AES_128_ECB]: {
    config: {
      key: "1234567890123456",
      iv: "",
    },
    secret: {
      plain: SECRET,
      crypted: "RyCVJG3NbUw4ejaukvfjuQ==",
    },
  },
  [Algorithm.AES_192_ECB]: {
    config: {
      key: "123456789012345678901234",
      iv: "",
    },
    secret: {
      plain: SECRET,
      crypted: "QuZ4PWgGuqVBrbhRu8P/yg==",
    },
  },
  [Algorithm.AES_256_ECB]: {
    config: {
      key: "12345678901234567890123456789012",
      iv: "",
    },
    secret: {
      plain: SECRET,
      crypted: "WOvigkPrKF2C4rzS0iYMpw==",
    },
  },
  [Algorithm.AES_128_CFB]: {
    config: {
      key: "1234567890123456",
      iv: "1234567890123456",
    },
    secret: {
      plain: SECRET,
      crypted: "Bhmufrko",
    },
  },
  [Algorithm.AES_192_CFB]: {
    config: {
      key: "123456789012345678901234",
      iv: "1234567890123456",
    },
    secret: {
      plain: SECRET,
      crypted: "Rql4h0KN",
    },
  },
  [Algorithm.AES_256_CFB]: {
    config: {
      key: "12345678901234567890123456789012",
      iv: "1234567890123456",
    },
    secret: {
      plain: SECRET,
      crypted: "vEQrcMye",
    },
  },
  [Algorithm.AES_128_OFB]: {
    config: {
      key: "1234567890123456",
      iv: "1234567890123456",
    },
    secret: {
      plain: SECRET,
      crypted: "Bhmufrko",
    },
  },
  [Algorithm.AES_192_OFB]: {
    config: {
      key: "123456789012345678901234",
      iv: "1234567890123456",
    },
    secret: {
      plain: SECRET,
      crypted: "Rql4h0KN",
    },
  },
  [Algorithm.AES_256_OFB]: {
    config: {
      key: "12345678901234567890123456789012",
      iv: "1234567890123456",
    },
    secret: {
      plain: SECRET,
      crypted: "vEQrcMye",
    },
  },
  [Algorithm.AES_128_CTR]: {
    config: {
      key: "1234567890123456",
      iv: "1234567890123456",
    },
    secret: {
      plain: SECRET,
      crypted: "Bhmufrko",
    },
  },
  [Algorithm.AES_192_CTR]: {
    config: {
      key: "123456789012345678901234",
      iv: "1234567890123456",
    },
    secret: {
      plain: SECRET,
      crypted: "Rql4h0KN",
    },
  },
  [Algorithm.AES_256_CTR]: {
    config: {
      key: "12345678901234567890123456789012",
      iv: "1234567890123456",
    },
    secret: {
      plain: SECRET,
      crypted: "vEQrcMye",
    },
  },
};
