"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AesEncryption = void 0;
const base_encryption_1 = require("../../core/base.encryption");
const aes_consts_1 = require("./aes.consts");
const unsupported_algorithm_exception_1 = require("../../exceptions/unsupported-algorithm.exception");
const invalid_key_length_exception_1 = require("../../exceptions/invalid-key-length.exception");
const invalid_iv_length_exception_1 = require("../../exceptions/invalid-iv-length.exception");
class AesEncryption extends base_encryption_1.BaseEncryption {
    validateConfig(config) {
        const algorithmDetails = AesEncryption.algorithmMap[config.algorithm];
        if (!algorithmDetails) {
            throw new unsupported_algorithm_exception_1.UnsupportedAlgorithmException(config.algorithm);
        }
        if (Buffer.from(config.key, "utf8").length !== algorithmDetails.keyLength) {
            throw new invalid_key_length_exception_1.InvalidKeyLengthException(`Invalid key length: Expected ${algorithmDetails.keyLength} bytes, got ${Buffer.from(config.key, "utf8").length}`);
        }
        if (Buffer.from(config.iv, "utf8").length !== algorithmDetails.ivLength) {
            throw new invalid_iv_length_exception_1.InvalidIVLengthException(`Invalid IV length: Expected ${algorithmDetails.ivLength} bytes, got ${Buffer.from(config.iv, "utf8").length}`);
        }
    }
}
exports.AesEncryption = AesEncryption;
AesEncryption.algorithmMap = aes_consts_1.AES_ALGORITHM_MAP;
//# sourceMappingURL=aes.js.map