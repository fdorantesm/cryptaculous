"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aes128Ofb = void 0;
const algorithm_enum_1 = require("../../enums/algorithm.enum");
const aes_1 = require("./aes");
class Aes128Ofb extends aes_1.AesEncryption {
    constructor(config) {
        super({
            algorithm: algorithm_enum_1.Algorithm.AES_128_OFB,
            key: config.key,
            iv: config.iv,
        });
    }
}
exports.Aes128Ofb = Aes128Ofb;
//# sourceMappingURL=aes.128.ofb.js.map