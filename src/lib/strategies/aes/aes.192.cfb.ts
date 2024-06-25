import { Algorithm } from "../../enums/algorithm.enum";
import { AesEncryption } from "./aes";

export class Aes192Cfb extends AesEncryption {
  constructor(config) {
    super({
      algorithm: Algorithm.AES_192_CFB,
      key: config.key,
      iv: config.iv,
    });
  }
}
