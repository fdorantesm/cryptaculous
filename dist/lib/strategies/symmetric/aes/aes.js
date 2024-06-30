"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.AesEncryption=void 0;const base_symmetrical_encryption_1=require("../../../core/base-symmetrical.encryption"),aes_consts_1=require("./aes.consts"),unsupported_algorithm_exception_1=require("../../../exceptions/unsupported-algorithm.exception"),invalid_key_length_exception_1=require("../../../exceptions/invalid-key-length.exception"),invalid_iv_length_exception_1=require("../../../exceptions/invalid-iv-length.exception");class AesEncryption extends base_symmetrical_encryption_1.BaseSymmetricEncryption{validateConfig(e){const t=AesEncryption.algorithmMap[e.algorithm];if(!t)throw new unsupported_algorithm_exception_1.UnsupportedAlgorithmException(e.algorithm);if(Buffer.from(e.key,"utf8").length!==t.keyLength)throw new invalid_key_length_exception_1.InvalidKeyLengthException(`Invalid key length: Expected ${t.keyLength} bytes, got ${Buffer.from(e.key,"utf8").length}`);if(Buffer.from(e.iv,"utf8").length!==t.ivLength)throw new invalid_iv_length_exception_1.InvalidIVLengthException(`Invalid IV length: Expected ${t.ivLength} bytes, got ${Buffer.from(e.iv,"utf8").length}`)}}exports.AesEncryption=AesEncryption,AesEncryption.algorithmMap=aes_consts_1.AES_ALGORITHM_MAP;