import { Algorithm } from "../../enums/algorithm.enum";
import { AesEncryption } from "./aes";

export class Aes256Ofb extends AesEncryption {
  constructor(config) {
    super({
      algorithm: Algorithm.AES_256_OFB,
      key: config.key,
      iv: config.iv,
    });
  }
}
