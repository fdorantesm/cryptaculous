"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnsupportedAlgorithmException = void 0;
class UnsupportedAlgorithmException extends Error {
    constructor(algorithm) {
        super(`Unsupported algorithm: ${algorithm}`);
    }
}
exports.UnsupportedAlgorithmException = UnsupportedAlgorithmException;
//# sourceMappingURL=unsupported-algorithm.exception.js.map