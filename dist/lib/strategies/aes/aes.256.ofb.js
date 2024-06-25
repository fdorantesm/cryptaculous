"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aes256Ofb = void 0;
const algorithm_enum_1 = require("../../enums/algorithm.enum");
const aes_1 = require("./aes");
class Aes256Ofb extends aes_1.AesEncryption {
    constructor(config) {
        super({
            algorithm: algorithm_enum_1.Algorithm.AES_256_OFB,
            key: config.key,
            iv: config.iv,
        });
    }
}
exports.Aes256Ofb = Aes256Ofb;
//# sourceMappingURL=aes.256.ofb.js.map