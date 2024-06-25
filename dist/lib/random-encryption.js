"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomEncryption = void 0;
const crypto = require("crypto");
const encryption_factory_1 = require("./factories/encryption.factory");
const aes_consts_1 = require("./strategies/aes/aes.consts");
class RandomEncryption {
    static encrypt(algorithm, value) {
        const params = aes_consts_1.AES_ALGORITHM_MAP[algorithm];
        const key = crypto
            .randomBytes(Math.ceil(params.keyLength / 2))
            .toString("hex");
        const iv = crypto
            .randomBytes(Math.ceil(params.ivLength / 2))
            .toString("hex");
        const crypt = encryption_factory_1.EncryptionFactory.createEncryption(algorithm, { key, iv });
        const payload = crypt.encrypt(value);
        return {
            payload,
            algorithm,
            key,
            iv,
        };
    }
    static decrypt(keyChain) {
        const { algorithm, key, iv, payload } = keyChain;
        const crypt = encryption_factory_1.EncryptionFactory.createEncryption(algorithm, { key, iv });
        return crypt.decrypt(payload);
    }
}
exports.RandomEncryption = RandomEncryption;
//# sourceMappingURL=random-encryption.js.map