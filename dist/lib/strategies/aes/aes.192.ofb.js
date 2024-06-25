"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aes192Ofb = void 0;
const algorithm_enum_1 = require("../../enums/algorithm.enum");
const aes_1 = require("./aes");
class Aes192Ofb extends aes_1.AesEncryption {
    constructor(config) {
        super({
            algorithm: algorithm_enum_1.Algorithm.AES_192_OFB,
            key: config.key,
            iv: config.iv,
        });
    }
}
exports.Aes192Ofb = Aes192Ofb;
//# sourceMappingURL=aes.192.ofb.js.map