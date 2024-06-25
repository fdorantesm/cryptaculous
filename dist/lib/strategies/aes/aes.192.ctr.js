"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aes192Ctr = void 0;
const algorithm_enum_1 = require("../../enums/algorithm.enum");
const aes_1 = require("./aes");
class Aes192Ctr extends aes_1.AesEncryption {
    constructor(config) {
        super({
            algorithm: algorithm_enum_1.Algorithm.AES_192_CTR,
            key: config.key,
            iv: config.iv,
        });
    }
}
exports.Aes192Ctr = Aes192Ctr;
//# sourceMappingURL=aes.192.ctr.js.map