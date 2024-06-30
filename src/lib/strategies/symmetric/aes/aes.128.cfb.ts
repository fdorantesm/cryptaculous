import { Algorithm } from "../../../enums/algorithm.enum";
import { AesEncryption } from "./aes";

export class Aes128Cfb extends AesEncryption {
  constructor(config) {
    super({
      algorithm: Algorithm.AES_128_CFB,
      key: config.key,
      iv: config.iv,
    });
  }
}
