import { Algorithm } from "../../../enums/algorithm.enum";
import { AesEncryption } from "./aes";

export class Aes256Ecb extends AesEncryption {
  constructor(config) {
    super({
      algorithm: Algorithm.AES_256_ECB,
      key: config.key,
      iv: config.iv,
    });
  }
}
