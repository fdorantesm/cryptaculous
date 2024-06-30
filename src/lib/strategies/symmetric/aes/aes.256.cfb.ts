import { Algorithm } from "../../../enums/algorithm.enum";
import { AesEncryption } from "./aes";

export class Aes256Cfb extends AesEncryption {
  constructor(config) {
    super({
      algorithm: Algorithm.AES_256_CFB,
      key: config.key,
      iv: config.iv,
    });
  }
}
