"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aes192Ecb = void 0;
const algorithm_enum_1 = require("../../enums/algorithm.enum");
const aes_1 = require("./aes");
class Aes192Ecb extends aes_1.AesEncryption {
    constructor(config) {
        super({
            algorithm: algorithm_enum_1.Algorithm.AES_192_ECB,
            key: config.key,
            iv: config.iv,
        });
    }
}
exports.Aes192Ecb = Aes192Ecb;
//# sourceMappingURL=aes.192.ecb.js.map