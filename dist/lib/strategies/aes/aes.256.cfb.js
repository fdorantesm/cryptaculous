"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aes256Cfb = void 0;
const algorithm_enum_1 = require("../../enums/algorithm.enum");
const aes_1 = require("./aes");
class Aes256Cfb extends aes_1.AesEncryption {
    constructor(config) {
        super({
            algorithm: algorithm_enum_1.Algorithm.AES_256_CFB,
            key: config.key,
            iv: config.iv,
        });
    }
}
exports.Aes256Cfb = Aes256Cfb;
//# sourceMappingURL=aes.256.cfb.js.map