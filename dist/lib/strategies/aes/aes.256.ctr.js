"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aes256Ctr = void 0;
const algorithm_enum_1 = require("../../enums/algorithm.enum");
const aes_1 = require("./aes");
class Aes256Ctr extends aes_1.AesEncryption {
    constructor(config) {
        super({
            algorithm: algorithm_enum_1.Algorithm.AES_256_CTR,
            key: config.key,
            iv: config.iv,
        });
    }
}
exports.Aes256Ctr = Aes256Ctr;
//# sourceMappingURL=aes.256.ctr.js.map