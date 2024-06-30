import { Algorithm } from "../../../enums/algorithm.enum";
import { AesEncryption } from "./aes";

export class Aes256Ctr extends AesEncryption {
  constructor(config) {
    super({
      algorithm: Algorithm.AES_256_CTR,
      key: config.key,
      iv: config.iv,
    });
  }
}
