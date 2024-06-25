"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aes192Cfb = void 0;
const algorithm_enum_1 = require("../../enums/algorithm.enum");
const aes_1 = require("./aes");
class Aes192Cfb extends aes_1.AesEncryption {
    constructor(config) {
        super({
            algorithm: algorithm_enum_1.Algorithm.AES_192_CFB,
            key: config.key,
            iv: config.iv,
        });
    }
}
exports.Aes192Cfb = Aes192Cfb;
//# sourceMappingURL=aes.192.cfb.js.map