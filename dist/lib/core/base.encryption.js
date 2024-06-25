"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEncryption = void 0;
const crypto = require("crypto");
class BaseEncryption {
    constructor(config) {
        this.config = config;
        this.validateConfig(config);
    }
    encrypt(value) {
        const cipher = crypto.createCipheriv(this.config.algorithm, Buffer.from(this.config.key, "utf8"), Buffer.from(this.config.iv, "utf8"));
        let encrypted = cipher.update(value, "utf8", "base64");
        encrypted += cipher.final("base64");
        return encrypted;
    }
    decrypt(encrypted) {
        const decipher = crypto.createDecipheriv(this.config.algorithm, Buffer.from(this.config.key, "utf8"), Buffer.from(this.config.iv, "utf8"));
        const decrypted = decipher.update(encrypted, "base64", "utf8");
        return decrypted + decipher.final("utf8");
    }
}
exports.BaseEncryption = BaseEncryption;
//# sourceMappingURL=base.encryption.js.map