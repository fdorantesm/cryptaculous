"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aes192Cbc = void 0;
const algorithm_enum_1 = require("../../enums/algorithm.enum");
const aes_1 = require("./aes");
class Aes192Cbc extends aes_1.AesEncryption {
    constructor(config) {
        super({
            algorithm: algorithm_enum_1.Algorithm.AES_192_CBC,
            key: config.key,
            iv: config.iv,
        });
    }
}
exports.Aes192Cbc = Aes192Cbc;
//# sourceMappingURL=aes.192.cbc.js.map