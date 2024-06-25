import { Algorithm } from "../../enums/algorithm.enum";
import { AesEncryption } from "./aes";

export class Aes128Ecb extends AesEncryption {
  constructor(config) {
    super({
      algorithm: Algorithm.AES_128_ECB,
      key: config.key,
      iv: config.iv,
    });
  }
}
