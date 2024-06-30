import { Algorithm } from "../../../enums/algorithm.enum";
import { AesEncryption } from "./aes";

export class Aes192Ecb extends AesEncryption {
  constructor(config) {
    super({
      algorithm: Algorithm.AES_192_ECB,
      key: config.key,
      iv: config.iv,
    });
  }
}
