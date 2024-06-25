"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aes128Cbc = void 0;
const algorithm_enum_1 = require("../../enums/algorithm.enum");
const aes_1 = require("./aes");
class Aes128Cbc extends aes_1.AesEncryption {
    constructor(config) {
        super({
            algorithm: algorithm_enum_1.Algorithm.AES_128_CBC,
            key: config.key,
            iv: config.iv,
        });
    }
}
exports.Aes128Cbc = Aes128Cbc;
//# sourceMappingURL=aes.128.cbc.js.map