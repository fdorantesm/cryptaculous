import { Algorithm } from "../../enums/algorithm.enum";
import { AesEncryption } from "./aes";

export class Aes128Ctr extends AesEncryption {
  constructor(config) {
    super({
      algorithm: Algorithm.AES_128_CTR,
      key: config.key,
      iv: config.iv,
    });
  }
}
