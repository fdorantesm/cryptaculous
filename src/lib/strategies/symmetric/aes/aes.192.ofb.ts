import { Algorithm } from "../../../enums/algorithm.enum";
import { AesEncryption } from "./aes";

export class Aes192Ofb extends AesEncryption {
  constructor(config) {
    super({
      algorithm: Algorithm.AES_192_OFB,
      key: config.key,
      iv: config.iv,
    });
  }
}
