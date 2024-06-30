import { Algorithm } from "../../../enums/algorithm.enum";
import { AesEncryption } from "./aes";

export class Aes192Cbc extends AesEncryption {
  constructor(config) {
    super({
      algorithm: Algorithm.AES_192_CBC,
      key: config.key,
      iv: config.iv,
    });
  }
}
