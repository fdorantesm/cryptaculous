"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptionFactory = void 0;
const algorithm_enum_1 = require("../enums/algorithm.enum");
const unsupported_algorithm_exception_1 = require("../exceptions/unsupported-algorithm.exception");
const aes_128_cbc_1 = require("../strategies/aes/aes.128.cbc");
const aes_128_cfb_1 = require("../strategies/aes/aes.128.cfb");
const aes_128_ctr_1 = require("../strategies/aes/aes.128.ctr");
const aes_128_ecb_1 = require("../strategies/aes/aes.128.ecb");
const aes_128_ofb_1 = require("../strategies/aes/aes.128.ofb");
const aes_192_cbc_1 = require("../strategies/aes/aes.192.cbc");
const aes_192_cfb_1 = require("../strategies/aes/aes.192.cfb");
const aes_192_ctr_1 = require("../strategies/aes/aes.192.ctr");
const aes_192_ecb_1 = require("../strategies/aes/aes.192.ecb");
const aes_192_ofb_1 = require("../strategies/aes/aes.192.ofb");
const aes_256_cbc_1 = require("../strategies/aes/aes.256.cbc");
const aes_256_cfb_1 = require("../strategies/aes/aes.256.cfb");
const aes_256_ctr_1 = require("../strategies/aes/aes.256.ctr");
const aes_256_ecb_1 = require("../strategies/aes/aes.256.ecb");
const aes_256_ofb_1 = require("../strategies/aes/aes.256.ofb");
class EncryptionFactory {
    constructor() {
        // Prevents instantiation
    }
    static createEncryption(algorithm, config) {
        return this.getEncryptionClass(algorithm, config);
    }
    static getEncryptionClass(algorithm, config) {
        const map = {
            [algorithm_enum_1.Algorithm.AES_128_CBC]: aes_128_cbc_1.Aes128Cbc,
            [algorithm_enum_1.Algorithm.AES_128_CFB]: aes_128_cfb_1.Aes128Cfb,
            [algorithm_enum_1.Algorithm.AES_128_CTR]: aes_128_ctr_1.Aes128Ctr,
            [algorithm_enum_1.Algorithm.AES_128_ECB]: aes_128_ecb_1.Aes128Ecb,
            [algorithm_enum_1.Algorithm.AES_128_OFB]: aes_128_ofb_1.Aes128Ofb,
            [algorithm_enum_1.Algorithm.AES_192_CBC]: aes_192_cbc_1.Aes192Cbc,
            [algorithm_enum_1.Algorithm.AES_192_CFB]: aes_192_cfb_1.Aes192Cfb,
            [algorithm_enum_1.Algorithm.AES_192_CTR]: aes_192_ctr_1.Aes192Ctr,
            [algorithm_enum_1.Algorithm.AES_192_ECB]: aes_192_ecb_1.Aes192Ecb,
            [algorithm_enum_1.Algorithm.AES_192_OFB]: aes_192_ofb_1.Aes192Ofb,
            [algorithm_enum_1.Algorithm.AES_256_CBC]: aes_256_cbc_1.Aes256Cbc,
            [algorithm_enum_1.Algorithm.AES_256_CFB]: aes_256_cfb_1.Aes256Cfb,
            [algorithm_enum_1.Algorithm.AES_256_CTR]: aes_256_ctr_1.Aes256Ctr,
            [algorithm_enum_1.Algorithm.AES_256_ECB]: aes_256_ecb_1.Aes256Ecb,
            [algorithm_enum_1.Algorithm.AES_256_OFB]: aes_256_ofb_1.Aes256Ofb,
        };
        const classReference = map[algorithm];
        if (!classReference) {
            throw new unsupported_algorithm_exception_1.UnsupportedAlgorithmException(algorithm);
        }
        return new classReference(config);
    }
}
exports.EncryptionFactory = EncryptionFactory;
//# sourceMappingURL=encryption.factory.js.map