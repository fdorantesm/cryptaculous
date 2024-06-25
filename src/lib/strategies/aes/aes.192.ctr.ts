import { Algorithm } from "../../enums/algorithm.enum";
import { AesEncryption } from "./aes";

export class Aes192Ctr extends AesEncryption {
  constructor(config) {
    super({
      algorithm: Algorithm.AES_192_CTR,
      key: config.key,
      iv: config.iv,
    });
  }
}
