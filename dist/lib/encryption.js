"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Encryption = void 0;
const missing_strategy_exception_1 = require("./exceptions/missing-strategy.exception");
class Encryption {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    encrypt(data) {
        if (!this.strategy) {
            throw new missing_strategy_exception_1.MissingStrategyException();
        }
        return this.strategy.encrypt(data);
    }
    decrypt(data) {
        if (!this.strategy) {
            throw new missing_strategy_exception_1.MissingStrategyException();
        }
        return this.strategy.decrypt(data);
    }
}
exports.Encryption = Encryption;
//# sourceMappingURL=encryption.js.map