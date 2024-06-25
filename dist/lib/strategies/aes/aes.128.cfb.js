"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aes128Cfb = void 0;
const algorithm_enum_1 = require("../../enums/algorithm.enum");
const aes_1 = require("./aes");
class Aes128Cfb extends aes_1.AesEncryption {
    constructor(config) {
        super({
            algorithm: algorithm_enum_1.Algorithm.AES_128_CFB,
            key: config.key,
            iv: config.iv,
        });
    }
}
exports.Aes128Cfb = Aes128Cfb;
//# sourceMappingURL=aes.128.cfb.js.map