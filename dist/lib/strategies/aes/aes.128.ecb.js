"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aes128Ecb = void 0;
const algorithm_enum_1 = require("../../enums/algorithm.enum");
const aes_1 = require("./aes");
class Aes128Ecb extends aes_1.AesEncryption {
    constructor(config) {
        super({
            algorithm: algorithm_enum_1.Algorithm.AES_128_ECB,
            key: config.key,
            iv: config.iv,
        });
    }
}
exports.Aes128Ecb = Aes128Ecb;
//# sourceMappingURL=aes.128.ecb.js.map