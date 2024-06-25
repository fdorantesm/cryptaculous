"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingStrategyException = void 0;
class MissingStrategyException extends Error {
    constructor() {
        super("Missing encryption strategy");
    }
}
exports.MissingStrategyException = MissingStrategyException;
//# sourceMappingURL=missing-strategy.exception.js.map