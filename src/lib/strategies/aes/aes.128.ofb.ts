import { Algorithm } from "../../enums/algorithm.enum";
import { AesEncryption } from "./aes";

export class Aes128Ofb extends AesEncryption {
  constructor(config) {
    super({
      algorithm: Algorithm.AES_128_OFB,
      key: config.key,
      iv: config.iv,
    });
  }
}
