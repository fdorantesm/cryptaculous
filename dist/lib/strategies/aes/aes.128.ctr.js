"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aes128Ctr = void 0;
const algorithm_enum_1 = require("../../enums/algorithm.enum");
const aes_1 = require("./aes");
class Aes128Ctr extends aes_1.AesEncryption {
    constructor(config) {
        super({
            algorithm: algorithm_enum_1.Algorithm.AES_128_CTR,
            key: config.key,
            iv: config.iv,
        });
    }
}
exports.Aes128Ctr = Aes128Ctr;
//# sourceMappingURL=aes.128.ctr.js.map