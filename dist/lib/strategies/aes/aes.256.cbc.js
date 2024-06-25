"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aes256Cbc = void 0;
const algorithm_enum_1 = require("../../enums/algorithm.enum");
const aes_1 = require("./aes");
class Aes256Cbc extends aes_1.AesEncryption {
    constructor(config) {
        super({
            algorithm: algorithm_enum_1.Algorithm.AES_256_CBC,
            key: config.key,
            iv: config.iv,
        });
    }
}
exports.Aes256Cbc = Aes256Cbc;
//# sourceMappingURL=aes.256.cbc.js.map