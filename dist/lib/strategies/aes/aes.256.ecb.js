"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aes256Ecb = void 0;
const algorithm_enum_1 = require("../../enums/algorithm.enum");
const aes_1 = require("./aes");
class Aes256Ecb extends aes_1.AesEncryption {
    constructor(config) {
        super({
            algorithm: algorithm_enum_1.Algorithm.AES_256_ECB,
            key: config.key,
            iv: config.iv,
        });
    }
}
exports.Aes256Ecb = Aes256Ecb;
//# sourceMappingURL=aes.256.ecb.js.map